import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// importing the css for tailwind
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider
      value={colorScheme === "light" ? DefaultTheme : DefaultTheme}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: "New Hymn Book",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="hymn" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
