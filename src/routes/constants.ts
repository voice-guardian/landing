// Define route paths as constants to avoid typos and make updates easier
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SEARCH_RESULTS: '/search',
  AMBER_BLOG: '/amber-lowe-case-study',
  ADMINISTRATION_BLOG: '/administration-mp-case-study',
  // Add more routes as needed
  // Example:
  // CONTACT: '/contact',
  // PRICING: '/pricing',
} as const;

// Navigation helper
export const navigate = (route: string) => {
  window.location.href = route;
};

// Type-safe navigation using predefined routes
export const navigateTo = (route: keyof typeof ROUTES) => {
  window.location.href = ROUTES[route];
}; 