import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const DepositPage: React.FC = () => {
  const navigate = useNavigate();
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
    console.log('Deposit:', { amount, selectedBank });
    // TODO: Implement deposit logic
  };

  return (
    <Layout isAuthenticated={true} showHeaderNavigation={false}>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h1 className="text-2xl font-bold text-dark-blue mb-6">Deposit Funds</h1>
              
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
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Deposit
                </button>
              </form>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-dark-blue mb-4">Recent Transactions</h2>
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
                    <p className="font-semibold text-dark-blue">Deposit</p>
                    <p className="text-sm text-gray-600">Nov 10, 2024</p>
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

export default DepositPage; 