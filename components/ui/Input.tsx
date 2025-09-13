import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export const Input: React.FC<InputProps> = ({ label, name, className = '', ...props }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-xs font-medium text-gray-400 uppercase mb-1">{label}</label>
            <input
                id={name}
                name={name}
                {...props}
                className={`w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-1.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition disabled:opacity-50 ${className}`}
            />
        </div>
    );
};