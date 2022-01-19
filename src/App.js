import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store';

import HomeScreen from './pages/Home';
import NovaSenhaScreen from './pages/NovaSenha';
import BackupScreen from './pages/Backup';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="transparent" translucent barStyle="light-content"/>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
              <Stack.Screen name="NovaSenha" component={NovaSenhaScreen} options={{
                  title: "Nova Senha",
                  headerTransparent: true,
                  headerShadowVisible: false,
                  headerTintColor: "#fff",
              }} />
              <Stack.Screen name="Backup" component={BackupScreen} options={{
                  title: "Backup",
                  headerTransparent: true,
                  headerShadowVisible: false,
                  headerTintColor: "#fff",
              }} />
            </Stack.Navigator>
        </NavigationContainer>
        <Toast/>
      </PersistGate>
    </Provider>
  );
}

export default App;