import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import SearchResults from '@/pages/SearchResults';
import AmberBlog from '@/pages/AmberBlog';
import NotFound from '@/pages/NotFound';
import { ROUTES } from './constants';

// Define our routes
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Index />,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
  },
  {
    path: ROUTES.SEARCH_RESULTS,
    element: <SearchResults />,
  },
  {
    path: ROUTES.AMBER_BLOG,
    element: <AmberBlog />,
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