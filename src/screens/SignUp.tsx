import { VStack, Heading, Text, HStack, Icon, useTheme, KeyboardAvoidingView, ScrollView as Container } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native';
import { Platform } from 'react-native';

import Logo from "../assets/logo_primary.svg";
import { Button, TextButton } from '../components/Button';
import { Input } from '../components/Input';

export default function SignUp() {
  const { colors } = useTheme()
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
            mb={4}
          />

          <Input 
            InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
            placeholder='Senha'
            secureTextEntry
            mb={4}
          />

          <Input 
            InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
            placeholder='Confirme a senha'
            secureTextEntry
            mb={6}
          />

          <Button title='Registrar' mb={4} />

          <HStack 
            w='full' 
            justifyContent='space-between' 
            alignItems='center'
            mb={4}
          >
            <Text color='gray.100' fontSize='sm'>Já tem uma conta?</Text>
            <TextButton title='Fazer Login'/>
          </HStack>

        </VStack>
      </Container>
    </KeyboardAvoidingView>
  )
}