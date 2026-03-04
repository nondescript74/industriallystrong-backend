# Industrially Strong Backend

Backend services powering the Industrially Strong ecosystem.

This repository contains the server-side components used to support applications, experiments, and AI-enabled tools built under the Industrially Strong project.

## Purpose

The backend provides infrastructure for:

- API services used by Industrially Strong applications
- integrations with AI services and external data sources
- deployment and hosting configuration
- experimentation with new backend capabilities

## Deployment

The services are designed to be deployable across multiple modern platforms including:

- Railway
- Vercel
- other cloud hosting environments

Configuration files for specific platforms are included where relevant.

## Architecture

Typical flow:

Client Application → API Layer → Service Integrations → Data / AI Services

The repository serves as a flexible backend foundation for rapid experimentation and production deployment.

## 📁 Project Structure

```
industriallystrong-backend/
├── api/
│   └── index.js              # Main Express server
├── public/
│   ├── index.html            # Main landing page
│   ├── reczipes-support.html # Reczipes support page
│   ├── keeptrack-support.html # KeepTrack support page
│   ├── 404.html              # Error page
│   ├── styles.css            # Stylesheet
│   └── script.js             # Client-side JavaScript
├── vercel.json               # Vercel configuration
├── package.json              # Dependencies
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ installed
- Git installed

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Run locally:**
```bash
npm run dev
```

3. **Visit in browser:**
- Main site: http://localhost:3000
- Reczipes support: http://localhost:3000/reczipes/support
- KeepTrack support: http://localhost:3000/keeptrack/support
- API health check: http://localhost:3000/api/health

## 📦 Deploying to Vercel

### First-Time Setup

1. **Push to GitHub:**
```bash
cd industriallystrong-backend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/industriallystrong-backend.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings from `vercel.json`
   - Click "Deploy"

3. **Configure Domain:**
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain: `www.industriallystrong.com`
   - Follow Vercel's DNS instructions

### Subdomain Configuration

For subdomains like `reczipes.support.industriallystrong.com`:

**Option 1: Route via main domain (simpler)**
- Use paths: `www.industriallystrong.com/reczipes/support`
- Already configured in the app

**Option 2: Separate subdomains (advanced)**
- Add each subdomain in Vercel's domain settings
- Configure DNS CNAME records pointing to Vercel
- Update routes in `vercel.json` if needed

## 📧 Email Configuration

Currently, the contact form logs submissions. To forward emails to `headydiscy@gmail.com`:

### Option 1: Cloudflare Email Routing (Free & Recommended)

1. Move DNS to Cloudflare
2. Enable Email Routing
3. Create routing rules:
   - `info@industriallystrong.com` → `headydiscy@gmail.com`
   - `info@reczipes.industriallystrong.com` → `headydiscy@gmail.com`

### Option 2: SendGrid/Mailgun (Programmatic)

Add email service to `api/index.js`:

```javascript
// Install: npm install @sendgrid/mail
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// In /api/contact endpoint:
await sgMail.send({
  to: 'headydiscy@gmail.com',
  from: 'noreply@industriallystrong.com',
  subject: `Contact Form: ${app}`,
  text: message,
  html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
});
```

Then add `SENDGRID_API_KEY` to Vercel environment variables.

## 🍎 App Clips Configuration

### Update apple-app-site-association

Edit `api/index.js` and replace placeholder with your Team ID and App IDs:

```javascript
app.get('/.well-known/apple-app-site-association', (req, res) => {
  res.json({
    appclips: {
      apps: [
        "TEAM_ID.com.industriallystrong.reczipes.Clip",
        "TEAM_ID.com.industriallystrong.keeptrack.Clip"
      ]
    },
    webcredentials: {
      apps: [
        "TEAM_ID.com.industriallystrong.reczipes",
        "TEAM_ID.com.industriallystrong.keeptrack"
      ]
    }
  });
});
```

### In Xcode

1. Add Associated Domains capability
2. Add domain: `appclips:www.industriallystrong.com`
3. Configure App Clip experiences in App Store Connect
4. Link to URLs like: `https://www.industriallystrong.com/reczipes/clip/recipe/123`

## 🔌 API Endpoints

### Health Check
```
GET /api/health
Response: { status: "ok", timestamp: "...", service: "..." }
```

### App Version Info
```
GET /api/reczipes/version
GET /api/keeptrack/version
Response: { version: "1.0.0", minIOSVersion: "17.0", features: [...] }
```

### Contact Form
```
POST /api/contact
Body: { name, email, message, app }
Response: { success: true, message: "..." }
```

## 🔐 Environment Variables

Add these in Vercel dashboard (Settings > Environment Variables):

- `NODE_ENV=production`
- `SENDGRID_API_KEY=your_key_here` (if using SendGrid)

## 🧪 Testing

Test API endpoints:
```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/.well-known/apple-app-site-association
```

## 📝 Customization

### Add new pages
1. Create HTML file in `public/`
2. Add route in `api/index.js`
3. Update navigation in all HTML files

### Add new API endpoints
Add routes in `api/index.js` under the "API ENDPOINTS" section

### Modify styling
Edit `public/styles.css`

## 🚨 Troubleshooting

**Forms not submitting:**
- Check browser console for errors
- Verify API endpoint is accessible
- Check Vercel function logs

**404 errors:**
- Verify `vercel.json` routing configuration
- Check file paths match routes in `api/index.js`

**Email not forwarding:**
- Implement email service (see Email Configuration section)
- Add API keys to Vercel environment variables

## 📄 License

MIT License - feel free to use for your projects

## 🤝 Support

- Reczipes: info@reczipes.industriallystrong.com
- KeepTrack: info@keeptrack.industriallystrong.com
- General: info@industriallystrong.com
