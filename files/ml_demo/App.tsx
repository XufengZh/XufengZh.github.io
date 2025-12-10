import React, { useState, useEffect } from 'react';
import { FileUpload } from './components/FileUpload';
import { DataPreview } from './components/DataPreview';
import { Results } from './components/Results';
import { pythonService } from './services/pythonService';
import { TaskType, MLModel, TrainingResult } from './types';
import { Brain, Play, BarChart2, Loader2, AlertTriangle, RefreshCcw } from 'lucide-react';
import Papa from 'papaparse';

const App: React.FC = () => {
  // Python State
  const [pythonReady, setPythonReady] = useState(false);
  const [pythonError, setPythonError] = useState<string | null>(null);
  
  // Data State
  const [csvContent, setCsvContent] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [parsedData, setParsedData] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);

  // Settings State
  const [hasHeader, setHasHeader] = useState(true);
  const [targetCol, setTargetCol] = useState<string>("");
  const [taskType, setTaskType] = useState<TaskType>(TaskType.REGRESSION);

  // Training State
  const [isTraining, setIsTraining] = useState(false);
  const [result, setResult] = useState<TrainingResult | null>(null);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [stats, setStats] = useState<any>(null);

  // Initialize Python on Load
  useEffect(() => {
    const initPython = async () => {
      try {
        await pythonService.init();
        setPythonReady(true);
      } catch (e) {
        setPythonError("Failed to initialize Python environment. Please refresh or check your connection.");
      }
    };
    initPython();
  }, []);

  // Handle file upload
  const handleFileLoaded = (content: string, name: string) => {
    setCsvContent(content);
    setFileName(name);
    setError(null);
    setResult(null);
    setStats(null);

    // Quick parse for JS preview
    Papa.parse(content, {
      preview: 10,
      complete: (results) => {
        if (results.data && results.data.length > 0) {
          const data = results.data as string[][];
          setParsedData(data);
          
          // Auto-detect settings
          const headers = data[0];
          if (headers.length > 0) {
            const potentialTarget = headers[headers.length - 1]; // Default to last col
            setTargetCol(potentialTarget);
            
            // Heuristic for Task Type: Check the 2nd row's last column
            // Ideally we check more, but this is a quick JS check
            if (data.length > 1) {
              const sampleVal = data[1][data[1].length - 1];
              const isNumber = !isNaN(parseFloat(sampleVal));
              setTaskType(isNumber ? TaskType.REGRESSION : TaskType.CLASSIFICATION);
            }
          }
        }
      },
      error: (err) => setError(err.message)
    });
  };

  const handleRunStats = async () => {
    if (!csvContent) return;
    setIsTraining(true);
    setError(null);
    try {
      const statsJson = await pythonService.getDescriptiveStats(csvContent, hasHeader);
      if (statsJson.error) throw new Error(statsJson.error);
      setStats(JSON.parse(statsJson.description));
    } catch (e: any) {
      setError(e.message || "Error calculating stats");
    } finally {
      setIsTraining(false);
    }
  };

  const handleTrain = async (model: MLModel) => {
    if (!csvContent) return;
    setIsTraining(true);
    setResult(null);
    setSelectedModel(model);
    setError(null);

    try {
      const res = await pythonService.runTraining(
        csvContent,
        hasHeader,
        targetCol,
        taskType,
        model
      );
      setResult(res);
    } catch (e: any) {
      setError(e.message || "Training failed");
    } finally {
      setIsTraining(false);
    }
  };

  // Model Lists
  const regressionModels = [MLModel.LINEAR_REGRESSION, MLModel.SVR, MLModel.DECISION_TREE_REG];
  const classificationModels = [MLModel.LOGISTIC_REGRESSION, MLModel.SVC, MLModel.RANDOM_FOREST_CLF];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">AutoML Lite</h1>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            {!pythonReady && !pythonError && (
               <div className="flex items-center text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                 <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                 Initializing Python Engine...
               </div>
            )}
            {pythonReady && (
              <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Python Ready
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Error Banner */}
        {pythonError && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-3" />
            {pythonError}
          </div>
        )}

        {/* 1. Upload */}
        {!csvContent && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Train ML Models in your Browser</h2>
                <p className="text-slate-500">Secure, local processing using Python. No data leaves your device.</p>
             </div>
             <FileUpload onFileLoaded={handleFileLoaded} onError={setError} />
          </div>
        )}

        {/* 2. Workspace */}
        {csvContent && parsedData.length > 0 && (
          <div className="space-y-8 animate-in fade-in duration-500">
             <div className="flex justify-between items-center">
               <h2 className="text-xl font-bold text-slate-800">Data Setup</h2>
               <button 
                 onClick={() => { setCsvContent(null); setParsedData([]); setResult(null); }}
                 className="text-sm text-slate-500 hover:text-slate-800 flex items-center"
               >
                 <RefreshCcw className="w-4 h-4 mr-1"/> Reset
               </button>
             </div>

             <DataPreview 
               rawData={parsedData}
               fileName={fileName}
               hasHeader={hasHeader}
               setHasHeader={setHasHeader}
               targetCol={targetCol}
               setTargetCol={setTargetCol}
               taskType={taskType}
               setTaskType={setTaskType}
             />

             {/* Action Bar */}
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Play className="w-5 h-5 text-slate-800" />
                  <h3 className="text-lg font-bold text-slate-800">Operations</h3>
                </div>

                {error && (
                  <div className="mb-6 bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                    Error: {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                   {/* Stats Button */}
                   <button
                     disabled={!pythonReady || isTraining}
                     onClick={handleRunStats}
                     className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors disabled:opacity-50"
                   >
                     {isTraining && !selectedModel ? <Loader2 className="w-4 h-4 animate-spin"/> : <BarChart2 className="w-4 h-4" />}
                     <span>Descriptive Stats</span>
                   </button>

                   {/* Model Buttons */}
                   {(taskType === TaskType.REGRESSION ? regressionModels : classificationModels).map(model => (
                      <button
                        key={model}
                        disabled={!pythonReady || isTraining}
                        onClick={() => handleTrain(model)}
                        className={`
                          flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors border shadow-sm
                          disabled:opacity-50 disabled:cursor-not-allowed
                          ${selectedModel === model && isTraining 
                            ? 'bg-blue-600 text-white border-blue-600' 
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-600'}
                        `}
                      >
                         {selectedModel === model && isTraining && <Loader2 className="w-4 h-4 animate-spin"/>}
                         <span>{model}</span>
                      </button>
                   ))}
                </div>
             </div>

             {/* Stats Output */}
             {stats && (
               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 overflow-x-auto animate-in fade-in">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Descriptive Statistics</h3>
                  <pre className="text-xs bg-slate-50 p-4 rounded-lg font-mono text-slate-600">
                    {JSON.stringify(stats, null, 2)}
                  </pre>
               </div>
             )}

             {/* ML Output */}
             {result && (
               <Results result={result} taskType={taskType} modelName={selectedModel} />
             )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;