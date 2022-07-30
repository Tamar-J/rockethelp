import { createStackNavigator } from '@react-navigation/stack'

import { Details } from '../screens/Details'
import { Home } from '../screens/Home'
import { Register } from '../screens/Register'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal'
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='Register' component={Register} />
      <Screen name='Details' component={Details} />
    </Navigator>
  )
}