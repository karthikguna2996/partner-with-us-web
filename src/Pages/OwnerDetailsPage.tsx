// src/pages/OwnerDetailsPage.tsx
import React from 'react';
import InputField from '../components/InputField';
import FileUpload from '../components/FileUpload';
import OTPField from '../components/OTPField';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setField, setProfilePic } from '../features/formSlice';

const OwnerDetailsPage: React.FC = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  const handleInputChange = (field: string, value: string) => {
    dispatch(setField({ field, value }));
  };

  const handleFileUpload = (file: File) => {
    dispatch(setProfilePic(file));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Owner & Manager Details</h1>
      <InputField
        label="Full Name"
        value={form.fullName}
        onChange={(e) => handleInputChange('fullName', e.target.value)}
        placeholder="Eg. John Doe"
      />
      <InputField
        label="State"
        value={form.state}
        onChange={(e) => handleInputChange('state', e.target.value)}
        placeholder="Eg. California"
      />
      <FileUpload onFileSelect={handleFileUpload} />
      <OTPField />
      {/* Add other input fields as required */}
    </div>
  );
};

export default OwnerDetailsPage;
