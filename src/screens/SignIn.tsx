import { VStack, Heading, Input, Button, Text, HStack, Icon, Pressable, useTheme, KeyboardAvoidingView, ScrollView as Container } from 'native-base'
import { Envelope, Eye, EyeClosed, Key } from 'phosphor-react-native';
import { Platform } from 'react-native';

import Logo from "../assets/logo_primary.svg";

export default function SignIn() {
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
            Acesse sua conta
          </Heading>
          <Input
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4} />}
            placeholder='E-mail'
            placeholderTextColor='gray.300'
            h={14}
            rounded={6}
            backgroundColor='gray.700'
            color='white'
            fontSize='md'
            fontFamily='body'
            autoCapitalize='none'
            _focus={{
              borderWidth: 1,
              borderColor: '#FFBC70'
            }}
            keyboardType='email-address'
            borderWidth={0}
            mb={4}
          />
          {/* <VStack w='full' pl={4} mb={1} backgroundColor='red'>
            <Text color='#F75A68' fontSize='xs'>E-mail inválido</Text>
          </VStack> */}

          <Input 
            InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
            InputRightElement={
              <Icon as={<Eye color={colors.gray[300]}/>
            } 
            mr={4} />}
            secureTextEntry
            placeholder='Senha'
            placeholderTextColor='gray.300'
            backgroundColor='gray.700'
            color='white'
            h={14}
            rounded={6}
            fontSize='md'
            fontFamily='body'
            autoCapitalize='none'
            _focus={{
              borderWidth: 1,
              borderColor: '#FFBC70'
            }}
            borderWidth={0}
            mb={6}
          />

          <Button 
            w='full' 
            h={14} 
            bg='secondary.700' 
            mb={4}
            rounded={6}
            _pressed={{
              background: '#FFBC70'
            }}
          >
            <Heading color='white' fontSize='sm'>Entrar</Heading>
          </Button>

          <HStack 
            w='full' 
            justifyContent='space-between' 
            alignItems='center'
          >
            <Text color='gray.100' fontSize='sm'>Precisa de uma nova conta?</Text>
            <Pressable>
              {({isPressed}) => (
                <Text color={isPressed ? '#5689E5' : 'primary.700' } fontSize='sm'>
                  Criar uma Conta
                </Text>
              )}
            </Pressable>
          </HStack>

        </VStack>
      </Container>
    </KeyboardAvoidingView>
  )
}