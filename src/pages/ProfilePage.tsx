import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('positions');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleDeposit = () => {
    console.log('Deposit clicked');
    navigate('/deposit');
  };

  const handleWithdraw = () => {
    console.log('Withdraw clicked');
    navigate('/withdraw');
  };

  return (
    <Layout isAuthenticated={true} showHeaderNavigation={false}>
      <div className="bg-gray-100 min-h-screen">
        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg border border-dark-blue p-6">
            {/* Profile Section */}
            <div className="flex items-start justify-between mb-8">
              {/* Left Side - Profile Info */}
              <div className="flex items-center space-x-4">
                {/* Profile Picture */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">S</span>
                </div>
                
                {/* User Info */}
                <div>
                  <h1 className="text-2xl font-bold text-dark-blue underline">Sofi Solo</h1>
                  <p className="text-gray-500">Joined NOV 2025</p>
                </div>
              </div>

              {/* Right Side - Balance and Actions */}
              <div className="text-right">
                {/* Balance */}
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4">
                  <p className="text-lg font-semibold text-dark-blue">Balance 1,200 ETB</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={handleDeposit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Deposit
                  </button>
                  <button
                    onClick={handleWithdraw}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Profit/Loss Card */}
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Profit/loss</p>
                    <p className="text-lg font-bold text-dark-blue">ETB 21,300</p>
                  </div>
                </div>
              </div>

              {/* Volume Traded Card */}
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Volume Traded</p>
                    <p className="text-lg font-bold text-dark-blue">ETB 38,300</p>
                  </div>
                </div>
              </div>

              {/* Markets Traded Card */}
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Markets Traded</p>
                    <p className="text-lg font-bold text-dark-blue">0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => handleTabChange('positions')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    activeTab === 'positions'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 hover:text-dark-blue'
                  }`}
                >
                  Positions
                </button>
                <button
                  onClick={() => handleTabChange('activity')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    activeTab === 'activity'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 hover:text-dark-blue'
                  }`}
                >
                  Activity
                </button>
              </div>

              {/* Content Display Area */}
              <div className="mt-6 bg-white border border-gray-300 rounded-lg p-8 min-h-[200px]">
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
      </div>
    </Layout>
  );
};

export default ProfilePage; 