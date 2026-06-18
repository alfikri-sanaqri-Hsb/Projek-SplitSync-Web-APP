import React from 'react';

export default function LoadingSpinner({ size = "md", color = "indigo" }) {
  const sizes = {
    sm: "h-6 w-6 border-t-2 border-b-2",
    md: "h-12 w-12 border-t-2 border-b-2",
    lg: "h-16 w-16 border-t-4 border-b-4"
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={`animate-spin rounded-full ${sizes[size]} border-${color}-500`}
      ></div>
    </div>
  );
}