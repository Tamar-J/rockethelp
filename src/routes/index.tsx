import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import { Loading } from '../components/Loading'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<FirebaseAuthTypes.User>()
  useEffect(() => {
    const subscriber =  auth()
      .onAuthStateChanged(response => {
        setUser(response)
        setIsLoading(false)
      })
  
    return subscriber
  }, [])

  if (isLoading) return <Loading/>

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}