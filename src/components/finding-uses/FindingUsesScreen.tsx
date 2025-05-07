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
  const progressCompleted = useRef(false);
  const navigate = useNavigate();
  
  // This ensures the progress display is locked at 100% when the form is shown
  const displayProgress = showEmailPopup ? 100 : Math.floor(loadingProgress);
  
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
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
    
    // Simplified progressive loading animation
    const runProgressAnimation = () => {
      // Constants for animation
      const TOTAL_TIME_TO_70_PERCENT = 3000; // 3 seconds to reach 70%
      const TOTAL_TIME_AFTER_API = 1000; // 1 second to go from 70% to 100% after API completes
      const UPDATE_INTERVAL = 50; // Update every 50ms for smooth animation
      
      // Calculate step sizes
      const STEP_TO_70 = (70 * UPDATE_INTERVAL) / TOTAL_TIME_TO_70_PERCENT;
      const STEP_TO_100 = (30 * UPDATE_INTERVAL) / TOTAL_TIME_AFTER_API;
      
      // Start the progress animation interval
      const progressInterval = setInterval(() => {
        setLoadingProgress(prevProgress => {
          // If already completed, stay at 100%
          if (prevProgress >= 100) {
            return 100;
          }
          
          // If API has completed and we're at or past 70%, move quickly to 100%
          if (apiCallCompleted.current && prevProgress >= 70) {
            const nextProgress = Math.min(100, prevProgress + STEP_TO_100);
            
            // Once we reach 100%, show email popup and clear interval
            if (nextProgress >= 100) {
              setTimeout(() => {
                setShowEmailPopup(true);
              }, 300);
            }
            
            return nextProgress;
          }
          
          // If we haven't reached 70% yet, keep steady pace
          if (prevProgress < 70) {
            return Math.min(70, prevProgress + STEP_TO_70);
          }
          
          // If we're at 70% but API isn't done, hold at 70%
          return 70;
        });
      }, UPDATE_INTERVAL);
      
      // Store interval reference for cleanup
      progressIntervalRef.current = progressInterval;
    };
    
    // Start the animation
    runProgressAnimation();
    
    // Cleanup
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
    // Adding pointer-events-auto to ensure the modal captures all clicks
    <div className="fixed inset-0 flex flex-col items-center justify-center p-4 z-[10000] pointer-events-auto">
      {/* Using a higher opacity value to ensure complete coverage */}
      <div className="absolute inset-0 bg-black opacity-100"></div>
      
      {/* Background with gradient overlay - with a more solid color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A23] to-black z-[1]"></div>
      
      {/* Decorative elements - higher z-index than the background */}
      <div className="absolute inset-0 z-[2] opacity-20">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      
      {/* Close button - needs to be above all backgrounds */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-[11]"
        aria-label="Close"
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Main content container - ensure it's above all background elements */}
      <div className="w-full max-w-lg flex flex-col items-center relative z-[10]">
        <div className="text-center mb-8 max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Finding Uses</h2>
          <p className="text-gray-300 text-lg">
            Searching for commercial uses of "<span className="text-purple-400 font-medium">{searchTerm}</span>"
          </p>
        </div>
        
        {/* Progress section */}
        {!showEmailPopup && (
          <div className="w-full mb-10 max-w-md">
            {/* Progress bar with glow effect */}
            <div className="w-full h-3 bg-[#14101A] rounded-full mb-4 overflow-hidden shadow-inner border border-gray-800/30">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                style={{ width: `${displayProgress}%` }}
              ></div>
            </div>
            
            {/* Progress details */}
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-sm">{displayProgress}% complete</p>
              <div className="flex items-center">
                <span className="inline-block h-2 w-2 rounded-full bg-purple-500 animate-pulse mr-2"></span>
                <p className="text-purple-300 text-sm font-medium">Scanning platforms</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Email Collection or Success component */}
        {showEmailPopup && (
          <div className="w-full max-w-md">
            <div className="bg-[#14101A] p-8 rounded-xl border border-purple-800/20 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default FindingUsesScreen; 