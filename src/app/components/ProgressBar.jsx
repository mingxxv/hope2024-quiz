import React from 'react';

export const ProgressBar = ({ current, total }) => {
  return (
    <div 
    className="mb-6"
    style={{
      position: 'absolute',
      top: '5%',
      left: 0,
      right: 0,
      zIndex: 9999,
      padding: '1.5rem'
    }}>
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
};