import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/SignIn'

import SignUp from '../screens/SignUp'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='signin' component={SignIn} />
      <Screen name='signup' component={SignUp} />
    </Navigator>
  )
}