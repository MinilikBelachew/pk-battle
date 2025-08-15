import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import TikTokBanner from '../components/ui/TikTokBanner';
import Spinner from '../components/ui/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../store/slice/auth';
import type { RootState } from '../store/rootReducer';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
 const dispatch=useDispatch();
 const { isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth);
 const [formError, setFormError] = useState<string | null>(null);
 const [successMessage, setSuccessMessage] = useState<string | null>(null);

 useEffect(() => {
   if (isAuthenticated) {
     setSuccessMessage('Account created successfully! Redirecting to home...');
     setTimeout(() => {
       navigate('/home');
     }, 1500);
   }
 }, [isAuthenticated, navigate]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone:"",
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
  setFormError(null);
  
  // Client-side validation
  if (!formData.email.trim()) {
    setFormError('Email is required');
    return;
  }
  if (!/.+@.+\..+/.test(formData.email)) {
    setFormError('Please enter a valid email address');
    return;
  }
  if (!formData.phone.trim()) {
    setFormError('Phone number is required');
    return;
  }
  if (formData.phone.trim().length < 10) {
    setFormError('Phone number must be at least 10 digits');
    return;
  }
  if (formData.phone.trim().length > 20) {
    setFormError('Phone number must not exceed 20 digits');
    return;
  }
  if (!formData.password) {
    setFormError('Password is required');
    return;
  }
  if (formData.password.length < 8) {
    setFormError('Password must be at least 8 characters long');
    return;
  }
  if (formData.password !== formData.confirmPassword) {
    setFormError('Passwords do not match');
    return;
  }
  
  const registrationData = { email: formData.email, phone: formData.phone, password: formData.password };
  dispatch(registerRequest(registrationData));
};

// Enhanced error message handling
const getErrorMessage = (error: any) => {
  if (typeof error === 'string') {
    // Handle specific backend error messages
    if (error.toLowerCase().includes('email already exists') || error.toLowerCase().includes('email already registered')) {
      return 'An account with this email already exists. Please use a different email or try logging in.';
    }
    if (error.toLowerCase().includes('phone already exists') || error.toLowerCase().includes('phone already registered')) {
      return 'An account with this phone number already exists. Please use a different phone number or try logging in.';
    }
    if (error.toLowerCase().includes('email')) {
      return 'Please enter a valid email address.';
    }
    if (error.toLowerCase().includes('phone')) {
      return 'Please enter a valid phone number.';
    }
    if (error.toLowerCase().includes('password')) {
      return 'Password must be at least 8 characters long.';
    }
    if (error.toLowerCase().includes('validation')) {
      return 'Please check your input and try again.';
    }
    return error;
  }
  return 'Registration failed. Please try again.';
 };

  return (
    <Layout showHeaderNavigation={false}>
      <div className="min-h-screen flex flex-col">

        {/* Banner Section - Full Width */}
        <div className="w-full mb-8">
          <TikTokBanner />
        </div>

        {/* Form Section - Centered */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
            {(formError || error) && (
              <div className="mb-4 rounded-sm bg-red-500 text-white px-4 py-2 text-sm">
                {formError || getErrorMessage(error)}
              </div>
            )}
            {loading && (
              <div className="flex items-center gap-2 text-white mb-4">
                <Spinner />
                <span>Creating your account...</span>
              </div>
            )}
            {successMessage && (
              <div className="mb-4 rounded-sm bg-green-500 text-white px-4 py-2 text-sm">
                {successMessage}
              </div>
            )}

          

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
                    
                    value={formData.username}
                    onChange={handleInputChange}
                    // Removed `rounded-lg`
                    className="rounded-sm w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
                    placeholder="Please enter"
                  />
                </div>
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Phone Number 
                    </label>
                    <input
                    id="phone"
                    name="phone"
                      type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    // Removed `rounded-lg`
                    className="rounded-sm w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
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
                    className="rounded-sm w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
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
                    className="rounded-sm w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
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
                    className="rounded-sm w-full px-4 py-3 border border-gray-600 bg-white text-dark-blue placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sunrise focus:border-transparent"
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
                  className="rounded-sm w-2/3 bg-sunrise text-black py-3 px-4 font-bold hover:bg-opacity-80 transition-colors disabled:opacity-60"
                  disabled={loading}
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
                    className="text-sunrise cursor-pointer hover:text-opacity-80 font-semibold"
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
