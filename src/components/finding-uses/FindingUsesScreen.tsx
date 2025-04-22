import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import EmailCollectionForm from "./EmailCollectionForm";
import SuccessMessage from "./SuccessMessage";
import { sendSlackNotification } from "@/utils/slackNotifier";

interface FindingUsesScreenProps {
  searchTerm: string;
  onClose: () => void;
}

const FindingUsesScreen = ({ searchTerm, onClose }: FindingUsesScreenProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isSlackNotificationSent, setIsSlackNotificationSent] = useState(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Reset state
    setLoadingProgress(0);
    setShowEmailPopup(false);
    setIsEmailSubmitted(false);
    setIsSlackNotificationSent(false);
    
    // Set up progress interval (5 seconds to complete)
    progressIntervalRef.current = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 1;
        
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
    }, 50); // 50ms * 100 steps = ~5 seconds
    
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const handleEmailSubmit = async (email: string) => {
    console.log(`Email submitted: ${email} for term: ${searchTerm}`);
    
    // Send notification to Slack (or store for later in development mode)
    try {
      console.log("Attempting to process Slack notification...");
      
      const notificationSent = await sendSlackNotification({
        email,
        artistOrTrack: searchTerm
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
    
    // Reset state after a delay
    setTimeout(() => {
      onClose();
    }, 3000);
  };

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
        
        {/* Email Collection or Success component */}
        {showEmailPopup && (
          <div className="mt-8 bg-[#1a1a1a] p-6 rounded-xl w-full max-w-md border border-gray-800 animate-fade-in">
            {!isEmailSubmitted ? (
              <EmailCollectionForm onSubmit={handleEmailSubmit} />
            ) : (
              <SuccessMessage />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindingUsesScreen; 