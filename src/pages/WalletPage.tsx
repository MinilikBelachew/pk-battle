import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const WalletPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState<'deposit' | 'withdraw'>('deposit');
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const banks = [
    'Commercial Bank of Ethiopia',
    'Dashen Bank',
    'Bank of Abyssinia',
    'Cooperative Bank of Oromia',
    'Lion International Bank',
    'United Bank',
    'Wegagen Bank',
    'Bank of Baroda',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${activeMode}:`, { amount, selectedBank });
    // TODO: Implement deposit/withdraw logic
  };

  return (
    <Layout isAuthenticated={true} showHeaderNavigation={false}>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Balance Display */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h1 className="text-2xl font-bold text-dark-blue mb-4">Wallet</h1>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">1,200 ETB</p>
                <p className="text-gray-600">Available Balance</p>
              </div>
            </div>

            {/* Mode Toggle */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex space-x-2 mb-6">
                <button
                  onClick={() => setActiveMode('deposit')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    activeMode === 'deposit'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Deposit
                </button>
                <button
                  onClick={() => setActiveMode('withdraw')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    activeMode === 'withdraw'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Withdraw
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (ETB)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter amount"
                    required
                  />
                </div>

                {/* Bank Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Bank</label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Choose a bank</option>
                    {banks.map((bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    activeMode === 'deposit'
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  {activeMode === 'deposit' ? 'Deposit' : 'Withdraw'}
                </button>
              </form>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-dark-blue mb-4">Transaction History</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-dark-blue">Deposit</p>
                    <p className="text-sm text-gray-600">Nov 15, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">+500 ETB</p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-dark-blue">Withdrawal</p>
                    <p className="text-sm text-gray-600">Nov 10, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-red-600">-300 ETB</p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-dark-blue">Deposit</p>
                    <p className="text-sm text-gray-600">Nov 5, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">+1000 ETB</p>
                    <p className="text-sm text-gray-600">Completed</p>
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

export default WalletPage; 