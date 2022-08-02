import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { VStack, Heading, Text, HStack, Icon, useTheme, KeyboardAvoidingView, ScrollView as Container } from 'native-base'
import { Envelope, Eye, EyeClosed, Key } from 'phosphor-react-native';
import { useState } from 'react';
import { Alert, Platform } from 'react-native';

import Logo from "../assets/logo_primary.svg";
import { Button, TextButton } from '../components/Button';
import { Input } from '../components/Input';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { navigate } = useNavigation()
  const { colors } = useTheme()

  const handleLogin = () => {
    if (email === '' || password === '') {
      return Alert.alert('Entrar', 'Informe e-mail e senha')
    }
    setIsLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      //.then(response => console.log(response))
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

  const handleSignUp = () => {
    navigate('SignUp')
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flexGrow={1}
      bg='gray.600'
    >
      <Container>
        <VStack flex={1} alignItems='center' pt={24} px={8}>
          <Logo />
          <Heading color='gray.100' size='md' mt={20} mb={6}>
            Acesse sua conta
          </Heading>
          <Input
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4} />}
            placeholder='E-mail'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            mb={4}
          />

          <Input 
            InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
            InputRightElement={
              <Icon as={<Eye color={colors.gray[300]}/> } mr={4} />
            }
            placeholder='Senha'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mb={6}
          />

          <Button title='Entrar' mb={4} onPress={handleLogin} isLoading={isLoading}/>

          <HStack 
            w='full' 
            justifyContent='space-between' 
            alignItems='center'
          >
            <Text color='gray.100' fontSize='sm'>Precisa de uma nova conta?</Text>
            <TextButton title='Criar uma Conta' onPress={handleSignUp} />
          </HStack>

        </VStack>
      </Container>
    </KeyboardAvoidingView>
  )
}