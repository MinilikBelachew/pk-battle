import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import FullScreenLoader from '../ui/FullScreenLoader';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, rehydrating } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  console.log('ProtectedRoute - Auth state:', { isAuthenticated, rehydrating, pathname: location.pathname });

  // Show loader while Redux Persist is rehydrating
  if (rehydrating) {
    console.log('Redux Persist is rehydrating, showing loader');
    return <FullScreenLoader message="Loading..." />;
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    console.log('User not authenticated, redirecting to login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the protected content
  console.log('User authenticated, rendering protected content');
  return <>{children}</>;
};

export default ProtectedRoute;


