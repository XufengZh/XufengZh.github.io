import React from 'react';
import { Settings, Table } from 'lucide-react';
import { TaskType } from '../types';

interface DataPreviewProps {
  rawData: string[][];
  fileName: string;
  hasHeader: boolean;
  setHasHeader: (v: boolean) => void;
  targetCol: string;
  setTargetCol: (v: string) => void;
  taskType: TaskType;
  setTaskType: (v: TaskType) => void;
}

export const DataPreview: React.FC<DataPreviewProps> = ({
  rawData,
  fileName,
  hasHeader,
  setHasHeader,
  targetCol,
  setTargetCol,
  taskType,
  setTaskType
}) => {
  // Extract columns based on header setting
  const columns = hasHeader ? rawData[0] : rawData[0]?.map((_, i) => `Column ${i}`);
  const previewRows = hasHeader ? rawData.slice(1, 6) : rawData.slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Table className="w-5 h-5 text-slate-500" />
          <span className="font-semibold text-slate-700">{fileName} - Preview</span>
        </div>
        <div className="text-xs text-slate-400">Showing first 5 rows</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={`px-4 py-3 font-medium whitespace-nowrap ${col === targetCol ? 'bg-blue-100 text-blue-700 ring-2 ring-inset ring-blue-200' : ''}`}>
                  {col}
                  {col === targetCol && <span className="ml-2 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded">Target</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {previewRows.map((row, rIdx) => (
              <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-2.5 text-slate-600 whitespace-nowrap">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Configuration Controls */}
      <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-6">
        <div className="flex items-center space-x-2 text-slate-800 font-semibold mb-2">
          <Settings className="w-5 h-5" />
          <h3>Configuration</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Header Toggle */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">CSV Structure</label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setHasHeader(!hasHeader)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  hasHeader 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                    : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {hasHeader ? 'Has Header Row' : 'No Header Row'}
              </button>
            </div>
            <p className="text-xs text-slate-500">Toggle if the first row contains column names.</p>
          </div>

          {/* Target Column Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Target Column</label>
            <select
              value={targetCol}
              onChange={(e) => setTargetCol(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {columns.map((col) => (
                <option key={col} value={col}>{col}</option>
              ))}
            </select>
            <p className="text-xs text-slate-500">The column you want to predict.</p>
          </div>

          {/* Task Type Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Machine Learning Task</label>
            <div className="flex p-1 bg-white border border-slate-300 rounded-lg">
              <button
                onClick={() => setTaskType(TaskType.REGRESSION)}
                className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${
                  taskType === TaskType.REGRESSION ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Regression
              </button>
              <button
                onClick={() => setTaskType(TaskType.CLASSIFICATION)}
                className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${
                  taskType === TaskType.CLASSIFICATION ? 'bg-purple-100 text-purple-700' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Classification
              </button>
            </div>
            <p className="text-xs text-slate-500">
              {taskType === TaskType.REGRESSION ? 'Predicting continuous values (e.g., price).' : 'Predicting categories (e.g., spam/ham).'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};