import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationTabsProps {
  activeTab: string;
  className?: string;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ activeTab, className = '' }) => {
  const navigate = useNavigate();

  const tabs = [
    { id: 'tiktok-live', label: 'Tiktok Live Match', path: '/home' },
    { id: 'upcoming', label: 'Upcoming', path: '/upcoming' },
    { id: 'recently-settled', label: 'Recently Settled', path: '/recently-settled' },
    { id: 'markets', label: 'Markets', path: '/markets' },
  ];

  const handleTabChange = (tabId: string, path: string) => {
    if (tabId !== activeTab) {
      navigate(path);
    }
  };

  return (
    <div className={`bg-dark-blue py-6 ${className}`}>
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center space-x-0.5 border-r-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id, tab.path)}
              className={`px-6 py-5 rounded-none font-semibold transition-colors w-60 ${
                activeTab === tab.id
                  ? 'bg-yellow-400 text-black'
                  : 'bg-white text-blue-600 hover:text-blue-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;