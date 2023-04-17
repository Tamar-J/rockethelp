import { Icon, KeyboardAvoidingView, Pressable, useTheme, VStack } from 'native-base';
import { Alert, Platform, Vibration } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'
import firestore from '@react-native-firebase/firestore'

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useEffect, useState } from 'react';
import { Barcode } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

export function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [hasPermission, setHasPermission] = useState<boolean>(null);
  const [scanned, setScanned] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [patrimony, setPatrimony] = useState('')
  const [description, setDescription] = useState('')

  const { colors } = useTheme()
  const { goBack } = useNavigation()
  const ordersCollection = firestore().collection('orders')

  const handleBarCodeScanned = ({ data }) => {
    Vibration.vibrate(50)
    setScanned(true)
    setShowScanner(false)
    setPatrimony(data)
  };

  const handleShowScanner = () => {
    setScanned(false)
    if (hasPermission) setShowScanner(!showScanner) 
    if (hasPermission === false) {
      Alert.alert('Câmera', 'Sem permissão para acessar a câmera')
    }
  }

  const handleNewOrderRegister = () => {
    if (patrimony === '' || description === '') {
      return Alert.alert('Registrar', 'Preencha todos os campos.')
    }

    setIsLoading(true)

    ordersCollection
      .add({
        patrimony,
        description,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        Alert.alert('Solicitação', 'Solicitação registrada com sucesso.')
        goBack()
      })
      .catch(error => {
        setIsLoading(false)
        Alert.alert('Solicitação', 'Não foi possível registrada sua solicitação.')
      })
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    }    
    getBarCodeScannerPermissions();  
  }, []);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flexGrow={1}
      bg='gray.600'
    >
      <Header />
      {
        showScanner && hasPermission 
        ? <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
          />
        : <VStack flex={1} px={6}>
            <Input 
              placeholder='Número do Patrimônio'
              InputRightElement={
                <Pressable onPress={handleShowScanner} > 
                  {({isPressed}) => (
                    <Icon 
                      as={<Barcode color={ isPressed ? colors.primary[600] : colors.primary[700]}/> }
                      mr={4} 
                    />
                  )}
                </Pressable>
              }
              my={4}
              value={patrimony}
              onChangeText={setPatrimony}
            />

            <Input 
              placeholder='Descrição do Problema'
              flex={1}
              multiline
              textAlignVertical='top'
              autoCapitalize='sentences'
              keyboardType='default'
              value={description}
              onChangeText={setDescription}
            />

            <Button title='Cadastrar' my={6} onPress={handleNewOrderRegister} isLoading={isLoading}/>
          </VStack>
      }
    </KeyboardAvoidingView>
  );
}
