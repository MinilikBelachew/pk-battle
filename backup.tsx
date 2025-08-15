import React, { useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);
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

  const activityFeed = [
    { id: 1, action: 'User7 placed 40 ETB on Abel', time: '2m' },
    { id: 2, action: 'User12 placed 60 ETB on Shara', time: '5m' },
    { id: 3, action: 'Market volume increased by 5K ETB', time: '12m' },
  ];

  const relatedMarkets = [
    { id: 1, title: 'TikTok Live: Ben vs Noah', volume: '32K ETB' },
    { id: 2, title: 'TikTok Live: Hana vs Ruth', volume: '21K ETB' },
    { id: 3, title: 'TikTok Live: Kiya vs Eden', volume: '18K ETB' },
  ];

  return (
    <Layout isAuthenticated={true} showHeaderNavigation={false}>
      <div className="min-h-screen">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Main Content Area (Left - 2 columns) */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 border border-gray-300 rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
                {/* Event Title Section */}
                <div className="flex items-start justify-between mb-4 ">
                  <div className="flex items-start gap-3 ">
                    <img src="/tiktok-logo/TikTok-Logo.png" alt="TikTok" className="w-15 h-15 object-contain rounded-md   bg-white" />
                    <a className="text-base sm:text-lg font-bold text-dark-blue underline hover:text-blue-700 cursor-pointer">
                      Tiktok Live Battle Shara vs Abel, Who will win?
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <button className="hover:text-dark-blue" aria-label="Info">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <button className="hover:text-dark-blue" aria-label="Bookmark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Event details + Participants row (border only around details) */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    {/* Event details group (bordered) */}
                    <div className="flex flex-wrap items-center gap-6 sm:gap-12 text-xs sm:text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
                      <div className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span className="font-medium text-dark-blue">Volume 121K ETB</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-dark-blue">Nov 27, 2027</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-dark-blue">8pm - 10 pm</span>
                      </div>
                    </div>

                    {/* Participants to the right */}
                    <div className="flex items-center gap-3 mx-auto sm:mx-0">
                      <div className="text-center">
                        <img src="/imgs/img1.png" alt="Shara" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-red-500" />
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <div className="w-8 h-0.5 bg-red-500" />
                      </div>
                      <div className="text-center">
                        <img src="/imgs/img2.png" alt="Abel" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real Performance Chart */}
                <div className="mb-2 sm:mb-4">
                  <div className="bg-white border border-gray-300 rounded-lg p-3">
                    <Line
                      data={useMemo(() => ({
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                        datasets: [
                          {
                            label: 'Shara',
                            data: [100, 120, 220, 140, 130],
                            borderColor: '#60A5FA',
                            backgroundColor: 'rgba(96,165,250,0.2)',
                            fill: true,
                            tension: 0.4,
                          },
                          {
                            label: 'Abel',
                            data: [90, 80, 200, 110, 150],
                            borderColor: '#34D399',
                            backgroundColor: 'rgba(52,211,153,0.2)',
                            fill: true,
                            tension: 0.4,
                          },
                        ],
                      }), [])}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: true, position: 'top' },
                          tooltip: { enabled: true },
                        },
                        scales: {
                          x: { grid: { display: false } },
                          y: { grid: { color: '#e5e7eb' }, ticks: { stepSize: 50 } },
                        },
                      }}
                      height={220}
                    />
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              {/* Link-style tabs header separated from comments card */}
              <div className="mb-0.5 ">
                <div className="inline-grid grid-cols-3 gap-0.5">
                  {(['comments','activity','related'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-38 sm:w-48 py-3 text-sm font-semibold rounded-sm border transition-colors ${
                        activeTab === tab
                          ? 'bg-yellow-400 text-white border-yellow-500'
                          : 'bg-white text-blue-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab bodies */}
              {activeTab === 'comments' && (
                <div className="bg-gray-200 border border-gray-300 rounded-xl shadow-sm p-5 sm:p-6 mb-3 sm:mb-4">
                  {/* Comment Input */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full" />
                    <input
                      type="text"
                      placeholder="Add a comment"
                      className="flex-1 bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full" />
                        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-dark-blue">
                          {comment.text}
                        </div>
                        <button className="text-gray-500 hover:text-blue-600" aria-label="Like">
                          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10a2 2 0 002 2h3v5l6-8h3a2 2 0 001.732-2.999l-3-5A2 2 0 0012.268 1H8a2 2 0 00-2 2v3H4a2 2 0 00-2 2z" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'activity' && (
                <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 sm:p-6 mb-3 sm:mb-4">
                  <div className="space-y-4">
                    {activityFeed.map((item) => (
                      <div key={item.id} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2 text-sm text-dark-blue">
                          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                          <span>{item.action}</span>
                        </div>
                        <span className="text-xs text-gray-500">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'related' && (
                <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 sm:p-6">
                  <div className="space-y-4">
                    {relatedMarkets.map((mkt) => (
                      <div key={mkt.id} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                        <div>
                          <p className="text-sm font-semibold text-dark-blue">{mkt.title}</p>
                          <p className="text-xs text-gray-500">Volume {mkt.volume}</p>
                        </div>
                        <button className="px-3 py-1 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700">View</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Place Bet Section */}
              <div className="bg-gray-200 border border-gray-300 rounded-xl shadow-md p-5 sm:p-6 mb-4 sm:mb-5">
                <h2 className="text-lg sm:text-xl font-bold text-dark-blue mb-2 text-center">Place Bet</h2>
                <div className="border-t border-gray-300 mb-4" />
                <div className="space-y-5 sm:space-y-6">
                  {/* Participant Selection */}
                  <div className="bg-white border-2 border-blue-600 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-2">
                      <button
                        onClick={() => handleParticipantSelect('abel')}
                        className={`w-full py-2 font-semibold ${
                          selectedParticipant === 'abel'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-white text-blue-700'
                        }`}
                      >
                        ABEL
                      </button>
                      <button
                        onClick={() => handleParticipantSelect('shara')}
                        className={`w-full py-2 font-semibold ${
                          selectedParticipant === 'shara'
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-blue-700'
                        }`}
                      >
                        SHARHA
                      </button>
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <label className="text-sm font-semibold text-dark-blue whitespace-nowrap shrink-0">Amount</label>
                      <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        className="bg-white min-w-0 flex-1 px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter amount"
                      />
                      <div className="px-2 sm:px-3 py-1 border border-gray-300 rounded-lg text-xs sm:text-sm font-semibold text-gray-700 bg-white whitespace-nowrap shrink-0">ETB</div>
                    </div>
                  </div>
                  <div className="border-t border-gray-300" />

                  {/* Quick Amount Buttons */}
                  <div className="bg-white border border-gray-300 rounded-lg p-3">
                    <div className="grid grid-cols-3 gap-2">
                      {(['20','40','60'] as const).map((q) => (
                        <button
                          key={q}
                          onClick={() => handleQuickAmount(q)}
                          className={`w-full py-2 rounded-md text-sm font-semibold ${
                            amount === q
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          {q} ETB
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-300" />

                  {/* Expected Payout */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 font-semibold">EXPECTED PAYOUT</p>
                    <p className="text-lg font-bold text-dark-blue">ETB 150</p>
                  </div>
                  <div className="border-t border-gray-300" />

                  {/* Trade Button */}
                  <button
                    onClick={handleTrade}
                    className="block mx-auto w-3/4 sm:w-1/2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    TRADE
                  </button>
                </div>
              </div>

              {/* Order History Section */}
              <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-4 sm:p-6">
                <h3 className="text-lg font-bold text-dark-blue mb-4">Order History</h3>
                <div className="border border-gray-300 rounded-lg overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left font-semibold text-dark-blue border border-gray-300 text-sm">Order</th>
                        <th className="px-4 py-2 text-left font-semibold text-dark-blue border border-gray-300 text-sm">ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border border-gray-300 text-sm">Tiktok Live Abe</td>
                        <td className="px-4 py-2 border border-gray-300 text-sm">02156479</td>
                      </tr>
                    </tbody>
                  </table>
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