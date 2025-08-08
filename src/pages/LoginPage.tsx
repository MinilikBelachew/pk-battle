import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import TikTokBanner from '../components/ui/TikTokBanner';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // TODO: Implement login logic
    console.log('Login data:', formData);
    // After successful login, navigate to home
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
                    className="w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
                    placeholder="Please enter"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                      Password
                    </label>
                    <button 
                      type="button"
                      onClick={() => navigate('/forgot-password')}
                      className="text-sm text-sunrise hover:text-opacity-80 font-semibold"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
                    placeholder="Please enter"
                  />
                </div>
              </div>

              {/* Remember Me & Terms */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-sunrise focus:ring-sunrise border-gray-300"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                    Remember me
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  // Changed to be smaller than the form and centered
                  className="w-2/3 bg-sunrise text-black py-3 px-4 font-bold hover:bg-opacity-80 transition-colors"
                >
                  Sign In
                </button>
              </div>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-white">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/register')}
                    className="text-sunrise hover:text-opacity-80 font-semibold"
                  >
                    Register here
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

export default LoginPage;
