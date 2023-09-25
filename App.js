import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/ui/splashScreen/splashscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import HomeScreen from './src/ui/homeScreen/homeScreen';
import { NativeBaseProvider } from 'native-base';
import DetailHomeComponent from './src/ui/detailHomepage/detailHomeComponent';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
        />
         <Stack.Screen
          name="detailHome"
          component={DetailHomeComponent}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

