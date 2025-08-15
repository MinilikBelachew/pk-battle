import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import FullScreenLoader from '../ui/FullScreenLoader';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, rehydrating } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  console.log('PublicRoute - Auth state:', { isAuthenticated, rehydrating, pathname: location.pathname });

  // Show loader while Redux Persist is rehydrating
  if (rehydrating) {
    console.log('Redux Persist is rehydrating, showing loader');
    return <FullScreenLoader message="Loading..." />;
  }

  // If authenticated, redirect to home
  if (isAuthenticated) {
    console.log('User already authenticated, redirecting to home');
    return <Navigate to="/home" replace />;
  }

  // If not authenticated, render the public content
  console.log('User not authenticated, rendering public content');
  return <>{children}</>;
};

export default PublicRoute;


