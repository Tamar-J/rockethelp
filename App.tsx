import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

//import SignIn from './src/screens/SignIn'
//import SignUp from './src/screens/SignUp'
//import { Home } from './src/screens/Home'
//import { Details } from './src/screens/Details'
import { Register } from './src/screens/Register'

import { THEME } from './src/styles/theme'
import { Loading } from './src/components/Loading'

export default function App() {
const [fontsLoaded] = useFonts({
  Roboto_400Regular,
  Roboto_700Bold
})
  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Register/> : <Loading/>}
    </NativeBaseProvider>
  )
}
