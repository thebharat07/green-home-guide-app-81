
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.f80db6833d8942f59144c3186eeea373',
  appName: 'green-home-guide-app-81',
  webDir: 'dist',
  server: {
    url: 'https://f80db683-3d89-42f5-9144-c3186eeea373.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'upload',
      keystorePassword: 'your-keystore-password',
      keystoreKeyPassword: 'your-key-password',
      releaseType: 'AAB'  // Changed from APK to AAB (Android App Bundle) for Play Store
    }
  }
};

export default config;
