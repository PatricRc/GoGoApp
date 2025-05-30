module.exports = {
  name: "TravelIA",
  slug: "travelai-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: [
    "**/*"
  ],
    ios: {    supportsTablet: true,    config: {      googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY    }  },  android: {    adaptiveIcon: {      foregroundImage: "./assets/images/adaptive-icon.png",      backgroundColor: "#ffffff"    },    config: {      googleMaps: {        apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY      }    }  },
  web: {
    favicon: "./assets/images/favicon.png"
  },
  scheme: "travelai",
  plugins: [
    "expo-router"
  ]
}; 