# GetGemmed App

## Inspiration 
Love tooth gems so no surprise that this book 'Tooth Gem Style' caught my eye the other day.
Having friends in the tooth gem industry it got me thinking about how both them as a business owner and us as customers have a hard time recommending or deciding 
(me a very much indecisive customer) on what tooth gem styles would suit us. I don't enjoy committing to something that semi-permanent if I'm not 100% sure on the style.

![IMG_9466](https://github.com/user-attachments/assets/697e70cc-b678-47ec-a399-2beb9741e7b0)

SO here's my solution for all the indecisive tooth gem lovers like myself who, and to all the tooth gem business owners who are tired of indecisive customers lol.

The **Get Gemmed App** is a mobile application that allows users to preview different tooth gem designs using their device's front camera. Built with React Native in Expo's bare workflow, it integrates the react-native-vision-camera library for advanced camera functionality. This app is designed to help users visualise how tooth gems would look in real time, with planned features like facial landmark detection to overlay designs. It represents a first-time exploration of native iOS configurations, including working with Xcode, Podfiles, and testing on a physical iPhone

This project is my first experience working with Expo's bare workflow, iOS-specific configurations, using Xcode, and the `react-native-vision-camera` library. 

---

## Features
- **Camera Integration**: Uses the device's front camera to capture a live preview.
- **React Native Vision Camera**: Implements advanced camera features and frame processing.
- **Real-Time Face Detection**: (Planned feature) Detects facial landmarks to overlay tooth gem designs.

---

## Learning Highlights
This project marked a significant milestone in my development journey, as it was my first time:
- Working with **Expo Bare Workflow**:
  - Setting up iOS-specific files like `Podfile`.
  - Using `expo prebuild` to generate the necessary native configurations.
- Navigating and configuring iOS project files, including:
  - **Info.plist**: Adding camera permission descriptions.
  - Understanding the role of **CocoaPods** and managing dependencies with `pod install`.
- Using **Xcode** to:
  - Build and test the app directly on my iPhone.
  - Debug issues using Xcode logs.
- Implementing the `react-native-vision-camera` library:
  - Following its documentation to integrate the camera and troubleshoot issues.
  - Configuring permissions and frame processors.

---
### Challenges
- Working with the Bare Workflow::
  - Understanding the differences between managed and bare workflows.
  - Managing native files like Podfile and Info.plist.
- Using react-native-vision-camera:
  - Navigating the documentation to set up camera permissions and resolve device-related issues.
  - Debugging undefined camera devices using logs and Xcode.
- Testing on a Physical Device:
  - Learning how to build and run the app directly on my iPhone using Xcode.
  - Ensuring proper permissions and network connectivity for Metro bundler.

---
### What's next 

- Continue in debugging the react native camera bug
- Implement real-time facial landmark detection to overlay tooth gem designs.
- Add a user-friendly interface for selecting and previewing different designs.

---
## Installation

### Prerequisites
- **Node.js** and **npm** installed.
- Xcode installed on your Mac.
- A physical iPhone for testing (the iOS simulator does not support camera functionality).

### Steps
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd GetGemmedApp
   npm install
   cd ios && pod install && cd ..
   npx expo run:ios


