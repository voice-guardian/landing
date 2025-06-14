import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import SearchResults from '@/pages/SearchResults';
import AmberBlog from '@/pages/AmberBlog';
import NotFound from '@/pages/NotFound';
import AdministrationBlog from '@/pages/AdministrationBlog';
import UseCaseIPPage from '@/pages/use-case-ip';
import { ROUTES } from './constants';
import React from 'react';

// External redirect component
const ExternalRedirect = ({ to }: { to: string }) => {
  React.useEffect(() => {
    window.location.href = to;
  }, [to]);
  return null;
};

// Define our routes
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Index />,
    errorElement: <NotFound />
  },
  {
    path: '/enforcement',
    element: <UseCaseIPPage />
  },
  {
    path: ROUTES.ABOUT,
    element: <About />
  },
  {
    path: ROUTES.SEARCH_RESULTS,
    element: <SearchResults />,
  },
  {
    path: ROUTES.AMBER_BLOG,
    element: <AmberBlog />
  },
  {
    path: ROUTES.ADMINISTRATION_BLOG,
    element: <AdministrationBlog />
  },
  {
    path: '/privacy-policy',
    element: <Navigate to="/privacy-policy.html" replace />,
  },
  {
    path: '/terms-of-service',
    element: <Navigate to="/terms-of-service.html" replace />,
  },
  {
    path: '/careers',
    element: <ExternalRedirect to="https://app.dover.com/jobs/thirdchair" />,
  },
  // Add more routes here as needed
  // Example:
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  
  // 404 Not Found route - must be last
  {
    path: '*',
    element: <NotFound />,
  }
]);

// Router component to be used in the app
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter; 