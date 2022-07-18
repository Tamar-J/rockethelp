import { VStack, Heading, Icon, useTheme } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'
import { useState } from 'react'

import Logo from '../assets/logo_primary.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export default function SignIn() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme()

  const handleSignIn = () => {
    console.log(name, password)
  }

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />
      <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input 
        placeholder='E-mail'
        onChangeText={setName}
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
      />
    </VStack>
  )
}