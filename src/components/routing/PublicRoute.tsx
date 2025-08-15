import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  console.log('PublicRoute - Auth state:', { isAuthenticated, pathname: location.pathname });

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


