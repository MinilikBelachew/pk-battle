import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { ArrowUpRight, BarChart, CheckCircle } from 'lucide-react';
import StatCard from '../components/betting/ProfileCard'; // Importing the separate StatCard component
import { useSelector } from 'react-redux';
import type { RootState } from '../store/rootReducer';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const authUser = useSelector((state: RootState) => state.auth.user as any | null);
  const [activeTab, setActiveTab] = useState('positions');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleDeposit = () => {
    console.log('Deposit clicked');
    // Replace with your actual navigation logic
     navigate('/deposit');
  };

  const handleWithdraw = () => {
    console.log('Withdraw clicked');
    // Replace with your actual navigation logic
     navigate('/withdraw');
  };

  return (
    <Layout showHeaderNavigation={false}>
      <div className="bg-gray-100 mx-[0.3cm] mb-[0.3cm] ">
        <div className="bg-gray-200 p-8 ">
          {/* Profile Section */}
          <div className=" flex flex-col md:flex-row items-center md:items-start justify-between pb-8 border-b border-gray-400 mb-8 ">
            {/* Left Side - Profile Info */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              {/* Profile Picture - Increased size */}
              <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0">
                {/* Using a placeholder image URL for a complete, runnable example */}
                <img
                  src="imgs/img1.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null; // prevents infinite loop
                    e.currentTarget.src = "https://placehold.co/144x144/E2E8F0/000000?text=Profile";
                  }}
                />
              </div>

              {/* User Info - Increased name font size */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-[#1e2a4a] underline">
                  {authUser?.email || authUser?.phone || 'User'}
                </h1>
                <p className="text-gray-500">
                  {authUser?.createdAt ? `Joined ${new Date(authUser.createdAt).toLocaleDateString()}` : 'Joined date unavailable'}
                </p>
               
              </div>
            </div>

            {/* Right Side - Balance and Actions */}
            <div className="text-center md:text-right w-full md:w-auto pr-6 md:pr-16 md:mr-10">
              {/* Balance - Increased padding and font size */}
              
              <div className="inline-flex items-center gap-3 border-4 border-gray-300 rounded-full px-6 py-1 bg-white p-4 mb-4 ">
              <span className="text-lg sm:text-xl font-semibold   px-2 py-0.5 bg-white">Balance</span>
              <span className="text-lg sm:text-xl font-semibold text-dark">{authUser?.balance ?? 0} ETB</span>
            
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 justify-center md:justify-end">
                <button
                  onClick={handleDeposit}
                  className="cursor-pointer  bg-blue-500 text-white inline-flex items-center justify-center w-36 h-11 rounded font-semibold hover:bg-blue-600 transition-colors"
                >
                  Deposit
                </button>
                <button
                  onClick={handleWithdraw}
                  className="cursor-pointer bg-red-500 text-white inline-flex items-center justify-center w-36 h-11 rounded font-semibold hover:bg-red-600 transition-colors"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>

          {/* Statistics Cards - Now using the reusable StatCard component */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 w-full md:w-3/4">
            <StatCard
              icon={ArrowUpRight}
              iconBgColor="bg-green-100"
              iconColor="text-green-600"
              title="Profit/loss"
              value="ETB 21,300"
            />
            <StatCard
              icon={BarChart}
              iconBgColor="bg-blue-100"
              iconColor="text-blue-600"
              title="Volume Traded"
              value="ETB 38,300"
            />
            <StatCard
              icon={CheckCircle}
              iconBgColor="bg-yellow-100"
              iconColor="text-yellow-600"
              title="Markets Traded"
              value="0"
            />
          </div>

          {/* Navigation Tabs */}
          <div className="mt-8 pt-6">
            <div className="flex space-x-4 pb-4 border-b border-gray-400">
              <button
                onClick={() => handleTabChange('positions')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === 'positions'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-500 hover:text-[#1e2a4a]'
                }`}
              >
                Positions
              </button>
              <button
                onClick={() => handleTabChange('activity')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === 'activity'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-500 hover:text-[#1e2a4a]'
                }`}
              >
                Activity
              </button>
            </div>

            {/* Content Display Area */}
            <div className="mt-4 bg-white border border-gray-300 rounded-lg p-8 min-h-[200px]">
              {activeTab === 'positions' ? (
                <div className="text-center text-gray-500">
                  <p>No positions to display</p>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <p>No activity to display</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Layout from '../components/layout/Layout';
// import { ArrowUpRight, BarChart, CheckCircle } from 'lucide-react';
// const ProfilePage: React.FC = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('positions');

//   const handleTabChange = (tabId: string) => {
//     setActiveTab(tabId);
//   };

//   const handleDeposit = () => {
//     console.log('Deposit clicked');
//     navigate('/deposit');
//   };

//   const handleWithdraw = () => {
//     console.log('Withdraw clicked');
//     navigate('/withdraw');
//   };

//   return (
//     <Layout isAuthenticated={true} showHeaderNavigation={false}>
//       <div className="bg-gray-100">
//       <div className="bg-white p-8">
//         {/* Profile Section */}
//         <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-8 border-b border-gray-200 mb-8">
//           {/* Left Side - Profile Info */}
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
//             {/* Profile Picture - Increased size */}
//             <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0">
//               <img src="imgs/img1.png" alt="Profile" className="w-full h-full object-cover" />
//             </div>
            
//             {/* User Info - Increased name font size */}
//             <div className="text-center md:text-left">
//               <h1 className="text-3xl font-bold text-[#1e2a4a] underline">Sofi Solo</h1>
//               <p className="text-gray-500">Joined NOV 2025</p>
//             </div>
//           </div>

//           {/* Right Side - Balance and Actions */}
//           <div className="text-center md:text-right w-full md:w-auto md:pr-8">
//             {/* Balance - Increased padding and font size */}
//             <div className="bg-gray-100 border border-gray-300 rounded-3xl p-4 mb-4 inline-block">
//               <div className="flex items-baseline space-x-2">
//                 <p className="text-xl font-semibold text-[#1e2a4a]">Balance:</p>
//                 <p className="text-xl font-semibold text-[#1e2a4a]">1,200 ETB</p>
//               </div>
//             </div>
            
//             {/* Action Buttons */}
//             <div className="flex space-x-4 justify-center md:justify-end">
//               <button
//                 onClick={handleDeposit}
//                 className="bg-blue-500 text-white px-8 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors w-1/2"
//               >
//                 Deposit
//               </button>
//               <button
//                 onClick={handleWithdraw}
//                 className="bg-red-500 text-white px-8 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors w-1/2"
//               >
//                 Withdraw
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Statistics Cards */}
//         <div className="flex flex-col md:flex-row gap-8 mb-8 w-full md:w-3/4">
//           {/* Profit/Loss Card */}
//           <div className="bg-gray-100 border border-gray-300 rounded-3xl p-4 flex-1">
//             <div className="flex flex-col items-center space-y-3">
//               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                 <ArrowUpRight className="w-8 h-8 text-green-600" />
//               </div>
//               <div className="text-center">
//                 <p className="text-xl  text-gray-600">Profit/loss</p>
//                 <p className="text-2xl font-bold text-[#1e2a4a]">ETB 21,300</p>
//               </div>
//             </div>
//           </div>

//           {/* Volume Traded Card */}
//           <div className="bg-gray-100 border border-gray-300 rounded-3xl p-4 flex-1">
//             <div className="flex flex-col items-center space-y-3">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                 <BarChart className="w-8 h-8 text-blue-600" />
//               </div>
//               <div className="text-center">
//                 <p className="text-base text-gray-600">Volume Traded</p>
//                 <p className="text-2xl font-bold text-[#1e2a4a]">ETB 38,300</p>
//               </div>
//             </div>
//           </div>

//           {/* Markets Traded Card */}
//           <div className="bg-gray-100 border border-gray-300 rounded-3xl p-4 flex-1">
//             <div className="flex flex-col items-center space-y-3">
//               <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
//                 <CheckCircle className="w-8 h-8 text-yellow-600" />
//               </div>
//               <div className="text-center">
//                 <p className="text-base text-gray-600">Markets Traded</p>
//                 <p className="text-2xl font-bold text-[#1e2a4a]">0</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="mt-8 pt-6">
//           <div className="flex space-x-4 pb-4 border-b border-gray-200">
//             <button
//               onClick={() => handleTabChange('positions')}
//               className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
//                 activeTab === 'positions'
//                   ? 'bg-blue-500 text-white'
//                   : 'text-gray-500 hover:text-[#1e2a4a]'
//               }`}
//             >
//               Positions
//             </button>
//             <button
//               onClick={() => handleTabChange('activity')}
//               className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
//                 activeTab === 'activity'
//                   ? 'bg-blue-500 text-white'
//                   : 'text-gray-500 hover:text-[#1e2a4a]'
//               }`}
//             >
//               Activity
//             </button>
//           </div>

//           {/* Content Display Area */}
//           <div className="mt-4 bg-white border border-gray-300 rounded-lg p-8 min-h-[200px]">
//             {activeTab === 'positions' ? (
//               <div className="text-center text-gray-500">
//                 <p>No positions to display</p>
//               </div>
//             ) : (
//               <div className="text-center text-gray-500">
//                 <p>No activity to display</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//     </Layout>
//   );
// };

// export default ProfilePage; 