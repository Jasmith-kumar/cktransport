<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/18d0391a-f642-46ae-b79f-b8148f4f3690

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env.local` and fill in:
   - `GEMINI_API_KEY` (if using AI features)
   - SMTP settings so contact/quote forms can send mail:
     - `CONTACT_EMAIL=info@cktransports.us` (inbox that receives all form submissions)
     - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
     - Optional: `SMTP_FROM=info@cktransports.us`
3. Run the app:
   `npm run dev`

### Contact form email flow

When someone submits the Contact or Quote form:

1. The message is emailed to **info@cktransports.us**
2. An automatic thank-you email is sent to the visitor’s address (email is required on every form)
