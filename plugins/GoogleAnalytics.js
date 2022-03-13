import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
require('dotenv').config();

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

if (process.env.NODE_ENV === 'production') {
  const app = initializeApp(FIREBASE_CONFIG);
  getAnalytics(app);
}
