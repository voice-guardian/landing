// Vercel serverless function to send Slack notification
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!SLACK_WEBHOOK_URL) {
    return res.status(500).json({ error: 'Slack webhook URL not configured' });
  }

  const { email, searchTerm, artistId, foundCompanies } = req.body;

  if (!email || !searchTerm) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const text = `:email: New Email Submission\n*Email:* ${email}\n*Search Term:* ${searchTerm}\n*Artist ID:* ${artistId || 'N/A'}\n*Found Companies:* ${(foundCompanies && foundCompanies.length > 0) ? foundCompanies.join(', ') : 'None'}`;

  try {
    const slackRes = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!slackRes.ok) {
      throw new Error(`Slack webhook error: ${slackRes.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send Slack notification' });
  }
} 