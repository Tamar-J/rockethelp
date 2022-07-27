import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import SignIn from './src/screens/SignIn'
import { THEME } from './src/styles/theme'
import { Loading } from './src/components/Loading'

export default function App() {
const [fontsLoaded] = useFonts({
  Roboto_400Regular,
  Roboto_700Bold
})
  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <SignIn/> : <Loading/>}
    </NativeBaseProvider>
  )
}
