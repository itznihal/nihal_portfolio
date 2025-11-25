# EmailJS Setup Guide

This guide will help you configure EmailJS to send contact form submissions directly to your email.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

### Option A: Gmail Service (If you get authentication error, see troubleshooting below)

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as your email provider
4. **IMPORTANT**: When connecting your Gmail account (itznihal143@gmail.com):
   - Make sure to check the box "Allow 'Send email on your behalf' permission"
   - Grant ALL requested permissions during Google OAuth
   - If you see "insufficient authentication scopes" error:
     - Click **Disconnect** button
     - Clear browser cache/cookies for emailjs.com
     - Try connecting again and ensure you grant all permissions
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### Option B: Use EmailJS's Default Email Service (Recommended if Gmail fails)

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **EmailJS** (default service - no OAuth required)
4. This service sends emails directly without needing to connect Gmail
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

**Note**: With EmailJS default service, you'll need to verify your email address (itznihal143@gmail.com) in EmailJS account settings to receive emails.

## Troubleshooting Gmail Authentication Error

If you get "412 Gmail API: Request had insufficient authentication scopes" error:

### Solution 1: Reconnect with Proper Permissions

1. Click **Disconnect** in the Config Service modal
2. Go to your Google Account settings: https://myaccount.google.com/permissions
3. Remove EmailJS from "Third-party apps with account access"
4. Go back to EmailJS and try connecting again
5. **Make sure to grant ALL permissions** when Google asks
6. Specifically allow "Send email on your behalf" permission

### Solution 2: Use EmailJS Default Service (Easier)

1. Instead of Gmail, choose **EmailJS** as the service type
2. No OAuth/authentication needed
3. Just verify your email in EmailJS account settings
4. This is simpler and works reliably

### Solution 3: Use a Different Email Service

- **SendGrid**: Free tier available, more reliable
- **Mailgun**: Good alternative
- **SMTP**: Use custom SMTP settings

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Portfolio Contact Form

**Subject:** `Portfolio Contact: {{subject}}`

**Content:**

```
New message received from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent at: {{timestamp}}
Reply to: {{from_email}}
```

4. Save the template and copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key** (User ID)

## Step 5: Configure Environment Variables

Create a `.env` file in the root of your project:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with your actual EmailJS credentials.

## Step 6: Update Template Settings

In your EmailJS template settings (right panel):

- **To Email:** `itznihal143@gmail.com` ✓ (your email address - this is correct)
- **From Name:** `{{from_name}}` ⚠️ (Change from `{{name}}` to `{{from_name}}`)
- **From Email:** Check "Use Default Email Address" OR use `{{from_email}}`
- **Reply To:** `{{from_email}}` ⚠️ (Change from `{{email}}` to `{{from_email}}`)

**⚠️ CRITICAL FIXES NEEDED:**
Based on your screenshot, you need to update these fields in the right panel:

1. **From Name field**: Change `{{name}}` → `{{from_name}}`
2. **Reply To field**: Change `{{email}}` → `{{from_email}}`

These variable names must match exactly what the code sends, otherwise the email won't populate correctly.

**Important**: If using EmailJS default service (not Gmail), make sure your email (itznihal143@gmail.com) is verified in EmailJS account settings under **Account** → **Email Addresses**.

## Testing

1. Start your development server: `npm start`
2. Fill out the contact form
3. Submit and check your email (itznihal143@gmail.com)
4. You should receive an email with the subject: "Portfolio Contact: [subject]"

## Notes

- Free plan allows 200 emails per month
- No data is stored anywhere - emails are sent directly
- All form details are included in the email
- Subject line will always show "Portfolio Contact: [user's subject]"
