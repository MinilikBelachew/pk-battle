import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const OrderPlacedPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('comments');

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
              {/* Order Status Section */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-dark-blue mb-4">Order Status</h2>
                
                {/* Order Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-semibold">#12345</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-semibold">Placed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold">40 ETB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Participant:</span>
                    <span className="font-semibold">Abel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Payout:</span>
                    <span className="font-semibold text-green-600">150 ETB</span>
                  </div>
                </div>

                {/* Order History */}
                <div className="border-t pt-4">
                  <h3 className="text-lg font-bold text-dark-blue mb-4">Order History</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-semibold">Order Placed</p>
                        <p className="text-xs text-gray-500">Nov 27, 2024 - 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="text-sm text-gray-500">Processing</p>
                        <p className="text-xs text-gray-400">Pending</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="text-sm text-gray-500">Completed</p>
                        <p className="text-xs text-gray-400">Pending</p>
                      </div>
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

export default OrderPlacedPage; 