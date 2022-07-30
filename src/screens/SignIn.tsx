import { useNavigation } from '@react-navigation/native';
import { VStack, Heading, Text, HStack, Icon, useTheme, KeyboardAvoidingView, ScrollView as Container } from 'native-base'
import { Envelope, Eye, EyeClosed, Key } from 'phosphor-react-native';
import { Platform } from 'react-native';

import Logo from "../assets/logo_primary.svg";
import { Button, TextButton } from '../components/Button';
import { Input } from '../components/Input';

export default function SignIn() {
  const { navigate } = useNavigation()
  const { colors } = useTheme()

  const handleLogin = () => {

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
            mb={4}
          />

          <Input 
            InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
            InputRightElement={
              <Icon as={<Eye color={colors.gray[300]}/> } mr={4} />
            }
            placeholder='Senha'
            secureTextEntry
            mb={6}
          />

          <Button title='Entrar' mb={4} onPress={handleLogin}/>

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