const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// ===== ROUTES =====
// add leadership stories
app.get('/stories', (req, res) => res.sendFile(path.join(__dirname, '../public/stories.html')));
app.get('/stories/pmp', (req, res) => res.sendFile(path.join(__dirname, '../public/pmp-story.html')));
app.get('/stories/ozo', (req, res) => res.sendFile(path.join(__dirname, '../public/ozo-story.html')));

// Main domain - www.industriallystrong.com
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Reczipes support page
app.get('/reczipes/support', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/reczipes-support.html'));
});

// KeepTrack support page
app.get('/keeptrack/support', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/keeptrack-support.html'));
});

// App Clips - Apple App Site Association (required for App Clips)
app.get('/.well-known/apple-app-site-association', (req, res) => {
  res.json({
    appclips: {
      apps: [
        // Add your App IDs here when ready
        // "TEAMID.com.industriallystrong.reczipes.Clip"
      ]
    },
    webcredentials: {
      apps: [
        // Add your App IDs here for password autofill
        // "TEAMID.com.industriallystrong.reczipes"
      ]
    }
  });
});

// ===== API ENDPOINTS =====

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'industriallystrong-backend'
  });
});

// Reczipes API endpoints
app.get('/api/reczipes/version', (req, res) => {
  res.json({ 
    version: '1.0.0',
    minIOSVersion: '17.0',
    features: ['sync', 'ocr', 'fodmap-analysis']
  });
});

// KeepTrack API endpoints
app.get('/api/keeptrack/version', (req, res) => {
  res.json({ 
    version: '1.0.0',
    minIOSVersion: '17.0',
    features: ['tracking', 'analytics']
  });
});

// Email contact endpoint (placeholder - you'll need to add email service)
app.post('/api/contact', (req, res) => {
  const { name, email, message, app } = req.body;
  
  console.log('Contact form submission:', { name, email, app, message });
  
  // TODO: Implement email forwarding to headydiscy@gmail.com
  // Options: SendGrid, Mailgun, AWS SES, or Cloudflare Email Workers
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us. We will respond shortly.' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server (for local development)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
