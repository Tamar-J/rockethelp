import { VStack, Heading, Icon, useTheme } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'
import { useState } from 'react'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

import Logo from '../assets/logo_primary.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme()

  const handleSignIn = () => {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha')
    }
    
    setIsLoading(true)
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      //console.log(response)
    })
    .catch(error => {
      console.log(error)
      setIsLoading(false)

      if (error.code === 'auth/invalid-email') {
        return Alert.alert('Entrar', 'E-mail inválido.')
      }

      if (error.code === 'auth/wrong-password') {
        return Alert.alert('Entrar', 'E-mail ou senha inválida.')
      }      
      
      if (error.code === 'auth/user-not-found') {
        return Alert.alert('Entrar', 'Usuário não cadastrado.')
      }

      return Alert.alert('Entrar', 'Algo deu errado.')

    })
  }

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />
      <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input 
        placeholder='E-mail'
        onChangeText={setEmail}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4} />}
        mb={4}
      />
      <Input 
        placeholder='Senha' 
        onChangeText={setPassword}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
        mb={8}
        secureTextEntry
      />

      <Button 
        title="Entrar" 
        w='full' 
        onPress={handleSignIn}
        isLoading={isLoading}
      />
    </VStack>
  )
}