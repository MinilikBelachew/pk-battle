import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Wallet, UserRound, Settings } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/rootReducer';
import { logoutRequest } from '../../store/slice/auth';

interface HeaderProps {
  showNavigation?: boolean;
}
const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleNavigation = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <header className="bg-dark-blue text-white ">
      <div className="container mx-auto px-2 sm:px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavigation('')}
            className="bg-[#ffcb05] text-[#1e2a4a] px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-lg font-bold hover:bg-opacity-80 transition-colors text-sm sm:text-base cursor-pointer"
          >
            LOGO
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
          {isAuthenticated ? (
            <>
              {/* Notification Bell - Always visible */}
              <button 
                className="bg-transparent text-[#ffcb05] p-1 sm:p-2 rounded-lg hover:bg-opacity-80 transition-colors cursor-pointer"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
              </button>

              {/* Wallet - Responsive version */}
              <div className="flex items-stretch">
                <button 
                  onClick={() => handleNavigation('wallet')}
                  className="cursor-pointer hidden sm:block bg-[#ffcb05] text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-l-xl font-bold hover:bg-opacity-80 transition-colors text-xs sm:text-sm md:text-base"
                >
                  Wallet
                </button>
                <button 
                  onClick={() => handleNavigation('wallet')}
                  className="sm:hidden bg-transparent text-[#ffcb05] p-1 sm:p-2 rounded-lg hover:bg-opacity-80 transition-colors cursor-pointer"
                  aria-label="Wallet"
                >
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                </button>
                <button 
                  onClick={() => handleNavigation('wallet')}
                  className="cursor-pointer hidden sm:flex bg-[#ffcb05] text-black p-1 sm:p-2 rounded-r-xl font-bold hover:bg-opacity-80 transition-colors sm:border-l border-gray-400"
                  aria-label="Wallet"
                >
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                </button>
              </div>

              {/* Profile - Responsive version */}
              <div className="flex items-stretch">
                <button 
                  onClick={() => handleNavigation('profile')}
                  className="cursor-pointer hidden sm:block bg-[#ffcb05] text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-l-xl font-bold hover:bg-opacity-80 transition-colors text-xs sm:text-sm md:text-base"
                >
                  Profile
                </button>
                <button 
                  onClick={() => handleNavigation('profile')}
                  className="cursor-pointer sm:hidden bg-transparent text-[#ffcb05] p-1 sm:p-2 rounded-lg hover:bg-opacity-80 transition-colors"
                  aria-label="Profile"
                >
                  <UserRound className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                </button>
                <button 
                  onClick={() => handleNavigation('profile')}
                  className="cursor-pointer hidden sm:flex bg-[#ffcb05] text-black p-1 sm:p-2 rounded-r-xl font-bold hover:bg-opacity-80 transition-colors sm:border-l border-gray-400"
                  aria-label="Profile"
                >
                  <UserRound className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                </button>
              </div>
              
              {/* Settings - Always visible */}
              <button 
                onClick={() => handleNavigation('settings')}
                className="cursor-pointer bg-transparent text-[#ffcb05] p-1 sm:p-2 rounded-lg hover:bg-opacity-80 transition-colors"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Logout */}
              <button
                onClick={() => dispatch(logoutRequest())}
                className="cursor-pointer bg-sunrise text-black px-3 py-1 sm:px-4 sm:py-2 rounded-sm font-bold hover:bg-opacity-80 transition-colors text-xs sm:text-sm md:text-base"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login/Register buttons */}
              <button
                onClick={() => handleNavigation('login')}
                className="cursor-pointer bg-sunrise text-black w-24 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-sm font-bold hover:bg-opacity-80 transition-colors text-xs sm:text-sm md:text-base text-center"
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation('register')}
                className="cursor-pointer bg-sunrise text-black w-24 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-sm font-bold hover:bg-opacity-80 transition-colors text-xs sm:text-sm md:text-base text-center"
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


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Bell, Wallet, UserRound, Settings, LogOut } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import type { RootState } from '../../store/rootReducer';
// import { logoutRequest } from '../../store/slice/auth';

// interface HeaderProps {
//   showNavigation?: boolean;
// }

// const Header: React.FC<HeaderProps> = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

//   const handleNavigation = (page: string) => {
//     navigate(`/${page}`);
//   };

//   return (
//     <header className=" backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <button
//               onClick={() => handleNavigation('')}
//               className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
//             >
//               LOGO
//             </button>
//           </div>

//           {/* Navigation Actions */}
//           <div className="flex items-center space-x-3">
//             {isAuthenticated ? (
//               <>
//                 {/* Notifications */}
//                 <button 
//                   className="relative p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200 group"
//                   aria-label="Notifications"
//                 >
//                   <Bell className="w-5 h-5" />
//                   <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
//                 </button>

//                 {/* Wallet */}
//                 <button 
//                   onClick={() => handleNavigation('wallet')}
//                   className="hidden sm:flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-lg transition-all duration-200 border border-slate-700 hover:border-slate-600"
//                 >
//                   <Wallet className="w-4 h-4" />
//                   <span className="text-sm font-medium">Wallet</span>
//                 </button>
                
//                 {/* Mobile Wallet */}
//                 <button 
//                   onClick={() => handleNavigation('wallet')}
//                   className="sm:hidden p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
//                   aria-label="Wallet"
//                 >
//                   <Wallet className="w-5 h-5" />
//                 </button>

//                 {/* Profile */}
//                 <button 
//                   onClick={() => handleNavigation('profile')}
//                   className="hidden sm:flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-lg transition-all duration-200 border border-slate-700 hover:border-slate-600"
//                 >
//                   <UserRound className="w-4 h-4" />
//                   <span className="text-sm font-medium">Profile</span>
//                 </button>
                
//                 {/* Mobile Profile */}
//                 <button 
//                   onClick={() => handleNavigation('profile')}
//                   className="sm:hidden p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
//                   aria-label="Profile"
//                 >
//                   <UserRound className="w-5 h-5" />
//                 </button>
                
//                 {/* Settings */}
//                 <button 
//                   onClick={() => handleNavigation('settings')}
//                   className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
//                   aria-label="Settings"
//                 >
//                   <Settings className="w-5 h-5" />
//                 </button>

//                 {/* Logout */}
//                 <button
//                   onClick={() => dispatch(logoutRequest())}
//                   className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   <span className="hidden sm:inline text-sm">Logout</span>
//                 </button>
//               </>
//             ) : (
//               <div className="flex items-center space-x-3">
//                 {/* Login */}
//                 <button
//                   onClick={() => handleNavigation('login')}
//                   className="text-slate-300 hover:text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:bg-slate-800"
//                 >
//                   Login
//                 </button>
                
//                 {/* Register */}
//                 <button
//                   onClick={() => handleNavigation('register')}
//                   className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
//                 >
//                   Register
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;