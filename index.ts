// Polyfill atob and btoa for SheetJS / xlsx compatibility in React Native
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

if (!(global as any).btoa) {
  (global as any).btoa = (input: string = '') => {
    let output = '';
    for (let i = 0; i < input.length; i += 3) {
      const c1 = input.charCodeAt(i);
      const c2 = i + 1 < input.length ? input.charCodeAt(i + 1) : NaN;
      const c3 = i + 2 < input.length ? input.charCodeAt(i + 2) : NaN;
      
      const byte1 = c1 >> 2;
      const byte2 = ((c1 & 3) << 4) | (isNaN(c2) ? 0 : c2 >> 4);
      const byte3 = isNaN(c2) ? 64 : ((c2 & 15) << 2) | (isNaN(c3) ? 0 : c3 >> 6);
      const byte4 = isNaN(c3) ? 64 : c3 & 63;
      
      output += chars.charAt(byte1) + chars.charAt(byte2) + chars.charAt(byte3) + chars.charAt(byte4);
    }
    return output;
  };
}

if (!(global as any).atob) {
  (global as any).atob = (input: string = '') => {
    const str = input.replace(/=+$/, '');
    let output = '';
    if (str.length % 4 === 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      const idx = chars.indexOf(char);
      if (idx === -1) continue;
      bs = bc % 4 ? bs * 64 + idx : idx;
      if (bc++ % 4) {
        output += String.fromCharCode(255 & (bs >> (-2 * bc & 6)));
      }
    }
    return output;
  };
}

import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

