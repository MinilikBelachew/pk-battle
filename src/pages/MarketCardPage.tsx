import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const MarketCardPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedParticipant, setSelectedParticipant] = useState<'abel' | 'shara'>('abel');
  const [amount, setAmount] = useState('40');
  const [activeTab, setActiveTab] = useState('comments');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleParticipantSelect = (participant: 'abel' | 'shara') => {
    setSelectedParticipant(participant);
  };

  const handleQuickAmount = (quickAmount: string) => {
    setAmount(quickAmount);
  };

  const handleTrade = () => {
    console.log('Trade placed:', { participant: selectedParticipant, amount });
    navigate('/order-placed');
  };

  const comments = [
    { id: 1, text: "I think shara is going to win this one", user: "User1" },
    { id: 2, text: "I love this game it is going to be tight call", user: "User2" },
    { id: 3, text: "lets gooo abel", user: "User3" }
  ];

  return (
    <Layout isAuthenticated={true} showHeaderNavigation={false}>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area (Left - 2 columns) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 mb-6">
                {/* Event Title Section */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border">
                      <span className="text-black text-lg">🎵</span>
                    </div>
                    <h1 className="text-xl font-bold text-dark-blue">Tiktok Live Battle Shara vs Abel, Who will win?</h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-500 hover:text-dark-blue">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-dark-blue">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Event Details Bar */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>Volume 121K ETB</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Nov 27, 2027</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>8pm - 10 pm</span>
                  </div>
                </div>

                {/* Participants Section */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <span className="text-sm font-medium text-dark-blue">Shara</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-0.5 bg-red-500"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-8 h-0.5 bg-red-500"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <span className="text-sm font-medium text-dark-blue">Abel</span>
                    </div>
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="mb-6">
                  <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-lg font-semibold mb-2">Performance Chart</div>
                      <div className="text-sm">Line graph showing performance over months</div>
                      <div className="flex justify-center space-x-4 mt-2 text-xs">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                      </div>
                      <div className="flex justify-center space-x-4 mt-1 text-xs">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-0.5 bg-blue-500"></div>
                          <span>Sarha</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-0.5 bg-green-400"></div>
                          <span>Abel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-lg p-6">
                {/* Tabs */}
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => setActiveTab('comments')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      activeTab === 'comments'
                        ? 'bg-sunrise text-white'
                        : 'text-gray-500 hover:text-dark-blue'
                    }`}
                  >
                    Comments
                  </button>
                  <button
                    onClick={() => setActiveTab('activity')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      activeTab === 'activity'
                        ? 'bg-sunrise text-white'
                        : 'text-gray-500 hover:text-dark-blue'
                    }`}
                  >
                    Activity
                  </button>
                  <button
                    onClick={() => setActiveTab('related')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      activeTab === 'related'
                        ? 'bg-sunrise text-white'
                        : 'text-gray-500 hover:text-dark-blue'
                    }`}
                  >
                    Related
                  </button>
                </div>

                {/* Comment Input */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
                  />
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-dark-blue">{comment.text}</p>
                      </div>
                      <button className="text-gray-400 hover:text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Place Bet Section */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-4">Place Bet</h2>
                
                {/* Participant Selection */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => handleParticipantSelect('abel')}
                    className={`py-3 px-4 rounded-lg font-semibold transition-colors ${
                      selectedParticipant === 'abel'
                        ? 'bg-sunrise text-black'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    ABEL
                  </button>
                  <button
                    onClick={() => handleParticipantSelect('shara')}
                    className={`py-3 px-4 rounded-lg font-semibold transition-colors ${
                      selectedParticipant === 'shara'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    SHARHA
                  </button>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-dark-blue mb-2">Amount</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={amount}
                      onChange={handleAmountChange}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                    <span className="text-sm font-medium text-dark-blue">ETB</span>
                  </div>
                </div>

                {/* Quick Amount Buttons */}
                <div className="flex space-x-2 mb-4">
                  <button
                    onClick={() => handleQuickAmount('20')}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      amount === '20' ? 'bg-blue-500 text-white underline' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    20 ETB
                  </button>
                  <button
                    onClick={() => handleQuickAmount('40')}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      amount === '40' ? 'bg-blue-500 text-white underline' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    40 ETB
                  </button>
                  <button
                    onClick={() => handleQuickAmount('60')}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      amount === '60' ? 'bg-blue-500 text-white underline' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    60 ETB
                  </button>
                </div>

                {/* Expected Payout */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600">EXPECTED PAYOUT</p>
                  <p className="text-lg font-bold text-dark-blue">ETB 150</p>
                </div>

                {/* Trade Button */}
                <button
                  onClick={handleTrade}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  TRADE
                </button>
              </div>

              {/* Order History Section */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-blue mb-4">Order History</h3>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  {/* Table Header */}
                  <div className="bg-gray-50 border-b border-gray-300">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold text-dark-blue text-sm">Order</div>
                      <div className="px-4 py-2 font-semibold text-dark-blue text-sm">ID</div>
                    </div>
                  </div>
                  
                  {/* Table Body */}
                  <div className="divide-y divide-gray-300">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 text-sm">Tiktok Live Abe</div>
                      <div className="px-4 py-2 text-sm">02156479</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MarketCardPage; 