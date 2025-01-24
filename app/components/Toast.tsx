"use client";

import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const baseStyles = "fixed top-4 right-4 z-50 rounded-lg px-4 py-2 text-white transform transition-all duration-300 ease-in-out";

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500"
  };

  return (
    <div className={`${baseStyles} ${typeStyles[type]}`}>
      {message}
    </div>
  );
};
