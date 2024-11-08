// src/components/FileUpload.tsx
import React, { ChangeEvent } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Profile Pic</label>
      <input type="file" onChange={handleFileChange} className="mt-1" />
    </div>
  );
};

export default FileUpload;
