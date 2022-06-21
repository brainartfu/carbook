import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme, ChevronUpIcon } from 'native-base';

const Stack = createNativeStackNavigator();

import ListPage from './src/screens/ListPage';
import DetailPage from './src/screens/DetailPage';

export default function App() {
  const theme = extendTheme({
    components: {
      Text: {
        baseStyle: {
          color: '#2c2c2c',
        },
      },
      Button: {
        baseStyle: {
          // fontFamily: 'Poppins-Medium',
          // color: 'red'
        },
        defaultProps: {
          // colorScheme: 'lightgray',
        },
      },
    },
    colors: {
      // Add new color
      primary: {
        50: '#fff',
        100: '#fff',
        200: '#fff',
        300: '#fff',
        400: '#fff',
        500: '#188EEA',
        600: '#354C4B',
        700: '#1177C6',
        800: '#fff',
        900: '#fff',
      },
      secondary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      whites: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#ffffff',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      default: {
        50: '#ffffff',
        100: '#ffffff',
        200: '#ffffff',
        300: '#ffffff',
        400: '#ffffff',
        500: '#F2F5F9',
        600: '#ffffff',
        700: '#DCDFE2',
        800: '#ffffff',
        900: '#ffffff',
      },
      warning: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#FC6A20',
        600: '#007AB8',
        700: '#DC5511',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },

    fontConfig: {
      Poppins: {
        100: {
          normal: 'Poppins-Light',
          italic: 'Poppins-LightItalic',
        },
        200: {
          normal: 'Poppins-Light',
          italic: 'Poppins-LightItalic',
        },
        300: {
          normal: 'Poppins-Light',
          italic: 'Poppins-LightItalic',
        },
        400: {
          normal: 'Poppins-Regular',
          italic: 'Poppins-Italic',
        },
        500: {
          normal: 'Poppins-Medium',
        },
        600: {
          normal: 'Poppins-Medium',
          italic: 'Poppins-MediumItalic',
        },
        700: {
          normal: 'Poppins-Bold',
        },
        800: {
          normal: 'Poppins-Bold',
          italic: 'Poppins-BoldItalic',
        },
        900: {
          normal: 'Poppins-Bold',
          italic: 'Poppins-BoldItalic',
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
      mono: 'Poppins',
    },
    config: {
      // Changing initialColorMode to 'dark'
      // initialColorMode: 'dark',
    },
  });
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="ListPage"
            component={ListPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailPage"
            component={DetailPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
