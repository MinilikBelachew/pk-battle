import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BettingCard from '../components/betting/BettingCard';
import TikTokBanner from '../components/ui/TikTokBanner';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
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
    <Layout isAuthenticated={false}>
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
        <h2 className="text-2xl font-bold text-white mb-6">Trending</h2>
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