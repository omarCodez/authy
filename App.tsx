/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {AuthProvider} from './src/context';
import {LandingScreen, ProfileScreen} from './src/screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  prefetchConfiguration,
  type AuthConfiguration,
} from 'react-native-app-auth';

export const config: AuthConfiguration = {
  issuer: 'https://id-sandbox.cashtoken.africa',
  clientId: 'wprQYMZBqqx-dgszFUfQG',
  redirectUrl: 'https://id-sandbox.cashtoken.africa/callback',
  scopes: ['openid', 'email', 'profile'],
  serviceConfiguration: {
    authorizationEndpoint:
      'https://id-sandbox.cashtoken.africa/oauth/authorize',
    tokenEndpoint: 'https://id-sandbox.cashtoken.africa/oauth/token',
  },
};

const Stack = createStackNavigator();

prefetchConfiguration(config);

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
});

export default App;
