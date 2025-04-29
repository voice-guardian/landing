import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/constants';

export const useNavigation = () => {
  const navigate = useNavigate();

  // Type-safe navigation to predefined routes
  const navigateTo = (route: keyof typeof ROUTES) => {
    navigate(ROUTES[route]);
  };

  // Navigate to any URL (could be external)
  const navigateToUrl = (url: string) => {
    // Check if it's an external URL
    if (url.startsWith('http') || url.startsWith('https')) {
      window.location.href = url;
      return;
    }
    
    // Otherwise use React Router navigation
    navigate(url);
  };

  return {
    navigateTo,
    navigateToUrl,
    navigate, // original function from React Router
  };
};

export default useNavigation; 