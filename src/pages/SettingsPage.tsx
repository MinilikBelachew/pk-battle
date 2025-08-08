import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [email, setEmail] = useState('user@example.com');
  const [username, setUsername] = useState('user123');
  const [bio, setBio] = useState('');

  const handleNotificationToggle = () => {
    setNotifications(!notifications);
  };

  const handleSave = () => {
    console.log('Settings saved:', { notifications, email, username, bio });
    // TODO: Implement save logic
  };

  return (
    <Layout isAuthenticated={true} showHeaderNavigation={false}>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-dark-blue mb-6">Settings</h1>
            
            {/* Notification Settings */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-dark-blue mb-4">Notifications</h2>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Enable notifications</span>
                <button
                  onClick={handleNotificationToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Profile Settings */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-dark-blue mb-4">Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage; 