import React from 'react';
import { FormTextAreaProps } from '../types';

const FormTextArea: React.FC<FormTextAreaProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  rows = 4,
  required = true
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full bg-black/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        required={required}
      />
    </div>
  );
};

export default FormTextArea;