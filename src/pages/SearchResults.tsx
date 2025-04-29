import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import FindingUsesScreen from "@/components/finding-uses/FindingUsesScreen";
import MainLayout from "@/components/layouts/MainLayout";
import { ROUTES } from "@/routes/constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get search parameters from URL
  const searchTerm = searchParams.get("term") || "";
  const artistId = searchParams.get("artistId") || undefined;
  
  // Validate required parameters
  useEffect(() => {
    if (!searchTerm) {
      // If no search term found, redirect to home
      navigate(ROUTES.HOME);
    }
  }, [searchTerm, navigate]);
  
  // Handle close action to navigate back to home
  const handleClose = () => {
    navigate(ROUTES.HOME);
  };
  
  if (!searchTerm) {
    return null; // Will redirect in the useEffect
  }
  
  return (
    <FindingUsesScreen
      searchTerm={searchTerm}
      artistId={artistId}
      onClose={handleClose}
    />
  );
};

const SearchResultsPage = () => (
  <MainLayout>
    <SearchResults />
  </MainLayout>
);

export default SearchResultsPage; 