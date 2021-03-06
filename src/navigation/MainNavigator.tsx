import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { RootStackParamList } from './navigator.interface'

// pages
import ColorModeDemo from '@src/pages/color-mode-demo'
import Home from '@src/pages/home'
import Login from '@src/pages/login'

import { useAppSelector } from '@src/store'

// 创建导航器
const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigator = () => {
  const isSignedIn = useAppSelector((state) => state.site.isSignedIn)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSignedIn ? 'Home' : 'Login'}>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: '首页' }}
            />
            <Stack.Screen
              name="ColorModeDemo"
              component={ColorModeDemo}
              options={{ title: '颜色模式demo' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: '登录' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
