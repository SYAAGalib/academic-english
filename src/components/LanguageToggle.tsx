
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageToggle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isBangla = location.pathname.startsWith('/bn');

  const toggleLanguage = () => {
    const currentPath = location.pathname;
    let newPath;

    if (isBangla) {
      newPath = currentPath.replace('/bn', '') || '/';
    } else {
      newPath = '/bn' + currentPath;
    }

    navigate(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
    >
      <span className={`text-sm font-medium ${!isBangla ? 'text-teal-600' : 'text-gray-500'}`}>
        EN
      </span>
      <div className="relative w-8 h-4 bg-gray-300 rounded-full">
        <div
          className={`absolute top-0.5 w-3 h-3 bg-teal-600 rounded-full transition-transform duration-200 ${
            isBangla ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </div>
      <span className={`text-sm font-medium ${isBangla ? 'text-teal-600' : 'text-gray-500'}`}>
        বাং
      </span>
    </button>
  );
};

export default LanguageToggle;
