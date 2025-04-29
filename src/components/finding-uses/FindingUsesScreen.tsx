import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import EmailCollectionForm from "./EmailCollectionForm";
import SuccessMessage from "./SuccessMessage";
import { sendSlackNotification } from "@/utils/slackNotifier";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/constants";

interface FindingUsesScreenProps {
  searchTerm: string;
  onClose: () => void;
  artistId?: string; // Add artistId prop
}

interface CompanyUse {
  url: string;
  company_name: string;
  company_linkedin_url: string;
  spotify_track_name: string;
  spotify_artist_names: string[];
}

interface WatchdogApiResponse {
  uses: CompanyUse[];
  total: number;
}

const FindingUsesScreen = ({ searchTerm, onClose, artistId }: FindingUsesScreenProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isSlackNotificationSent, setIsSlackNotificationSent] = useState(false);
  const [foundCompanies, setFoundCompanies] = useState<string[]>([]);
  const [totalUsesFound, setTotalUsesFound] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const apiCallCompleted = useRef(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Reset state
    setLoadingProgress(0);
    setShowEmailPopup(false);
    setIsEmailSubmitted(false);
    setIsSlackNotificationSent(false);
    apiCallCompleted.current = false;
    
    // Fetch data from Watchdog API if artistId is available
    const fetchWatchdogData = async () => {
      if (!artistId) {
        // No artist ID, skip API call
        apiCallCompleted.current = true;
        return;
      }
      
      try {
        const url = `https://api.creatorwatchdog.com/abba/quick_search?spotify_artist_id=${artistId}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json() as WatchdogApiResponse;
        
        // Log the raw response for debugging
        console.log("Raw API response:", data);
        
        // Extract company names from the API response
        const companyUsernames = data.uses
          .map(use => {
            try {
              // Get the company name and ensure first letter is capitalized
              if (!use.company_name) return null;
              
              // Capitalize first letter if it's not already
              const companyName = use.company_name.charAt(0).toUpperCase() + use.company_name.slice(1);
              return companyName;
            } catch (e) {
              console.error("Error processing company name:", use.company_name, e);
              return null;
            }
          })
          .filter((companyName): companyName is string => companyName !== null);
        
        // Get unique company usernames
        const uniqueCompanies = Array.from(new Set(companyUsernames));
        
        console.log("Extracted usernames:", companyUsernames);
        console.log("Unique companies:", uniqueCompanies);
        
        setFoundCompanies(uniqueCompanies);
        setTotalUsesFound(data.total);
        
        // Mark API call as completed
        apiCallCompleted.current = true;
      } catch (error) {
        console.error("Error fetching Watchdog data:", error);
        apiCallCompleted.current = true;
      }
    };
    
    // Start API call
    fetchWatchdogData();
    
    // Set up progress interval (runs for up to 10 seconds)
    const progressSpeed = 10; // Update progress every 100ms
    const maxProgressTime = 10000; // 10 seconds max
    const totalSteps = maxProgressTime / progressSpeed;
    
    progressIntervalRef.current = setInterval(() => {
      setLoadingProgress(prev => {
        // If API call is done and we're at least at 70%, accelerate to 100%
        if (apiCallCompleted.current && prev >= 70) {
          const newProgress = prev + 5;
          
          if (newProgress >= 100) {
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
            }
            setTimeout(() => {
              setShowEmailPopup(true);
            }, 500);
            return 100;
          }
          
          return newProgress;
        }
        
        // Standard progress increase
        const newProgress = prev + (100 / totalSteps);
        
        // If we reach 70% but API isn't done, slow down progress
        if (newProgress >= 70 && !apiCallCompleted.current) {
          return 70;
        }
        
        // When progress reaches 100%, clear interval and show email popup
        if (newProgress >= 100) {
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
          }
          setTimeout(() => {
            setShowEmailPopup(true);
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, progressSpeed);
    
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [artistId]);

  const handleEmailSubmit = async (email: string) => {
    console.log(`Email submitted: ${email} for term: ${searchTerm}`);
    
    // Send notification to Slack (or store for later in development mode)
    try {
      console.log("Attempting to process Slack notification...");
      
      const notificationSent = await sendSlackNotification({
        email,
        artistOrTrack: searchTerm,
        foundCompanies: foundCompanies,
        totalUses: totalUsesFound,
        artistId: artistId
      });
      
      setIsSlackNotificationSent(notificationSent);
      
      // Log the result
      if (notificationSent) {
        console.log(`✅ Slack notification processed for ${searchTerm} - ${email}`);
        // For development mode, show details about accessing stored data
        console.log("Note: In development mode, data is stored in localStorage instead of being sent to Slack directly due to CORS limitations.");
        console.log("To set up a proper Slack integration, see the docs/SLACK_PROXY_SETUP.md file for instructions on creating a proxy server.");
      } else {
        console.warn(`❌ Failed to process Slack notification for ${searchTerm} - ${email}`);
      }
    } catch (error) {
      console.error("Error processing Slack notification:", error);
    }
    
    // Show success state after attempting notification
    setIsEmailSubmitted(true);
    
    // Reset state after a delay and navigate back to home
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  // Add keyboard event listener for Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center p-4 z-[9999]">
      <div className="w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-2">Finding Uses</h2>
        <p className="text-gray-400 mb-8 text-center">Searching for commercial uses of "{searchTerm}"</p>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full bg-purple-500 transition-all duration-100 ease-linear"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        
        <p className="text-gray-500 text-sm">{loadingProgress}% complete</p>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Email Collection or Success component */}
        {showEmailPopup && (
          <div className="mt-8 bg-[#1a1a1a] p-6 rounded-xl w-full max-w-md border border-gray-800 animate-fade-in">
            {!isEmailSubmitted ? (
              <EmailCollectionForm 
                onSubmit={handleEmailSubmit} 
                companies={foundCompanies}
                totalUses={totalUsesFound}
              />
            ) : (
              <SuccessMessage 
                companies={foundCompanies} 
                totalUses={totalUsesFound} 
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindingUsesScreen; 