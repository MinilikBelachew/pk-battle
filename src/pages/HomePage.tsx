import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BettingCard from '../components/betting/BettingCard';
import TikTokBanner from '../components/ui/TikTokBanner';
import NavigationTabs from '../components/ui/NavigationTabs';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab] = useState('tiktok-live');

  // Mock data for betting cards



  const handleBet = (participantId: string) => {
    console.log('Bet placed on:', participantId);
    // TODO: Implement betting logic
  };

  return (
    <Layout isAuthenticated={true}>
      {/* Hero Banner */}
      <div className="relative h-64 mb-8">
        <TikTokBanner className="h-full" />
      </div>

      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} />

      {/* Betting Cards */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
