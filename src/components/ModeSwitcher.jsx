import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline'; // Import icons

const ModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setIsDarkMode(storedTheme === 'dark');

    // Apply theme on initial render
    const body = document.body;
    body.classList.toggle('dark', isDarkMode); // Toggle dark class based on stored theme
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');

    // Apply theme on mode change
    const body = document.body;
    body.classList.toggle('dark', isDarkMode); // Toggle dark class
  };

  return (
    <button
      className={`rounded-full p-2 text-white hover:bg-opacity-80 focus:outline-none ${
        isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
      }`}
      onClick={toggleMode}
    >
      {isDarkMode ? (
        <>
          <MoonIcon onClick={toggleMode} className="h-5 w-5 mr-1" />
        </>
      ) : (
        <>
          <SunIcon onClick={toggleMode} className="h-5 w-5 mr-1" />
        </>
      )}
    </button>
  );
};

export default ModeSwitcher;
