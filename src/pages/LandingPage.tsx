import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BettingCard from '../components/betting/BettingCard';
import TikTokBanner from '../components/ui/TikTokBanner';

const LandingPage: React.FC = () => {
  // const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data for betting cards
  const mockBettingCards = [
    {
      id: '1',
      title: 'Tiktok Live Bet, Sarha vs Abel, Who will win?',
      participants: [
        { id: 'sarha', name: 'Sarha', image: '', odds: 1.5 },
        { id: 'abel', name: 'Abel', image: '', odds: 2.1 },
      ] as [any, any],
      volume: '128k ETB',
      date: 'Nov 7, 26',
      chance: 60,
    },
    {
      id: '2',
      title: 'Tiktok Live Bet, Maria vs John, Who will win?',
      participants: [
        { id: 'maria', name: 'Maria', image: '', odds: 1.8 },
        { id: 'john', name: 'John', image: '', odds: 1.9 },
      ] as [any, any],
      volume: '95k ETB',
      date: 'Nov 8, 26',
      chance: 45,
    },
    {
      id: '3',
      title: 'Tiktok Live Bet, Alex vs Sarah, Who will win?',
      participants: [
        { id: 'alex', name: 'Alex', image: '', odds: 2.2 },
        { id: 'sarah', name: 'Sarah', image: '', odds: 1.6 },
      ] as [any, any],
      volume: '156k ETB',
      date: 'Nov 9, 26',
      chance: 70,
    },
    {
      id: '4',
      title: 'Tiktok Live Bet, Emma vs David, Who will win?',
      participants: [
        { id: 'emma', name: 'Emma', image: '', odds: 1.7 },
        { id: 'david', name: 'David', image: '', odds: 2.0 },
      ] as [any, any],
      volume: '89k ETB',
      date: 'Nov 10, 26',
      chance: 55,
    },
    {
      id: '5',
      title: 'Tiktok Live Bet, Lisa vs Mike, Who will win?',
      participants: [
        { id: 'lisa', name: 'Lisa', image: '', odds: 1.9 },
        { id: 'mike', name: 'Mike', image: '', odds: 1.8 },
      ] as [any, any],
      volume: '112k ETB',
      date: 'Nov 11, 26',
      chance: 48,
    },
    {
      id: '6',
      title: 'Tiktok Live Bet, Anna vs Tom, Who will win?',
      participants: [
        { id: 'anna', name: 'Anna', image: '', odds: 2.1 },
        { id: 'tom', name: 'Tom', image: '', odds: 1.7 },
      ] as [any, any],
      volume: '134k ETB',
      date: 'Nov 12, 26',
      chance: 65,
    },
  ];

  const handleBet = (participantId: string) => {
    console.log('Bet placed on:', participantId);
    // TODO: Implement betting logic
  };

  return (
    <Layout>
      {/* Hero/Banner Section */}
      <div className="relative bg-porcelain h-64 mb-8">
        {/* TikTok Banner */}
        <div className="absolute inset-0">
          <TikTokBanner className="h-full" />
        </div>
        
        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="container mx-auto px-4 pb-8">
        <div className="flex justify-center mb-6">
          <h2 className="relative inline-flex items-center text-sunrise font-serif font-bold text-2xl tracking-wider">
            TRENDIN
            <svg
              className="w-6 h-6 text-sunrise ml-1 -mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBettingCards.map((card) => (
            <BettingCard
              key={card.id}
              {...card}
              onBet={handleBet}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage; 