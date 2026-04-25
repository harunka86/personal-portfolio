// Vercel Web Analytics initialization
import { inject } from './analytics-module.js';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto', // Automatically detect environment
  debug: false  // Disable debug logging in production
});
