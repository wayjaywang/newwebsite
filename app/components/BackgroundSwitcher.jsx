'use client';

import { useState, useEffect } from 'react';

const BackgroundSwitcher = () => {
  const [theme, setTheme] = useState('theme-white');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'theme-white';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = '';
    if (theme !== 'theme-white') {
      document.body.classList.add(theme);
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const themes = [
    { name: 'white', value: 'theme-white' },
    { name: 'grey', value: 'theme-grey' },
    { name: 'black', value: 'theme-black' },
  ];

  return (
    <div className="text-sm">
      <p className="mb-2 font-bold">Background</p>
      <div className="flex items-center space-x-2">
        {themes.map((t, index) => (
          <div key={t.name} className="flex items-center space-x-2">
            <button
              onClick={() => handleThemeChange(t.value)}
              className={`capitalize hover:underline ${
                theme === t.value ? 'underline' : ''
              }`}
            >
              {t.name}
            </button>
            {index < themes.length - 1 && <span>/</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSwitcher; 