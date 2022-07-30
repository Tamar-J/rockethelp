import { KeyboardAvoidingView, VStack } from 'native-base';
import { Platform } from 'react-native';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flexGrow={1}
      bg='gray.600'
    >
      <Header />
      <VStack flex={1} px={6}>
        <Input 
          placeholder='Número do Patrimônio'
          keyboardType='numeric'
          my={4}
        />
        
        <Input 
          placeholder='Descrição do Problema'
          flex={1}
          multiline
          textAlignVertical='top'
          autoCapitalize='sentences'
          keyboardType='default'
        />

        <Button title='Cadastrar' my={6} />
      </VStack>
    </KeyboardAvoidingView>
  );
}
