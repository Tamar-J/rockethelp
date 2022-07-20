import { useState } from 'react';
import { VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [patrimony, setPatrimony] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

  const handleNewOrderRegister = () => {
    if (!patrimony || !description) {
      return Alert.alert('Registrar', 'Preencha todos os campos.')
    }

    setIsLoading(true)

    firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        Alert.alert('Solicitação', 'Solicitação registrada com sucesso.')
        navigation.goBack()
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
        Alert.alert('Solicitação', 'Não foi possível registrada o pedido.')
      })
  }

  return (
    <VStack flex={1} p={6} bg='gray.600'>
      <Header title='Solicitação'/>

      <Input
        placeholder='Número do patrimônio'
        mt={4}
        onChangeText={setPatrimony}
      />
      
      <Input
        placeholder='Descrição do problema'
        flex={1}
        mt={5}
        multiline
        textAlignVertical='top'
        onChangeText={setDescription}

      />
      <Button
        title='Cadastrar'
        mt={5}
        isLoading={isLoading}
        onPress={handleNewOrderRegister}
      />
    </VStack>
  );
}