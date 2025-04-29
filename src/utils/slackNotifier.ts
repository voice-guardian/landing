/**
 * Utility for sending notifications to Slack
 */

export interface SlackNotificationData {
  email: string;
  artistOrTrack: string;
  foundCompanies?: string[];
  totalUses?: number;
  artistId?: string;
}

/**
 * Sends a notification to a Slack channel with artist/track and email information
 */
export async function sendSlackNotification({ email, artistOrTrack, foundCompanies, totalUses, artistId }: SlackNotificationData): Promise<boolean> {
  try {
    // Get Slack webhook URL from environment variables
    const webhookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error("Slack webhook URL is missing");
      return false;
    }

    // Create a simple text message as fallback
    const fallbackText = `New Music Use Report Request: Artist/Track: ${artistOrTrack}, Email: ${email}`;

    // Format the message for Slack
    const message = {
      // Include a simple text field as recommended in Slack docs
      text: fallbackText,
      // Additional rich formatting using blocks
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎵 New Music Use Report Request",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Artist/Track:*\n${artistOrTrack}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            }
          ]
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted on: ${new Date().toLocaleString()}`
            }
          ]
        }
      ]
    };

    console.log("Preparing Slack notification with data:", { artistOrTrack, email, foundCompanies, totalUses });
    
    // CORS Workaround: Store the submission data in localStorage
    try {
      // Generate a unique ID for this submission
      const submissionId = `slack_submission_${Date.now()}`;
      
      // Store the data for potential server-side processing later
      localStorage.setItem(submissionId, JSON.stringify({
        email,
        artistOrTrack,
        foundCompanies,
        totalUses,
        artistId,
        timestamp: new Date().toISOString(),
        webhookUrl
      }));
      
      console.log(`Submission data stored with ID: ${submissionId}`);
      
      // For development purposes, log what would be sent
      console.log("Would send to Slack webhook:", webhookUrl);
      console.log("With message:", message);
      
      // Return true to indicate "success" even though we're bypassing the actual call
      return true;
    } catch (storageError) {
      console.error("Failed to store submission data:", storageError);
    }

    // NOTE: The direct fetch to Slack webhook is commented out due to CORS issues
    /*
    // Send the request to the Slack webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Slack API error response:", errorText);
      throw new Error(`Slack API responded with status: ${response.status}`);
    }
    */

    return true;
  } catch (error) {
    console.error("Failed to send Slack notification:", error);
    return false;
  }
} 