import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/constants';
import MainLayout from '@/components/layouts/MainLayout';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-white">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-purple-500 mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to={ROUTES.HOME}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

const NotFoundPage = () => (
  <MainLayout>
    <NotFound />
  </MainLayout>
);

export default NotFoundPage;
