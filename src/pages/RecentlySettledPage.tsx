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
    {
      id: '4',
      title: 'Tiktok Live Bet, Sam vs Emma, Who will win?',
      participants: [
        { id: 'sam', name: 'Sam', image: '', odds: 1.7 },
        { id: 'emma', name: 'Emma', image: '', odds: 2.0 },
      ] as [any, any],
      volume: '88k ETB',
      date: 'Nov 10, 26',
      chance: 55,
      isSettled: true,
      winner: 'sam',
    },
    {
      id: '5',
      title: 'Tiktok Live Bet, Ben vs Chloe, Who will win?',
      participants: [
        { id: 'ben', name: 'Ben', image: '', odds: 2.5 },
        { id: 'chloe', name: 'Chloe', image: '', odds: 1.4 },
      ] as [any, any],
      volume: '201k ETB',
      date: 'Nov 11, 26',
      chance: 80,
      isSettled: true,
      winner: 'chloe',
    },
    {
      id: '6',
      title: 'Tiktok Live Bet, Jake vs Lily, Who will win?',
      participants: [
        { id: 'jake', name: 'Jake', image: '', odds: 1.9 },
        { id: 'lily', name: 'Lily', image: '', odds: 1.8 },
      ] as [any, any],
      volume: '110k ETB',
      date: 'Nov 12, 26',
      chance: 50,
      isSettled: true,
      winner: 'lily',
    },
    {
      id: '7',
      title: 'Tiktok Live Bet, Ethan vs Olivia, Who will win?',
      participants: [
        { id: 'ethan', name: 'Ethan', image: '', odds: 1.6 },
        { id: 'olivia', name: 'Olivia', image: '', odds: 2.3 },
      ] as [any, any],
      volume: '145k ETB',
      date: 'Nov 13, 26',
      chance: 65,
      isSettled: true,
      winner: 'ethan',
    },
    {
      id: '8',
      title: 'Tiktok Live Bet, Mia vs Liam, Who will win?',
      participants: [
        { id: 'mia', name: 'Mia', image: '', odds: 2.0 },
        { id: 'liam', name: 'Liam', image: '', odds: 1.7 },
      ] as [any, any],
      volume: '99k ETB',
      date: 'Nov 14, 26',
      chance: 40,
      isSettled: true,
      winner: 'liam',
    },
    {
      id: '9',
      title: 'Tiktok Live Bet, Noah vs Ava, Who will win?',
      participants: [
        { id: 'noah', name: 'Noah', image: '', odds: 1.5 },
        { id: 'ava', name: 'Ava', image: '', odds: 2.4 },
      ] as [any, any],
      volume: '180k ETB',
      date: 'Nov 15, 26',
      chance: 75,
      isSettled: true,
      winner: 'noah',
    },
  ];

  const handleBet = (participantId: string) => {
    console.log('Bet placed on:', participantId);
    // TODO: Implement betting logic
  };

    return (
    <Layout  showHeaderNavigation={false}>
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