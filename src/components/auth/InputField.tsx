import React from 'react';

interface InputFieldProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
  placeholder: string;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  icon,
  placeholder,
  required
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};