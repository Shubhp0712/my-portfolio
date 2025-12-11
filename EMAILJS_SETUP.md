# EmailJS Setup Guide

Follow these steps to enable the contact form on your portfolio:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Click "Connect Account" and authorize with your Google account
   - Or use other providers (Outlook, Yahoo, etc.)
4. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template configuration:

### Template Settings:
- **Template Name**: `Portfolio Contact Form`

### Email Template Content:

**Subject:**
```
{{subject}}
```

**Body:**
```
You have received a new message from your portfolio contact form.

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

4. Click **Save** and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)
3. Copy this key

## Step 5: Configure Your Portfolio

1. Open `src/components/Contact.tsx`
2. Find these lines (around line 34):
```typescript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

3. Replace with your actual values:
```typescript
const serviceId = 'service_abc123'  // Your Service ID
const templateId = 'template_xyz789'  // Your Template ID
const publicKey = 'abcdefghijklmnop'  // Your Public Key
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and click "Send Message"
4. Check your email inbox for the message

## Optional: Environment Variables (Recommended)

For better security, use environment variables:

1. Create `.env.local` file in your project root:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

2. Update `Contact.tsx` to use environment variables:
```typescript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
```

3. Add `.env.local` to your `.gitignore` file

## Troubleshooting

### Issue: "EmailJS is not configured yet"
- Make sure you replaced the placeholder values with your actual credentials

### Issue: Emails not received
- Check your spam/junk folder
- Verify the email service is properly connected in EmailJS dashboard
- Check the template is saved correctly

### Issue: Form submission fails
- Open browser console (F12) to see error messages
- Verify all three credentials (Service ID, Template ID, Public Key) are correct
- Check your EmailJS account is verified

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 1 email service
- 2 email templates

If you need more, consider upgrading or using alternative services like Formspree or a custom backend.

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
