// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RecentlySettledPage from './pages/RecentlySettledPage';
import MarketsPage from './pages/MarketsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import DepositPage from './pages/DepositPage';
import WithdrawPage from './pages/WithdrawPage';
import WalletPage from './pages/WalletPage';
import OrderPlacedPage from './pages/OrderPlacedPage';
import MarketCardPage from './pages/MarketCardPage';
import UpcomingPage from './pages/UpcomingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/recently-settled" element={<RecentlySettledPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/order-placed" element={<OrderPlacedPage />} />
          <Route path="/market-card" element={<MarketCardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
