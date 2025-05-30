// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add platform-specific file extensions
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Add platform-specific aliases
config.resolver.alias = {
  'react-native-maps': {
    web: path.resolve(__dirname, 'components/MapView.web.tsx'),
    default: 'react-native-maps',
  },
  'react-native-maps-directions': {
    web: path.resolve(__dirname, 'components/MapView.web.tsx'), // Use same web fallback
    default: 'react-native-maps-directions',
  },
};

// Configure resolver to handle platform-specific imports
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

module.exports = config; 