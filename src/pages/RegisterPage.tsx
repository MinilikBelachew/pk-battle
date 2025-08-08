import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import TikTokBanner from '../components/ui/TikTokBanner';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Register data:', formData);
    // After successful registration, navigate to home
    navigate('/home');
  };

  return (
    <Layout isAuthenticated={false} showHeaderNavigation={false}>
      <div className="min-h-screen flex flex-col">

        {/* Banner Section - Full Width */}
        <div className="w-full mb-8">
          <TikTokBanner />
        </div>

        {/* Form Section - Centered */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
          

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleInputChange}
                    // Removed `rounded-lg`
                    className="w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
                    placeholder="Please enter"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    // Removed `rounded-lg`
                    className="w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
                    placeholder="Please enter"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    // Removed `rounded-lg`
                    className="w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
                    placeholder="Please enter"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    // Removed `rounded-lg`
                    className="w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
                    placeholder="Please enter"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    required
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    // Removed `rounded`
                    className="h-4 w-4 text-sunrise focus:ring-sunrise border-gray-300"
                  />
                  <label htmlFor="acceptTerms" className="ml-2 block text-sm text-white">
                    I agree to the Terms and Conditions
                  </label>
                </div>
              </div>

              {/* Register Button */}
              <div className="text-center">
                <button
                  type="submit"
                  // Changed to be smaller than the form and centered
                  className="w-2/3 bg-sunrise text-black py-3 px-4 font-bold hover:bg-opacity-80 transition-colors"
                >
                  Create Account
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-white">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="text-sunrise hover:text-opacity-80 font-semibold"
                  >
                    Login here
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
