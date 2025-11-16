# 🚀 How to Deploy Neha's Street to Vercel

Vercel is a free, fast, and easy platform to host your website. Follow these steps to go live!

## Step 1: Prepare Your Files

Your website folder should contain all these files:
```
HTML/
├── index.html
├── menu.html
├── cart.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── menu.js
├── cart.js
├── contact.js
└── food-van.svg
```

## Step 2: Create a GitHub Account (if you don't have one)

1. Go to **https://github.com**
2. Click "Sign up"
3. Enter your email, create password
4. Verify your email
5. Complete your GitHub profile

## Step 3: Create a GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `nehass-street` (or any name)
3. Description: "Neha's Street - Chinese Food Van Website"
4. Choose "Public" (for free hosting)
5. Click "Create repository"

## Step 4: Upload Your Files to GitHub

### Using GitHub Web Interface (Easiest):

1. On your repository page, click "Add file" → "Upload files"
2. Drag and drop all your HTML, CSS, JS, and SVG files
3. At the bottom, click "Commit changes"
4. Choose "Create a new branch for this commit and start a pull request"
5. Click "Propose changes"
6. Click "Create pull request"
7. Click "Merge pull request" → "Confirm merge"

### Using Git Command Line (Advanced):

```bash
# Navigate to your HTML folder
cd "C:\Users\KULDEEP\OneDrive\Documents\HTML"

# Initialize git
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit - Neha's Street website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/nehass-street.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Create Vercel Account

1. Go to **https://vercel.com**
2. Click "Sign Up"
3. Click "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. Enter your email and complete profile

## Step 6: Deploy to Vercel

### Method 1: Import from GitHub (Recommended)

1. Go to **https://vercel.com/dashboard**
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Paste your GitHub repository URL or select from list
5. Click "Import"
6. Leave settings as default
7. Click "Deploy"
8. Wait for deployment to complete (usually 30-60 seconds)

### Method 2: Direct Upload

1. Go to **https://vercel.com/dashboard**
2. Click "Add New..." → "Project"
3. Scroll down and click "Deploy without Git"
4. Drag and drop your HTML folder
5. Click "Deploy"

## Step 7: Get Your Live Website URL

After deployment completes:
1. You'll see a "Congratulations" message
2. Your URL will be like: `https://nehass-street.vercel.app`
3. Click the URL to view your live website

## Step 8: Custom Domain (Optional)

To use your own domain name:

1. Go to your Vercel project settings
2. Click "Domains"
3. Enter your custom domain (e.g., `nehass-street.com`)
4. Follow the DNS setup instructions from your domain provider
5. Wait for DNS to propagate (can take 24-48 hours)

## ✅ Verification Checklist

After deployment, verify:
- ✅ Home page loads correctly
- ✅ All navigation links work
- ✅ Food van image displays
- ✅ Menu items appear
- ✅ Cart functionality works
- ✅ Contact form is functional
- ✅ Mobile responsive design works
- ✅ Animations are smooth

## 🔄 How to Update Your Website

### If You Make Changes:

1. Edit your files locally
2. Upload updated files to GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. Vercel automatically redeploys (takes 30-60 seconds)
4. Your live website updates automatically

### Using Git Desktop (Easy Alternative):

1. Download GitHub Desktop: https://desktop.github.com
2. Clone your repository
3. Make changes to your files
4. Commit and push to GitHub
5. Vercel auto-deploys

## 🎯 Popular Custom Domains

Where to buy domain names:
- **Namecheap** - https://namecheap.com (Cheap & reliable)
- **GoDaddy** - https://godaddy.com (Popular choice)
- **Google Domains** - https://domains.google (Simple & easy)
- **Hostinger** - https://hostinger.com (Good prices)

## ⚠️ Important Notes

- Your website is **publicly accessible** once deployed
- **HTTPS** is automatically enabled by Vercel (secure 🔒)
- Your website is **always up** (99.99% uptime)
- **No credit card required** for basic plan
- **Free SSL certificate** included

## 🆘 Troubleshooting

### Website shows "404 Not Found"
- Make sure `index.html` is in the root folder
- Redeploy from Vercel dashboard

### Images/SVG not showing
- Check file paths are relative (e.g., `food-van.svg` not `/food-van.svg`)
- Make sure all files are uploaded to GitHub

### Links not working
- Verify all HTML files are in the root folder
- Check file names match exactly (case-sensitive)

### Cart data lost after refresh
- This is normal - localStorage is browser-specific
- To persist data permanently, you need a backend database

## 📚 Additional Resources

- Vercel Documentation: https://vercel.com/docs
- GitHub Help: https://docs.github.com
- How to use Git: https://git-scm.com/doc
- Custom domains on Vercel: https://vercel.com/docs/concepts/projects/domains/add-a-domain

## 🎉 You're Live!

Congratulations! Your Neha's Street website is now live on the internet! 🚐

**Share your URL:**
- Send to friends and family
- Use on social media
- Add to business cards
- Share on Google My Business

---

**Need Help?**
- Vercel Support: https://vercel.com/support
- GitHub Support: https://support.github.com

**Last Updated:** November 16, 2025
