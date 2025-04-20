
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.82034770a46b4a2f84ee791a56cc898c',
  appName: 'green-home-guide-app',
  webDir: 'dist',
  server: {
    url: 'https://82034770-a46b-4a2f-84ee-791a56cc898c.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreKeyPassword: null,
      releaseType: 'APK'
    }
  }
};

export default config;
