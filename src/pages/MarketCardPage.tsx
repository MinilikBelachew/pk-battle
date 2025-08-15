import React, { useMemo, useRef, useState, useEffect } from 'react';
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
import Layout from '../components/layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_BETTING_MATCHES } from '../constants';

const MarketCardPage: React.FC = () => {
  const { marketId } = useParams<{ marketId: string }>();
  const navigate = useNavigate();
  const [selectedParticipant, setSelectedParticipant] = useState<'left' | 'right'>('left');
  const [amount, setAmount] = useState('40');
  const [activeTab, setActiveTab] = useState('comments');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const pulseTimeoutRef = useRef<number | null>(null);
  const [orders, setOrders] = useState<Array<{ title: string; id: string; isNew?: boolean }>>([]);
  const [title, setTitle] = useState<string | null>(null);
  const [volume, setVolume] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [leftImage, setLeftImage] = useState<string | null>(null);
  const [rightImage, setRightImage] = useState<string | null>(null);
  const [leftName, setLeftName] = useState<string | null>(null);
  const [rightName, setRightName] = useState<string | null>(null);
  const [leftOdds, setLeftOdds] = useState<number | null>(null);
  const [rightOdds, setRightOdds] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Utility function to set market data
  const setMarketData = (match: any) => {
    if (match) {
      setTitle(match.title);
      setVolume(match.volume);
      setDate(match.date);
      setStartTime(match.startTime);
      setEndTime(match.endTime);
      
      const participants = Array.isArray(match.participants) ? match.participants : [];
      if (participants[0]) {
        setLeftImage(participants[0].image || null);
        setLeftName(participants[0].name || null);
        setLeftOdds(participants[0].odds || null);
      }
      if (participants[1]) {
        setRightImage(participants[1].image || null);
        setRightName(participants[1].name || null);
        setRightOdds(participants[1].odds || null);
      }
    }
  };

  // Fetch market data based on marketId from URL params
  useEffect(() => {
    if (marketId) {
      const match = MOCK_BETTING_MATCHES.find(m => m.id === marketId);
      setMarketData(match);
      setLoading(false);
    } else {
      // Fallback: show first market if no marketId provided
      const defaultMatch = MOCK_BETTING_MATCHES[0];
      setMarketData(defaultMatch);
      setLoading(false);
    }
  }, [marketId]);

  // Chart data memoized at component level
  const chartData = useMemo(() => {
    const labels = ['Start', 'Q1', 'Q2', 'Q3', 'End'];
    // Simple demo: build trend based on odds (higher odds => lower implied chance)
    const leftBase = leftOdds ? Math.max(20, 200 / leftOdds) : 120;
    const rightBase = rightOdds ? Math.max(20, 200 / rightOdds) : 110;
    return {
      labels,
      datasets: [
        {
          label: leftName || 'Left',
          data: [leftBase, leftBase + 10, leftBase + 30, leftBase + 20, leftBase + 25],
          borderColor: '#60A5FA',
          backgroundColor: 'rgba(96,165,250,0.2)',
          fill: true,
          tension: 0.4,
        },
        {
          label: rightName || 'Right',
          data: [rightBase, rightBase - 10, rightBase + 15, rightBase + 5, rightBase + 18],
          borderColor: '#34D399',
          backgroundColor: 'rgba(52,211,153,0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    };
  }, [leftOdds, rightOdds, leftName, rightName]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleParticipantSelect = (side: 'left' | 'right') => {
    setSelectedParticipant(side);
  };

  const handleQuickAmount = (quickAmount: string) => {
    setAmount(quickAmount);
  };

  const handleTrade = () => {
    console.log('Trade placed:', { participant: selectedParticipant, amount });
    setOrderPlaced(true);
    // Trigger pulse effect for ~2 seconds then stop
    if (pulseTimeoutRef.current) {
      clearTimeout(pulseTimeoutRef.current);
    }
    setPulseActive(true);
    const newOrderId = Math.floor(10000000 + Math.random() * 90000000).toString();
    setOrders((prev) => [
      { title: `TikTok Live ${selectedParticipant === 'left' ? (leftName || 'Left') : (rightName || 'Right')}`, id: newOrderId, isNew: true },
      ...prev.map((o) => ({ ...o, isNew: false })),
    ]);
    pulseTimeoutRef.current = window.setTimeout(() => {
      setPulseActive(false);
    }, 2000);
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
    <Layout showHeaderNavigation={false}>
      <div className="min-h-screen">
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading market...</p>
            </div>
          </div>
        ) : marketId && !MOCK_BETTING_MATCHES.find(m => m.id === marketId) ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">Market Not Found</h1>
              <p className="text-gray-300 mb-6">The market you're looking for doesn't exist.</p>
              <button 
                onClick={() => window.history.back()}
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          {/* Navigation Breadcrumb */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <button 
                  onClick={() => window.history.back()}
                  className="hover:text-white transition-colors"
                >
                  ← Back
                </button>
                <span>/</span>
                <span className="text-white">Market</span>
                {marketId && <span className="text-yellow-400">#{marketId}</span>}
              </div>
              
              {/* Market Navigation */}
              {marketId && (
                <div className="flex items-center gap-2">
                  {/* Market Selector Dropdown */}
                  <select
                    value={marketId}
                    onChange={(e) => navigate(`/market-card/${e.target.value}`)}
                    className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 transition-colors border-none outline-none"
                  >
                    {MOCK_BETTING_MATCHES.map((market) => (
                      <option key={market.id} value={market.id}>
                        {market.title.length > 30 ? market.title.substring(0, 30) + '...' : market.title}
                      </option>
                    ))}
                  </select>
                  
                  {/* Market Position Indicator */}
                  <span className="text-gray-400 text-sm px-2">
                    {MOCK_BETTING_MATCHES.findIndex(m => m.id === marketId) + 1} of {MOCK_BETTING_MATCHES.length}
                  </span>
                  
                  {/* Simple Market Info */}
                  {marketId && (
                    <>
                      <span className="px-2 py-1 rounded text-xs font-semibold text-white bg-blue-500">
                        {title ? (title.length > 20 ? title.substring(0, 20) + '...' : title) : 'Market'}
                      </span>
                      {volume && (
                        <span className="px-2 py-1 rounded text-xs font-semibold text-white bg-green-500">
                          {volume}
                        </span>
                      )}
                      {date && (
                        <span className="px-2 py-1 rounded text-xs font-semibold text-white bg-indigo-500">
                          {date}
                        </span>
                      )}
                      {leftName && rightName && (
                        <span className="px-2 py-1 rounded text-xs font-semibold text-white bg-orange-500">
                          {leftName} vs {rightName}
                        </span>
                      )}
                      {leftOdds && rightOdds && (
                        <span className="px-2 py-1 rounded text-xs font-semibold text-white bg-pink-500">
                          {leftOdds.toFixed(1)} / {rightOdds.toFixed(1)}
                        </span>
                      )}
                    </>
                  )}
                  
                  {/* Share Button */}
                  <button
                    onClick={() => {
                      const url = `${window.location.origin}/market-card/${marketId}`;
                      navigator.clipboard.writeText(url).then(() => {
                        alert('Market URL copied to clipboard!');
                      });
                    }}
                    className="px-3 py-1 bg-yellow-400 text-black rounded text-sm hover:bg-yellow-500 transition-colors"
                    title="Share this market"
                  >
                    📋 Share
                  </button>
                  
                  <button
                    onClick={() => {
                      const currentIndex = MOCK_BETTING_MATCHES.findIndex(m => m.id === marketId);
                      if (currentIndex > 0) {
                        const prevMarket = MOCK_BETTING_MATCHES[currentIndex - 1];
                        navigate(`/market-card/${prevMarket.id}`);
                      }
                    }}
                    disabled={!marketId || MOCK_BETTING_MATCHES.findIndex(m => m.id === marketId) <= 0}
                    className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = MOCK_BETTING_MATCHES.findIndex(m => m.id === marketId);
                      if (currentIndex < MOCK_BETTING_MATCHES.length - 1) {
                        const nextMarket = MOCK_BETTING_MATCHES[currentIndex + 1];
                        navigate(`/market-card/${nextMarket.id}`);
                      }
                    }}
                    disabled={!marketId || MOCK_BETTING_MATCHES.findIndex(m => m.id === marketId) >= MOCK_BETTING_MATCHES.length - 1}
                    className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Main Content Area (Left - 2 columns) */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 border border-gray-300 rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
                {/* Event Title Section */}
                <div className="flex items-start justify-between mb-4 ">
                  <div className="flex items-start gap-3 ">
                    <img src="/tiktok-logo/TikTok-Logo.png" alt="TikTok" className="w-15 h-15 object-contain rounded-md   bg-white" />
                    <a className="text-base sm:text-lg font-bold text-dark-blue underline hover:text-blue-700 cursor-pointer">
                      {title || 'Tiktok Live Battle Shara vs Abel, Who will win?'}
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
                        <span className="font-medium text-dark-blue">Volume {volume || '121K ETB'}</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-dark-blue">{date || 'Nov 27, 2027'}</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-dark-blue">{startTime && endTime ? `${startTime} - ${endTime}` : '8pm - 10 pm'}</span>
                      </div>
                    </div>

                    {/* Participants to the right */}
                    <div className="flex items-center gap-3 mx-auto sm:mx-0">
                      <div className="text-center">
                        <img src={leftImage || "/imgs/img1.png"} alt={leftName || "Left"} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow" />
                        {leftName && <div className="text-xs mt-1 text-dark-blue font-semibold">{leftName}</div>}
                        {typeof leftOdds === 'number' && <div className="text-[11px] text-gray-600">Odds {leftOdds}</div>}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-red-500" />
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <div className="w-8 h-0.5 bg-red-500" />
                      </div>
                      <div className="text-center">
                        <img src={rightImage || "/imgs/img2.png"} alt={rightName || "Right"} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow" />
                        {rightName && <div className="text-xs mt-1 text-dark-blue font-semibold">{rightName}</div>}
                        {typeof rightOdds === 'number' && <div className="text-[11px] text-gray-600">Odds {rightOdds}</div>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real Performance Chart */}
                <div className="mb-2 sm:mb-4">
                  <div className="bg-white border border-gray-300 rounded-lg p-3">
                      <Line
                        data={chartData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: true, position: 'top' },
                            tooltip: { enabled: true },
                          },
                          scales: {
                            x: { grid: { display: false } },
                            y: { grid: { color: '#e5e7eb' }, ticks: { stepSize: 20 } },
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
                        onClick={() => handleParticipantSelect('left')}
                        className={`w-full py-2 font-semibold ${
                          selectedParticipant === 'left'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-white text-blue-700'
                        }`}
                      >
                        {leftName?.toUpperCase() || 'LEFT'}
                      </button>
                      <button
                        onClick={() => handleParticipantSelect('right')}
                        className={`w-full py-2 font-semibold ${
                          selectedParticipant === 'right'
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-blue-700'
                        }`}
                      >
                        {rightName?.toUpperCase() || 'RIGHT'}
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
                    <p className="text-lg font-bold text-dark-blue">ETB {(() => {
                      const amt = parseFloat(amount || '0');
                      // If participants odds provided in state, use simple odds from leftName/rightName match
                      const odds = selectedParticipant === 'left' ? (leftOdds ?? 1.0) : (rightOdds ?? 1.0);
                      return isNaN(amt) ? 0 : Math.round(amt * odds);
                    })()}</p>
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

              {orderPlaced && (
                <div className="mb-4 sm:mb-5 text-center">
                  <button className={`bg-green-600 text-white rounded-lg px-4 py-2 font-semibold shadow ${pulseActive ? 'animate-pulse ring-2 ring-green-400/40' : ''}`}>
                    Order Placed
                  </button>
                </div>
              )}

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
                      {orders.length === 0 ? (
                        <tr>
                          <td className="px-4 py-3 border border-gray-300 text-sm text-gray-500" colSpan={2}>No orders yet</td>
                        </tr>
                      ) : (
                        orders.map((o) => (
                          <tr key={o.id} className={o.isNew ? 'bg-green-50' : ''}>
                            <td className={`px-4 py-2 border border-gray-300 text-sm ${o.isNew ? 'text-green-800 font-semibold' : ''}`}>{o.title}</td>
                            <td className={`px-4 py-2 border border-gray-300 text-sm ${o.isNew ? 'text-green-800 font-semibold' : ''}`}>{o.id}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </Layout>
  );
};

export default MarketCardPage;