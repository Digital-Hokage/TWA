# TWA Website Deployment Guide

## Frontend Deployment (Netlify)

1. **Connect Repository**
   - Login to Netlify
   - Connect GitHub repository
   - Select `TWA` repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

3. **Environment Variables**
   - `NEXT_PUBLIC_API_URL`: Backend API URL

## Backend Deployment (Render)

1. **Create Web Service**
   - Connect GitHub repository
   - Select `backend` folder
   - Runtime: Node

2. **Build Settings**
   - Build command: `npm install`
   - Start command: `npm start`

3. **Environment Variables**
   - `PORT`: 5000
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Random secret key
   - `RAZORPAY_KEY_ID`: Razorpay key
   - `RAZORPAY_KEY_SECRET`: Razorpay secret

## Domain Setup

1. **Custom Domain**
   - Add custom domain in Netlify
   - Configure DNS records
   - Enable HTTPS

2. **API Domain**
   - Use Render provided URL
   - Update frontend API calls

## Post-Deployment

1. **Test all features**
   - Donation flow
   - Volunteer registration
   - Admin dashboard
   - Mobile responsiveness

2. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Verify meta tags
   - Test social media previews

## Monitoring

- Set up Netlify analytics
- Monitor Render logs
- Set up uptime monitoring