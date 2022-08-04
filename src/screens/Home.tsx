import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { VStack, FlatList, HStack, IconButton, useTheme, Heading, Text, Center } from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import Logo from '../assets/logo_secondary.svg' 
import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Loading } from '../components/Loading';
import { Order, OrderProps } from '../components/Order';
import { dateFormat } from '../utils/firestoreDateFormat';
import { OrderDetails } from './Details';


export function Home() {
  const { colors } = useTheme()
  const { navigate } = useNavigation()

  const [typeSelected, setTypeSelected] = useState('open')
  const [isLoading, setIsLoading] = useState(false)
  const [orders, setOrders] = useState<OrderProps[]>([])

  const handleSignOut = () => {
    auth()
      .signOut()
      .catch(error => Alert.alert('Sair', 'Não foi possível deslogar.'))
  }

  const handleNewOrder = () => {
    navigate('Register')
  }

  const handleOpenDetails = (orderObj: OrderDetails) => {
    navigate('Details', { orderObj })
  }

  useEffect(() => {
    setIsLoading(true)
    const subscriber = firestore()
      .collection('orders')
      .where('status', '==', typeSelected)
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
          const { created_at, patrimony, description, status } = doc.data()

          return {
            id: doc.id,
            created_at: dateFormat(created_at),
            patrimony, 
            description, 
            status 
          }
        })

        setOrders(data)
        setIsLoading(false)
      })
      return subscriber
  }, [typeSelected])

  return (
    <VStack flex={1} bg={'gray.700'}>
      <HStack 
        px={6} 
        pt={12} 
        pb={5} 
        bg='gray.600' 
        alignItems='center' 
        justifyContent='space-between' 
      >
        <Logo />
        <IconButton 
          icon={<SignOut size={26} color={colors.gray[300]}/>}
          onPress={handleSignOut}
        />
      </HStack>
      <VStack flex={1} px={5} pb={6} >
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <>
              <HStack mt={8} mb={4} alignItems='center' justifyContent='space-between'>
                <Heading color='gray.100' fontSize='lg'>
                  Solicitações
                </Heading>
                <Text color='gray.200' fontSize='md'>
                  {isLoading ? "" : orders.length}
                </Text>
              </HStack>
              <HStack alignItems='center' justifyContent='space-between' space={3} pb={8}>
                <Filter 
                  type='open'
                  title='EM ANDAMENTO' 
                  isActive={typeSelected === 'open'} 
                  onPress={() => setTypeSelected('open')}
                />
                <Filter
                  type='closed'
                  title='FINALIZADOS' 
                  isActive={typeSelected === 'closed'}
                  onPress={() => setTypeSelected('closed')}
                />

              </HStack>
            </>          
          )}
          renderItem={({ item }) => (
            isLoading ? <Loading /> : <Order data={item} onPress={() => handleOpenDetails(item)} />
          )}
          _contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            isLoading ? <Loading /> :
              <Center>
                <ChatTeardropText color={colors.gray[400]} size={50} weight='light' />
                <Text color='gray.300' fontSize='lg' mt={6} textAlign='center'>
                  Você ainda não tem{'\n'}
                  solicitações {typeSelected === 'open' ? 'em andamento' : 'finalizadas'}
                </Text>
              </Center>
          )}
        />

        <Button title='Nova solicitação' onPress={handleNewOrder}/>
      </VStack>
    </VStack>
  );
}