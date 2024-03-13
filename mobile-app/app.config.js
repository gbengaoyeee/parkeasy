// first get variabele
const APP_ENVIRONMENT = process.env.APP_VARIANT; // let's declare variable to store the Google service file.
let AndroidGoogleServicesFile = "./google-services-dev.json"; // while developing this file will be the default.

// then checking which env we are, and based on that choosing
// the right Google services file to add
if (APP_ENVIRONMENT === "production") {
  AndroidGoogleServicesFile = "./google-services-prod.json";
}

export default {
  expo: {
    name: "Parkeasy",
    slug: "parkeasy",
    description: "A parking management app",
    version: "1.0.2",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.gbengaoyeee.parkeasy",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      googleServicesFile: AndroidGoogleServicesFile,
      package: "com.gbengaoyeee.parkeasy",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router", 
      "expo-font", 
      "expo-localization", 
      "@react-native-firebase/app", 
      "@react-native-firebase/auth", 
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ]
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "fca745d5-2e89-43d3-b187-8208f9ee13eb",
      },
    },
  },
};
