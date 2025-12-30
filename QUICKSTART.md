# 🚀 Quick Start Guide - Industrially Strong Backend

## What You Have

A complete Node.js/Express backend ready to deploy to Vercel with:
- ✅ Main website (www.industriallystrong.com)
- ✅ Reczipes support page (/reczipes/support)
- ✅ KeepTrack support page (/keeptrack/support)
- ✅ API endpoints for your iOS apps
- ✅ App Clips support (apple-app-site-association)
- ✅ Contact forms (ready for email integration)
- ✅ Modern responsive design
- ✅ Complete GitHub & Vercel deployment setup

## 📁 Project Files

```
industriallystrong-backend/
├── api/index.js                 # Backend server
├── public/                      # Website files
│   ├── index.html              # Main page
│   ├── reczipes-support.html   # Reczipes support
│   ├── keeptrack-support.html  # KeepTrack support
│   ├── styles.css              # Styling
│   └── script.js               # Form handling
├── package.json                 # Dependencies
├── vercel.json                  # Vercel config
├── README.md                    # Full documentation
└── DEPLOYMENT.md                # Step-by-step deployment guide

```

## ⚡ 3-Step Deployment

### 1. Push to GitHub
```bash
cd industriallystrong-backend
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/industriallystrong-backend.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your repository
4. Click Deploy
5. Done! Your site is live at a Vercel URL

### 3. Add Custom Domain
1. In Vercel → Settings → Domains
2. Add: `www.industriallystrong.com`
3. Update your DNS (Vercel shows you how)
4. SSL certificate is automatic

## 📧 Email Forwarding Setup

**Recommended: Cloudflare Email Routing (Free)**

1. Transfer DNS to Cloudflare
2. Enable Email Routing
3. Create rules:
   - `info@industriallystrong.com` → `headydiscy@gmail.com`
   - `info@reczipes.industriallystrong.com` → `headydiscy@gmail.com`

Full instructions in `DEPLOYMENT.md`

## 🍎 App Clips Configuration

1. Get your Apple Team ID from developer.apple.com
2. Edit `api/index.js` - find the apple-app-site-association route
3. Replace placeholder with your Team ID
4. Push changes: `git push`
5. In Xcode: Add Associated Domains capability

## 🧪 Test Locally First

```bash
cd industriallystrong-backend
npm install
npm run dev
```

Visit: http://localhost:3000

## 📍 Your Pages Will Be:

- Main: `https://www.industriallystrong.com/`
- Reczipes: `https://www.industriallystrong.com/reczipes/support`
- KeepTrack: `https://www.industriallystrong.com/keeptrack/support`

## 🔌 API Endpoints for iOS Apps:

- `GET /api/health` - Health check
- `GET /api/reczipes/version` - Reczipes app info
- `GET /api/keeptrack/version` - KeepTrack app info
- `POST /api/contact` - Contact form submission
- `GET /.well-known/apple-app-site-association` - App Clips config

## 🎨 Customization

**Change colors/styling:**
Edit `public/styles.css` - look for CSS variables at the top

**Add new pages:**
1. Create HTML in `public/`
2. Add route in `api/index.js`
3. Update navigation

**Add new API endpoints:**
Add routes in `api/index.js` under "API ENDPOINTS" section

## 📚 Documentation

- `README.md` - Complete technical documentation
- `DEPLOYMENT.md` - Step-by-step deployment guide with screenshots
- Code comments - Throughout all files

## 🆘 Need Help?

1. Check `DEPLOYMENT.md` for detailed instructions
2. Check `README.md` for technical details
3. Check Vercel docs: vercel.com/docs
4. All files have comments explaining what they do

## ✅ What's Already Done

- [x] Express.js server configured
- [x] All HTML pages created
- [x] Responsive CSS styling
- [x] Form handling JavaScript
- [x] API endpoints structured
- [x] Vercel deployment config
- [x] Git ignore file
- [x] App Clips support ready
- [x] CORS enabled
- [x] Error handling
- [x] 404 page

## 🎯 What You Need to Do

1. Replace `YOUR_USERNAME` with your GitHub username
2. Push to GitHub
3. Deploy to Vercel
4. Add your custom domain
5. Set up email forwarding (Cloudflare recommended)
6. Update App Clips configuration with your Team ID
7. Test everything!

## 💡 Pro Tips

- Vercel auto-deploys on every `git push`
- Use `npm run dev` to test locally before pushing
- Check Vercel dashboard for deployment logs
- SSL is automatic - no configuration needed
- The site is fully responsive - works on all devices

---

**You're all set! Start with `DEPLOYMENT.md` for step-by-step instructions.** 🚀
