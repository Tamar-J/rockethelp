import { VStack, Heading, Icon, useTheme } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'
import { useState } from 'react'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

import Logo from '../assets/logo_primary.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme()

  const handleSignUp = () => {
    if (!email || !password) {
      return Alert.alert('Registrar', 'Informe e-mail e senha')
    }
    
    setIsLoading(true)
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(newUser => {
      console.log(newUser)
    })
    .catch(error => {
      console.log(error)
      setIsLoading(false)
    })
  }

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />
      <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
        Crie sua conta
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

      <Input 
        placeholder='Senha' 
        onChangeText={setPassword}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
        mb={8}
        secureTextEntry
      />

      <Button 
        title="Registar" 
        w='full' 
        onPress={handleSignUp}
        isLoading={isLoading}
      />
    </VStack>
  )
}