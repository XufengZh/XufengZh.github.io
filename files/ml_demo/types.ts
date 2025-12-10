export enum TaskType {
  REGRESSION = 'Regression',
  CLASSIFICATION = 'Classification'
}

export enum MLModel {
  LINEAR_REGRESSION = 'Linear Regression',
  SVR = 'Support Vector Machine (SVR)',
  DECISION_TREE_REG = 'Decision Tree Regressor',
  LOGISTIC_REGRESSION = 'Logistic Regression',
  SVC = 'Support Vector Machine (SVC)',
  RANDOM_FOREST_CLF = 'Random Forest Classifier'
}

export interface CSVData {
  data: string[][]; // Raw rows
  meta: {
    fields?: string[];
  };
}

export interface TrainingResult {
  accuracy?: number; // For classification
  r2?: number; // For regression
  mse?: number; // For regression
  report?: string; // Classification report
  confusionMatrix?: number[][];
  predictions: { actual: number | string; predicted: number | string }[];
  featureImportance?: Record<string, number>;
}

export interface DescriptiveStats {
  count: number;
  mean: number;
  std: number;
  min: number;
  max: number;
  columns: string[];
}