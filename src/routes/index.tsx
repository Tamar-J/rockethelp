import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const { Navigator, Screen } = createStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}