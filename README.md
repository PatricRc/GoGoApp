
# 🌍 TravelIA - Your Smart Travel Assistant

<p align="center">
  <img src="./assets/images/travel-logo.png" alt="TravelIA Logo" width="120" height="120">
</p>

<p align="center">
  <strong>Plan, Track, and Pack for your perfect trip with AI-powered assistance</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## 📱 About TravelIA

TravelIA is a comprehensive travel planning application that leverages the power of Google's Gemini AI to create personalized travel experiences. Whether you're planning a weekend getaway or a month-long adventure, TravelIA helps you organize every aspect of your journey.

Built with **Expo** and **React Native**, TravelIA works seamlessly across iOS, Android, and Web platforms, ensuring you can access your travel plans anywhere, anytime.

> **🚀 Live Demo**: [Try TravelIA Web](https://your-deployment-url.com) *(Coming Soon)*

## ✨ Features

### 🗺️ **AI-Powered Itinerary Generation**
- Generate personalized daily itineraries based on your destination, duration, and preferences
- Get detailed activity suggestions with estimated costs and locations
- Receive local insights including climate information and travel tips
- Smart routing with distance calculations and transportation recommendations

### 💰 **Smart Expense Tracking**
- Track expenses by category (Food, Lodging, Transportation, Activities, etc.)
- Link expenses to specific itineraries for better organization
- Visual spending summaries and budget monitoring
- Export expense reports for tax or reimbursement purposes

### 🎒 **Intelligent Packing Lists**
- AI-generated packing lists based on destination and planned activities
- Categorized items (Clothing, Electronics, Documents, etc.)
- Mark items as essential or custom additions
- Check off items as you pack with progress tracking

### 💬 **Travel Chat Assistant**
- Get instant answers to travel-related questions
- Contextual advice based on your current itinerary
- Local recommendations and cultural insights
- 24/7 AI assistance for peace of mind while traveling

### 👤 **Personal Travel Profile**
- Track your travel statistics and history
- View total destinations visited and money spent
- Manage your travel preferences and settings
- Secure API key management

## 🛠️ Tech Stack

- **Frontend**: React Native with Expo Router
- **UI Framework**: React Native with custom styling
- **Navigation**: Expo Router (file-based routing)
- **AI Integration**: Google Gemini AI API
- **Storage**: AsyncStorage (local data persistence)
- **Security**: Expo SecureStore for sensitive data
- **Icons**: Expo Vector Icons & Lucide React Native
- **Platform Support**: iOS, Android, and Web

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- Google Gemini AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/travelai-app.git
   cd travelai-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   > **Get your API key**: Visit [Google AI Studio](https://makersuite.google.com/) to obtain your free Gemini API key.

4. **Start the development server**
   ```bash
   # For mobile development
   npx expo start
   
   # For web development
   npx expo start --web
   
   # For specific platforms
   npx expo start --ios
   npx expo start --android
   ```

### 📱 Running on Different Platforms

- **iOS Simulator**: Press `i` in the terminal or scan QR code with Camera app
- **Android Emulator**: Press `a` in the terminal or scan QR code with Expo Go app
- **Web Browser**: Press `w` in the terminal or visit `http://localhost:8081`
- **Physical Device**: Install Expo Go app and scan the QR code

## 🌐 Deployment

### Web Deployment with EAS Hosting (Recommended)

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli@latest
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Build and Deploy**
   ```bash
   # Export web build
   npx expo export --platform web
   
   # Deploy to EAS Hosting
   eas deploy
   ```

### Alternative Deployment Options

<details>
<summary><strong>Vercel Deployment</strong></summary>

1. Install Vercel CLI: `npm install -g vercel@latest`
2. Create `vercel.json`:
   ```json
   {
     "buildCommand": "expo export -p web",
     "outputDirectory": "dist",
     "framework": null,
     "rewrites": [{"source": "/:path*", "destination": "/"}]
   }
   ```
3. Deploy: `vercel`
</details>

<details>
<summary><strong>Netlify Deployment</strong></summary>

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Create `public/_redirects`: `/*    /index.html   200`
3. Build and deploy:
   ```bash
   npx expo export -p web
   netlify deploy --dir dist --prod
   ```
</details>

### Mobile App Distribution

- **Development Builds**: Use Expo Development Build for testing
- **App Store Distribution**: Configure with `eas build` and `eas submit`
- **Internal Testing**: Use Expo's internal distribution tools

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini AI API key for itinerary generation and chat features | Yes |
| `EXPO_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key for map features (optional) | No |

### App Configuration

Key configuration files:
- `app.config.js` - Expo app configuration
- `metro.config.js` - Metro bundler configuration with platform-specific aliases
- `tsconfig.json` - TypeScript configuration

## 📂 Project Structure

```
travelai-app/
├── app/                          # Expo Router pages
│   ├── (tabs)/                   # Tab-based navigation
│   │   ├── index.tsx            # Home screen
│   │   ├── itinerary.tsx        # Itinerary management
│   │   ├── expenses.tsx         # Expense tracking
│   │   ├── packing.tsx          # Packing lists
│   │   ├── chat.tsx             # AI chat assistant
│   │   └── profile.tsx          # User profile
│   ├── itinerary/[id].tsx       # Dynamic itinerary details
│   ├── expenses/[id].tsx        # Expense details
│   └── packing/[id].tsx         # Packing list details
├── components/                   # Reusable components
│   ├── ui/                      # UI components
│   └── expenses/                # Feature-specific components
├── contexts/                    # React contexts
│   └── AppContext.tsx           # Global app state
├── services/                    # API and external services
│   ├── geminiService.ts         # Gemini AI integration
│   └── storageService.ts        # Local storage management
├── types/                       # TypeScript type definitions
├── utils/                       # Utility functions
├── assets/                      # Static assets
└── constants/                   # App constants
```

## 🤝 Contributing

We welcome contributions to TravelIA! Here's how you can help:

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Contribution Guidelines

- **Code Style**: Follow the existing code style and use TypeScript
- **Testing**: Test your changes on all platforms (iOS, Android, Web)
- **Documentation**: Update documentation for new features
- **Commits**: Use clear, descriptive commit messages

### Development Scripts

```bash
# Start development server
npm run start

# Run on specific platforms
npm run android
npm run ios
npm run web

# Build for web
npm run build:web

# Type checking
npx tsc --noEmit
```

## 🐛 Known Issues & Limitations

- **Maps on Web**: Limited map functionality on web platform (uses placeholder component)
- **API Keys**: Requires Google Gemini API key for full functionality
- **Offline Support**: Limited offline capabilities (roadmap item)

## 🗺️ Roadmap

- [ ] **Offline Mode**: Access saved itineraries without internet
- [ ] **Social Sharing**: Share travel plans with friends and family
- [ ] **Booking Integration**: Direct booking for flights, hotels, and activities
- [ ] **Augmented Reality**: AR features for landmark information
- [ ] **Multi-language Support**: Internationalization
- [ ] **Advanced Analytics**: Detailed travel statistics and insights

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for powering our intelligent features
- **Expo Team** for the amazing development platform
- **React Native Community** for the robust ecosystem
- **Contributors** who help make TravelIA better

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/travelai-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/travelai-app/discussions)
- **Email**: support@travelai-app.com

---

<p align="center">
  <strong>Happy Traveling! ✈️🌍</strong>
</p>

<p align="center">
  Made with ❤️ by the TravelIA Team
</p>
