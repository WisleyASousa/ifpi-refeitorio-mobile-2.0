import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import btnMenu from "../assets/btnMenu.png";
import btnMenuWhite from "../assets/btnMenuWhite.png";

import btnAbas from "../assets/abas.png";
import btnAbasWhite from "../assets/abasWhite.png";

import { Home } from '../screens/Home'
import { NonAttendance } from '../screens/NonAttendance'
import { Profile } from '../screens/Profile'


import { Image } from 'expo-image'

import bgfooter from '../assets/bgfooter.png'
import { CookingPot, User } from 'phosphor-react-native'
import { Header } from '../components/Header';

const { Navigator, Screen } = createBottomTabNavigator()

const CustomTabBar = () => {
  return (
    <Image
      source={bgfooter}
      style={styles.tabBarBackground}
    />
  );
};

const styles = StyleSheet.create({
  tabBarBackground: {
    height: 50,
    position: 'absolute',
    // imagem sem fica esticada
    resizeMode: 'stretch',
    bottom: 0,
    left: 0,
    right: 0,
    
    // height: 90, // Ajuste a altura conforme necessário
  }
});

export function AppRoutes() {
  return (
    <>
      <Navigator
        // tabBar={props => <CustomTabBar {...props}  />}
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
            height: 100,
            backgroundColor: 'transparent',
          }

        }}
      >
        <Screen
          name='Perfil'
          component={Profile}
          options={{
            tabBarIcon: (({ size, color, focused }) => {
              if (focused) {
                return (
                  <ImageBackground source={btnAbas} imageStyle={{ resizeMode: 'contain', position: 'absolute', alignItems: 'center', justifyContent: 'center', height: 100, width: 130 }} style={{ left:15, height: 90, width: 130, position: 'absolute', alignItems: 'center', justifyContent: 'center', shadowColor: '#1EC072', shadowOpacity: 2, flexDirection: 'row', gap: 4 }}>
                    <User size={size} color='#E1E1E6' />
                    <Text style={{ color: '#E1E1E6', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>Perfil</Text>
                  </ImageBackground>
                )
              }
              return (
                <ImageBackground source={btnAbasWhite} imageStyle={{ resizeMode: 'contain', position: 'absolute', alignItems: 'center', justifyContent: 'center', height: 100, width: 130 }} style={{ left:15, height: 90, width: 130, position: 'absolute', alignItems: 'center', justifyContent: 'center', shadowColor: '#1EC072', shadowOpacity: 2, flexDirection: 'row', gap: 4 }}>
                  <User size={size} color='#1EC072' />
                  <Text style={{ color: '#1EC072', fontSize: 16 }}>Perfil</Text>
                </ImageBackground>
              )
            })
          }}
        />
        <Screen
          name='Cardápio'
          component={Home}
          options={{
            tabBarIcon: (({ size, color, focused }) => {
              if (focused) {
                return (
                  <ImageBackground source={btnMenu} imageStyle={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', height: 100 }} style={{ padding: 15, height: 90, position: 'absolute', alignItems: 'center', justifyContent: 'center', shadowColor: '#1EC072', shadowOpacity: 2 }}>
                    <CookingPot size={size} color='#E1E1E6' />
                    <Text style={{ color: '#E1E1E6', alignItems: 'center', justifyContent: 'center' }}>Cardápio</Text>
                  </ImageBackground>
                )
              }
              return (
                <ImageBackground source={btnMenuWhite} imageStyle={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', height: 100, }} style={{ borderStyle: 'solid', borderWidth: 1, borderRadius: 999, borderColor: '#1EC072', padding: 15, height: 90, position: 'absolute', alignItems: 'center', justifyContent: 'center', shadowColor: '#1EC072', shadowOpacity: 2 }}>
                  <CookingPot size={size} color='#1EC072' />
                  <Text style={{ color: '#1EC072' }}>Cardápio</Text>
                </ImageBackground>
              )
            })
          }}
        />
        <Screen
          name='Ausências'
          component={NonAttendance}
          options={{
            tabBarIcon: (({ size, color, focused }) => {
              if (focused) {
                return (
                  <ImageBackground source={btnAbas} imageStyle={{ resizeMode: 'contain', position: 'absolute', alignItems: 'center', justifyContent: 'center', height: 100, width: 130 }} style={{ right:15, height: 90, width: 130, position: 'absolute', alignItems: 'center', justifyContent: 'center', shadowColor: '#1EC072', shadowOpacity: 2 }}>
                    <Text style={{ color: '#E1E1E6', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>Ausência</Text>
                  </ImageBackground>
                )
              }
              return (
                <ImageBackground source={btnAbasWhite} imageStyle={{ resizeMode: 'contain', position: 'absolute', alignItems: 'center', justifyContent: 'center', height: 100, width: 130 }} style={{ right:15, height: 90, width: 130, position: 'absolute', alignItems: 'center', justifyContent: 'center', shadowColor: '#1EC072', shadowOpacity: 2, flexDirection: 'row' }}>
                  <Text style={{ color: '#1EC072', fontSize: 16 }}>Ausência</Text>
                </ImageBackground>
              )
            })
          }}
        />
      </Navigator>
      {/* <CustomTabBar /> */}

    </>

  )
}