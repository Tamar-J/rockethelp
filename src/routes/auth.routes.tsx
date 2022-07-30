import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal'
      }}
    >
      <Screen name='SignIn' component={SignIn} />
      <Screen name='SignUp' component={SignUp} />
    </Navigator>
  )
}