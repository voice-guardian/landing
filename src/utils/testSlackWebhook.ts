/**
 * Utility for testing a Slack webhook
 * 
 * This is a standalone function that can be called from the browser console
 * to test if your Slack webhook is working properly.
 * 
 * Usage (from browser console):
 * import { testSlackWebhook } from './utils/testSlackWebhook.ts';
 * testSlackWebhook();
 */

export async function testSlackWebhook(webhookUrl?: string): Promise<boolean> {
  try {
    // Get Slack webhook URL from environment variables or use provided URL
    const url = webhookUrl || import.meta.env.VITE_SLACK_WEBHOOK_URL;
    
    if (!url) {
      console.error("Slack webhook URL is missing. Please provide a URL or add it to your environment variables.");
      return false;
    }

    console.log("Testing Slack webhook with URL:", url);

    // Send a simple test message matching the curl example
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "text": "🧪 Test message from the application"
      }),
    });

    console.log("Slack API response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Slack API error response:", errorText);
      throw new Error(`Slack API responded with status: ${response.status}`);
    }

    console.log("✅ Test message sent successfully to Slack!");
    return true;
  } catch (error) {
    console.error("Failed to send test message to Slack:", error);
    return false;
  }
} 