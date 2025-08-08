import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Wallet, UserRound, Settings } from 'lucide-react'; // Using lucide-react for icons

// Component for the header
interface HeaderProps {
  isAuthenticated?: boolean;
  showNavigation?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false, showNavigation = true }) => {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <header className="bg-dark-blue text-white shadow-lg rounded-b-xl">
      <div className="container mx-auto px-4 py-6 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavigation('')}
            className="bg-[#ffcb05] text-[#1e2a4a] px-6 py-2 rounded-lg font-bold hover:bg-opacity-80 transition-colors"
          >
            LOGO
          </button>
        </div>

        {/* User Actions - Match the design precisely */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {isAuthenticated ? (
            <>
              {/* Notification Bell */}
              <button 
                className="bg-transparent text-[#ffcb05] px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
              >
                <Bell className=" w-6 h-6" fill="currentColor" />
              </button>

              {/* Wallet */}
              <div className="flex items-stretch">
                <button 
                  onClick={() => handleNavigation('wallett')}
                  className="bg-[#ffcb05] text-black px-6 py-2 rounded-l-xl font-bold hover:bg-opacity-80 transition-colors"
                >
                  Wallet
                </button>
                <button 
                  onClick={() => handleNavigation('wallett')}
                  className="bg-[#ffcb05] text-black px-4 py-2 rounded-r-xl font-bold hover:bg-opacity-80 transition-colors border-l border-gray-400"
                >
                  <Wallet className="text-black w-6 h-6" fill="currentColor" />
                </button>
              </div>

              {/* Profile */}
              <div className="flex items-stretch">
                <button 
                  onClick={() => handleNavigation('profilet')}
                  className="bg-[#ffcb05] text-black px-6 py-2 rounded-l-xl font-bold hover:bg-opacity-80 transition-colors"
                >
                  Profile
                </button>
                <button 
                  onClick={() => handleNavigation('profilet')}
                  className="bg-[#ffcb05] text-black px-4 py-2 rounded-r-xl font-bold hover:bg-opacity-80 transition-colors border-l border-gray-400"
                >
                  <UserRound className="w-6 h-6" fill="currentColor" />
                </button>
              </div>
              
              {/* Settings */}
              <button 
                onClick={() => handleNavigation('settingst')}
                className="bg-transparent text-[#ffcb05] px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
              >
                <Settings className="w-6 h-6" />
              </button>
            </>
          ) : (
            <>
              {/* Login/Register buttons for non-authenticated users */}
              <button
                onClick={() => handleNavigation('login')}
                className="bg-sunrise text-black px-4 py-2 rounded-lg font-bold hover:bg-opacity-80 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation('register')}
                className="bg-sunrise text-black px-4 py-2 rounded-lg font-bold hover:bg-opacity-80 transition-colors"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
