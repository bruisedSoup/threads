import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import React from 'react';
import { EncodeSans_400Regular } from '@expo-google-fonts/encode-sans';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'EncodeSans-Regular': EncodeSans_400Regular, 
  });

  React.useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="tabs" />
    </Stack>
  );
}