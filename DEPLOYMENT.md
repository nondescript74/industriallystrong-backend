# 🚀 Deployment Guide

## Step 1: Push to GitHub

### Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it: `industriallystrong-backend`
4. Keep it **Public** (or Private if you prefer)
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

### Push Your Code

Open terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Industrially Strong backend"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/industriallystrong-backend.git

# Push to GitHub
git push -u origin main
```

**Your code is now on GitHub!** 🎉

---

## Step 2: Deploy to Vercel

### Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Import Your Project

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find `industriallystrong-backend` in the list
3. Click **"Import"**

### Configure Deployment

Vercel will auto-detect settings from your `vercel.json`:
- **Framework Preset:** Other
- **Build Command:** (leave empty)
- **Output Directory:** (leave empty)
- **Install Command:** `npm install`

Click **"Deploy"** and wait 1-2 minutes.

**Your site is now live!** 🌍

---

## Step 3: Add Custom Domain

### Get Your Vercel URL
After deployment, Vercel gives you a URL like:
`https://industriallystrong-backend.vercel.app`

### Add Custom Domain

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Enter: `www.industriallystrong.com`
4. Click **Add**

### Configure DNS

Vercel will show you DNS records to add. You'll need to:

**Option A: Point your domain's nameservers to Vercel (easiest)**
1. In your domain registrar (GoDaddy, Namecheap, etc.)
2. Change nameservers to Vercel's
3. Vercel manages everything

**Option B: Add DNS records manually**
Add these records at your domain registrar:

```
Type: A
Name: www
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### SSL Certificate
Vercel automatically provisions SSL certificates. Your site will be:
`https://www.industriallystrong.com` ✅

---

## Step 4: Configure Email Forwarding

### Using Cloudflare (Free & Recommended)

1. **Transfer DNS to Cloudflare:**
   - Go to [cloudflare.com](https://cloudflare.com)
   - Add your domain: `industriallystrong.com`
   - Update nameservers at your registrar

2. **Enable Email Routing:**
   - In Cloudflare dashboard → Email → Email Routing
   - Click "Get started"
   - Verify your domain

3. **Create Routing Rules:**
   ```
   info@industriallystrong.com → headydiscy@gmail.com
   info@reczipes.industriallystrong.com → headydiscy@gmail.com
   info@keeptrack.industriallystrong.com → headydiscy@gmail.com
   ```

4. **Verify Destination:**
   - Cloudflare sends verification email to `headydiscy@gmail.com`
   - Click the verification link

**Done!** Emails now forward automatically. 📧

---

## Step 5: Configure Subdomains (Optional)

If you want separate subdomains like `reczipes.support.industriallystrong.com`:

### In Vercel:
1. Go to Settings → Domains
2. Add domain: `reczipes.support.industriallystrong.com`
3. Repeat for: `keeptrack.support.industriallystrong.com`

### In DNS (Cloudflare or your registrar):
Add CNAME records:
```
Type: CNAME
Name: reczipes.support
Value: cname.vercel-dns.com

Type: CNAME
Name: keeptrack.support
Value: cname.vercel-dns.com
```

**Note:** The current setup uses paths (`/reczipes/support`) which works perfectly and is simpler!

---

## Step 6: Update App Clips Configuration

### Get Your Team ID
1. Open [developer.apple.com](https://developer.apple.com)
2. Go to Account → Membership
3. Copy your **Team ID** (10 characters)

### Update apple-app-site-association

In your local code, edit `api/index.js`:

```javascript
app.get('/.well-known/apple-app-site-association', (req, res) => {
  res.json({
    appclips: {
      apps: [
        "YOUR_TEAM_ID.com.industriallystrong.reczipes.Clip"
      ]
    },
    webcredentials: {
      apps: [
        "YOUR_TEAM_ID.com.industriallystrong.reczipes"
      ]
    }
  });
});
```

### Push Update

```bash
git add api/index.js
git commit -m "Configure App Clips with Team ID"
git push
```

Vercel auto-deploys your changes! ✨

### In Xcode

1. Select your target → **Signing & Capabilities**
2. Add **Associated Domains** capability
3. Add: `appclips:www.industriallystrong.com`

---

## 🎉 You're Done!

Your backend is now live at:
- Main: `https://www.industriallystrong.com`
- Reczipes: `https://www.industriallystrong.com/reczipes/support`
- KeepTrack: `https://www.industriallystrong.com/keeptrack/support`

### Next Steps:

1. **Test your site** - visit all pages
2. **Test API endpoints** - try the health check
3. **Test email forwarding** - send to info@industriallystrong.com
4. **Configure App Clips** - update with your Team ID
5. **Add to your iOS apps** - connect to the backend

---

## 🔄 Making Updates

When you want to update your site:

```bash
# Make your changes to files
# Then:
git add .
git commit -m "Description of changes"
git push
```

Vercel automatically redeploys in ~1 minute!

---

## 📊 Monitoring

- **Vercel Dashboard:** View deployments, logs, analytics
- **Vercel CLI:** `npm i -g vercel` for command-line deploys
- **GitHub:** All your code is version controlled

---

## ❓ Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Cloudflare Email: [developers.cloudflare.com/email-routing](https://developers.cloudflare.com/email-routing)
- Apple App Clips: [developer.apple.com/app-clips](https://developer.apple.com/app-clips)
