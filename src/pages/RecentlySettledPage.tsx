import React from 'react';
import Layout from '../components/layout/Layout';
import BettingCard from '../components/betting/BettingCard';
import NavigationTabs from '../components/ui/NavigationTabs';

const RecentlySettledPage: React.FC = () => {
  const activeTab = 'recently-settled';

  // Mock data for settled betting cards
  const mockSettledCards = [
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
      isSettled: true,
      winner: 'sarha',
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
      isSettled: true,
      winner: 'john',
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
      isSettled: true,
      winner: 'sarah',
    },
  ];

  const handleBet = (participantId: string) => {
    console.log('Bet placed on:', participantId);
    // TODO: Implement betting logic
  };

    return (
    <Layout isAuthenticated={true} showHeaderNavigation={false}>
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} />

      {/* Settled Betting Cards */}
      <div className="bg-dark-blue py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSettledCards.map((card) => (
              <BettingCard
                key={card.id}
                {...card}
                onBet={handleBet}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecentlySettledPage; 