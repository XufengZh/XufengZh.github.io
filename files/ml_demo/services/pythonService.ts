import { DescriptiveStats, TrainingResult } from '../types';

// Declare global Pyodide type
declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<any>;
  }
}

class PythonService {
  private pyodide: any = null;
  private isReady: boolean = false;

  async init() {
    if (this.isReady) return;

    try {
      console.log('Loading Pyodide...');
      this.pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
      });

      console.log('Loading Python packages...');
      await this.pyodide.loadPackage("micropip");
      const micropip = this.pyodide.pyimport("micropip");
      await micropip.install(["pandas", "scikit-learn"]);
      
      this.isReady = true;
      console.log('Python Environment Ready');
    } catch (error) {
      console.error('Failed to initialize Python:', error);
      throw error;
    }
  }

  isInitialized() {
    return this.isReady;
  }

  async getDescriptiveStats(csvContent: string, hasHeader: boolean): Promise<any> {
    if (!this.isReady) throw new Error("Python not ready");

    const headerArg = hasHeader ? 0 : 'None';
    
    const code = `
import pandas as pd
import io
import json

csv_content = ${JSON.stringify(csvContent)}
try:
    df = pd.read_csv(io.StringIO(csv_content), header=${headerArg})
    description = df.describe().to_json()
    columns = list(df.columns)
    json.dumps({"description": description, "columns": columns})
except Exception as e:
    json.dumps({"error": str(e)})
`;
    const result = await this.pyodide.runPythonAsync(code);
    return JSON.parse(result);
  }

  async runTraining(
    csvContent: string,
    hasHeader: boolean,
    targetCol: string,
    taskType: string,
    modelType: string
  ): Promise<TrainingResult> {
    if (!this.isReady) throw new Error("Python not ready");

    // Map TS enum/strings to Python sklearn classes
    const modelMap: Record<string, string> = {
        'Linear Regression': 'LinearRegression()',
        'Support Vector Machine (SVR)': 'SVR()',
        'Decision Tree Regressor': 'DecisionTreeRegressor()',
        'Logistic Regression': 'LogisticRegression(max_iter=1000)',
        'Support Vector Machine (SVC)': 'SVC()',
        'Random Forest Classifier': 'RandomForestClassifier()'
    };

    const pyModel = modelMap[modelType] || 'LinearRegression()';
    const isReg = taskType === 'Regression';
    const headerArg = hasHeader ? 0 : 'None';

    const code = `
import pandas as pd
import numpy as np
import io
import json
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.svm import SVR, SVC
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import r2_score, mean_squared_error, accuracy_score

result_obj = {}

try:
    # 1. Load Data
    csv_content = ${JSON.stringify(csvContent)}
    df = pd.read_csv(io.StringIO(csv_content), header=${headerArg})
    
    # Handle columns if no header was provided initially but we need to reference them
    if ${!hasHeader ? 'True' : 'False'}:
        df.columns = [str(i) for i in df.columns]

    target = "${targetCol}"
    
    # 2. Preprocessing (Simple Drop NA)
    df = df.dropna()
    
    # Split Features/Target
    if target not in df.columns:
        raise Exception(f"Target column '{target}' not found.")

    X = df.drop(columns=[target])
    y = df[target]
    
    # Handle categorical variables (One-Hot Encoding)
    X = pd.get_dummies(X, drop_first=True)
    
    # 3. Train/Test Split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # 4. Model Training
    model = ${pyModel}
    model.fit(X_train, y_train)
    
    # 5. Prediction
    y_pred = model.predict(X_test)
    
    # 6. Metrics
    predictions = []
    # Convert numpy arrays to lists for JSON
    y_test_list = y_test.tolist()
    y_pred_list = y_pred.tolist()
    
    for i in range(min(50, len(y_test_list))): # Limit to 50 for visualization
        predictions.append({"actual": y_test_list[i], "predicted": y_pred_list[i]})

    if ${isReg ? 'True' : 'False'}:
        r2 = r2_score(y_test, y_pred)
        mse = mean_squared_error(y_test, y_pred)
        result_obj = {
            "r2": r2,
            "mse": mse,
            "predictions": predictions
        }
    else:
        acc = accuracy_score(y_test, y_pred)
        result_obj = {
            "accuracy": acc,
            "predictions": predictions
        }

except Exception as e:
    result_obj = {"error": str(e)}

json.dumps(result_obj)
`;

    const result = await this.pyodide.runPythonAsync(code);
    const parsed = JSON.parse(result);
    
    if (parsed.error) {
        throw new Error(parsed.error);
    }
    return parsed;
  }
}

export const pythonService = new PythonService();