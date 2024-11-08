// src/components/OTPField.tsx
import React, { useState } from 'react';

const OTPField: React.FC = () => {
  const [otp, setOtp] = useState('');

  const handleResendOtp = () => {
    // Implement resend OTP functionality
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">OTP</label>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button onClick={handleResendOtp} className="mt-2 text-blue-500">Resend OTP</button>
    </div>
  );
};

export default OTPField;
