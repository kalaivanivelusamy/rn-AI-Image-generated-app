# AI Image Generator App 🎨

A powerful React Native mobile application that generates AI images using Hugging Face's state-of-the-art models. Transform your imagination into stunning visuals with just a text prompt!

## ✨ Features

- **AI-Powered Image Generation**: Generate high-quality images using multiple AI models
- **Multiple AI Models**: Choose from popular models including:
  - FLUX.1-dev by Black Forest Labs
  - Stable Diffusion 3.5L
  - Stable Diffusion XL
  - Stable Diffusion v1.5
- **Customizable Aspect Ratios**: Generate images in various dimensions (1:1, 4:5, 16:9, 3:2, 2:3)
- **Smart Prompt Suggestions**: Get inspired with 20+ creative example prompts
- **Download & Share**: Save generated images to your device gallery or share them instantly
- **Responsive UI**: Clean, intuitive interface with loading indicators and haptic feedback

## 📱 Screenshots

<p align="center">
  <em>Add your app screenshots here</em>
</p>

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (or Expo Go app on your device)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/kalaivanivelusamy/rn-AI-Image-generated-app.git
   cd rn-AI-Image-generated-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up your Hugging Face API key
   - Sign up at [Hugging Face](https://huggingface.co/)
   - Generate an API token from your account settings
   - Replace the `API_KEY` in `app/index.js` with your token

4. Start the development server
   ```bash
   npx expo start
   ```

5. Run the app
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

## 🎯 How to Use

1. **Enter a Prompt**: Describe the image you want to generate in the text field
2. **Get Inspired**: Tap the lightbulb icon for random creative prompts
3. **Select a Model**: Choose your preferred AI model from the dropdown
4. **Choose Aspect Ratio**: Select the desired image dimensions
5. **Generate**: Tap the generate button and wait for your AI-created masterpiece
6. **Download or Share**: Use the download button to save or share button to send your creation

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **UI Components**: React Native core components
- **Styling**: StyleSheet API with custom color system
- **State Management**: React Hooks (useState)
- **AI Integration**: Hugging Face Inference API
- **Image Handling**: expo-file-system, expo-media-library, expo-sharing
- **Utilities**: 
  - moment (date formatting)
  - react-native-element-dropdown (dropdowns)
  - expo-haptics (haptic feedback)

## 📦 Key Dependencies

```json
{
  "expo": "~54.0.26",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo-router": "~6.0.16",
  "expo-file-system": "~19.0.20",
  "expo-media-library": "~18.2.1",
  "expo-sharing": "~14.0.8",
  "react-native-element-dropdown": "^2.12.4",
  "moment": "^2.30.1"
}
```

## 📂 Project Structure

```
rn-AI-Image-generated-app/
├── app/
│   ├── _layout.js          # Root layout configuration
│   └── index.js            # Main app screen with image generation
├── assets/
│   └── images/             # App icons and images
├── utils/
│   ├── Colors.js           # Color palette
│   └── helper.js           # Helper functions (dimension calculations)
├── app.json                # Expo configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎨 Available Models

| Model | Provider | Description |
|-------|----------|-------------|
| FLUX.1-dev | Black Forest Labs | Latest high-quality image generation |
| Stable Diffusion 3.5L | Stability AI | Large model with enhanced details |
| Stable Diffusion XL | Stability AI | High-resolution image generation |
| Stable Diffusion v1.5 | RunwayML | Classic stable model |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):
```
HUGGING_FACE_API_KEY=your_api_key_here
```

### Permissions

The app requires the following permissions:
- **Media Library**: To save generated images to device gallery
- **File System**: To manage temporary image files

## 📱 Available Scripts

```bash
npm start          # Start the Expo development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web browser
npm run lint       # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kalaivani Velusamy**
- GitHub: [@kalaivanivelusamy](https://github.com/kalaivanivelusamy)

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for providing the AI model APIs
- [Expo](https://expo.dev/) for the amazing React Native framework
- [Stability AI](https://stability.ai/) for Stable Diffusion models
- [Black Forest Labs](https://blackforestlabs.ai/) for FLUX models

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the [Expo documentation](https://docs.expo.dev/)
- Visit [Hugging Face documentation](https://huggingface.co/docs)

## 🔮 Future Enhancements

- [ ] Add image history/gallery
- [ ] Implement negative prompts
- [ ] Add more customization options (steps, guidance scale)
- [ ] Support for image-to-image generation
- [ ] Batch image generation
- [ ] Favorite prompts feature
- [ ] Dark mode support

---

Made with ❤️ using React Native and Expo
# rn-AI-Image-generated-app
