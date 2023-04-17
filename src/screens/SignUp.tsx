import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { VStack, Heading, Text, HStack, Icon, useTheme, KeyboardAvoidingView, ScrollView as Container } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native';
import { useState } from 'react';
import { Alert, Platform } from 'react-native';

import Logo from "../assets/logo_primary.svg";
import { Button, TextButton } from '../components/Button';
import { Input } from '../components/Input';

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { colors } = useTheme()
  const { goBack } = useNavigation()

  const handleSignIn = () => {
    goBack()
  }

  const handleSignUp = () => {
    if (email === '' || password === '') {
      return Alert.alert('Criar Conta', 'Informe e-mail e senha')
    }
    if (password !== passwordConfirmation) {
      return Alert.alert('Criar Conta', 'Senhas diferentes')
    }

    setIsLoading(true)
    
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Criar Conta', 'E-mail inválido.')
        }
        setIsLoading(false)
      })
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
            Crie sua conta
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
            placeholder='Senha'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            mb={4}
          />

          <Input 
            InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
            placeholder='Confirme a senha'
            secureTextEntry
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            mb={6}
          />

          <Button title='Registrar' mb={4} onPress={handleSignUp} isLoading={isLoading}/>

          <HStack 
            w='full' 
            justifyContent='space-between' 
            alignItems='center'
            mb={4}
          >
            <Text color='gray.100' fontSize='sm'>Já tem uma conta?</Text>
            <TextButton title='Fazer Login' onPress={handleSignIn} />
          </HStack>

        </VStack>
      </Container>
    </KeyboardAvoidingView>
  )
}