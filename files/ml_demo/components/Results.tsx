import React from 'react';
import { 
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { TrainingResult, TaskType } from '../types';

interface ResultsProps {
  result: TrainingResult;
  taskType: TaskType;
  modelName: string;
}

export const Results: React.FC<ResultsProps> = ({ result, taskType, modelName }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Results: {modelName}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {taskType === TaskType.REGRESSION ? (
            <>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <span className="text-sm text-blue-600 font-medium">R² Score</span>
                <div className="text-2xl font-bold text-blue-900">{result.r2?.toFixed(4)}</div>
                <div className="text-xs text-blue-500 mt-1">Closer to 1.0 is better</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="text-sm text-slate-600 font-medium">Mean Squared Error (MSE)</span>
                <div className="text-2xl font-bold text-slate-900">{result.mse?.toFixed(4)}</div>
              </div>
            </>
          ) : (
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 col-span-2">
              <span className="text-sm text-purple-600 font-medium">Accuracy</span>
              <div className="text-2xl font-bold text-purple-900">{(result.accuracy! * 100).toFixed(2)}%</div>
            </div>
          )}
        </div>

        <div className="h-80 w-full mt-8">
          <h4 className="text-sm font-semibold text-slate-600 mb-4">
            {taskType === TaskType.REGRESSION ? 'Actual vs Predicted (Test Set)' : 'Sample Predictions'}
          </h4>
          
          <ResponsiveContainer width="100%" height="100%">
            {taskType === TaskType.REGRESSION ? (
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  dataKey="actual" 
                  name="Actual" 
                  unit="" 
                  label={{ value: 'Actual Values', position: 'insideBottom', offset: -10 }} 
                />
                <YAxis 
                  type="number" 
                  dataKey="predicted" 
                  name="Predicted" 
                  unit="" 
                  label={{ value: 'Predicted Values', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Predictions" data={result.predictions} fill="#2563eb" />
              </ScatterChart>
            ) : (
               <BarChart
                data={result.predictions.slice(0, 15)} // Show first 15 for clarity
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="actual" label={{ value: 'Actual Class', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Predicted Class', angle: -90, position: 'insideLeft' }}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="predicted" fill="#8884d8" name="Predicted Class" />
                <Bar dataKey="actual" fill="#82ca9d" name="Actual Class" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};