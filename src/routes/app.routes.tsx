import { createStackNavigator } from '@react-navigation/stack'
import { Animated } from 'react-native'

import { Details } from '../screens/Details'
import { Home } from '../screens/Home'
import { Register } from '../screens/Register'

const { Navigator, Screen } = createStackNavigator()

type TransitionSpec = {
  animation: 'spring' | 'timing'
  config: Omit<Animated.SpringAnimationConfig, 'toValue' | keyof Animated.AnimationConfig>
}

export function AppRoutes() {
  const config: TransitionSpec = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01
    }
  }

  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: { open: config, close: config }
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='Register' component={Register} />
      <Screen name='Details' component={Details} />
    </Navigator>
  )
}