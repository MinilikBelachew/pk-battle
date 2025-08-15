import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/rootReducer';
import Spinner from '../components/ui/Spinner';
import { getprofileRequest, updateProfleRequest } from '../store/slice/profile';

const SettingsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.profile);
  const authUser = useSelector((state: RootState) => state.auth.user as any | null);
  const [notifications, setNotifications] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState<string>('imgs/img1.png');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [username, setUsername] = useState('user123');
  const [bio, setBio] = useState('');

  useEffect(() => {
    dispatch(getprofileRequest());
  }, [dispatch]);

  useEffect(() => {
    if (user || authUser) {
      const source = user || authUser;
      setEmail(source.email || '');
      setPhone(source.phone || '');
      if (source.avatarUrl) setAvatarUrl(source.avatarUrl);
    }
  }, [user, authUser]);

  const handleNotificationToggle = () => {
    setNotifications(!notifications);
  };

  const handleSave = () => {
    dispatch(updateProfleRequest({ email, phone, avatarFile }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const nextUrl = URL.createObjectURL(file);
    setAvatarUrl(nextUrl);
    setAvatarFile(file);
  };

  return (
    <Layout showHeaderNavigation={false}>
      <div className="bg-gray-100 mx-[0.3cm] mb-[0.3cm]">
        <div className="bg-gray-200 p-8">
          {/* Header: Profile + Notification */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-6 border-b border-gray-300 mb-8">
            {/* Left: Avatar + Name */}
            <div className="flex items-center space-x-4">
              <label htmlFor="avatar-input" className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 cursor-pointer group">
                <img
                  src={avatarUrl}
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:opacity-90"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/96x96/E2E8F0/000000?text=Profile';
                  }}
                />
                <input id="avatar-input" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </label>
              <div>
                <h2 className="text-xl font-bold text-[#1e2a4a] underline">{authUser?.email || authUser?.phone || 'User'}</h2>
                <p className="text-gray-500">{authUser?.createdAt ? `Joined ${new Date(authUser.createdAt).toLocaleDateString()}` : ''}</p>
              </div>
            </div>

            {/* Right: Notification pill + toggle */}
            <div className="flex items-center gap-5 mt-6 md:mt-10 mr-8 md:mr-40 self-start md:self-end">
              <span className="inline-flex items-center px-5 py-1.5 bg-white rounded-full text-base text-gray-700 shadow-sm">Notification</span>
              <button
                onClick={handleNotificationToggle}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  notifications ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-7 w-7 transform rounded-full bg-white shadow transition-transform ${
                    notifications ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Please enter"
                className="w-full h-10 px-3 border border-gray-300 rounded-md bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Please enter"
                className="w-full h-10 px-3 border border-gray-300 rounded-md bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Username (not persisted in backend for now) */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Please enter"
                className="w-full h-10 px-3 border border-gray-300 rounded-md bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Bio (not persisted in backend for now) */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about yourself..."
                rows={4}
                className="w-full px-3 py-2 h-32 border border-gray-300 rounded-md bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSave}
                className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors disabled:opacity-60"
                disabled={loading}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2"><Spinner /> Saving...</span>
                ) : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage; 