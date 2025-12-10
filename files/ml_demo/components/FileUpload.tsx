import React, { useRef } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  onFileLoaded: (content: string, fileName: string) => void;
  onError: (msg: string) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileLoaded, onError }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const processFile = (file: File | undefined) => {
    if (!file) return;

    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      onError("Please upload a valid .csv file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      onFileLoaded(content, file.name);
    };
    reader.onerror = () => {
      onError("Error reading file.");
    };
    reader.readAsText(file);
  };

  return (
    <div 
      className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white"
      onClick={() => fileInputRef.current?.click()}
    >
      <input 
        type="file" 
        accept=".csv" 
        className="hidden" 
        ref={fileInputRef}
        onChange={handleFileChange} 
      />
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <Upload className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Upload CSV Data</h3>
          <p className="text-slate-500 text-sm mt-1">Click to browse or drag file here</p>
        </div>
      </div>
    </div>
  );
};