#!/usr/bin/env node

// Simple development server
const app = require('./api/index.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════╗
║   Industrially Strong Backend - Development       ║
╚═══════════════════════════════════════════════════╝

🚀 Server running at: http://localhost:${PORT}

📄 Pages:
   • Main site:     http://localhost:${PORT}/
   • Reczipes:      http://localhost:${PORT}/reczipes/support
   • KeepTrack:     http://localhost:${PORT}/keeptrack/support

🔌 API Endpoints:
   • Health:        http://localhost:${PORT}/api/health
   • Reczipes API:  http://localhost:${PORT}/api/reczipes/version
   • KeepTrack API: http://localhost:${PORT}/api/keeptrack/version
   • App Clips:     http://localhost:${PORT}/.well-known/apple-app-site-association

Press Ctrl+C to stop
  `);
});
