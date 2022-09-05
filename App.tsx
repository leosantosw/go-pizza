import React from 'react';
import theme from './src/theme';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';

import { SignIn } from '@screens/SignIn';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export function App() {

  const [fontsLoaded] = useFonts({
    'DMSans_400Regular': require('./src/assets/fonts/DMSans_400Regular.ttf'),
    'DMSerifDisplay_400Regular': require('./src/assets/fonts/DMSerifDisplay_400Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <SignIn />
    </ThemeProvider>
  )
}