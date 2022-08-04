import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import { VStack, ScrollView } from 'native-base';
import { CircleWavyCheck, ClipboardText, DesktopTower, Hourglass } from 'phosphor-react-native';
import { useEffect, useState } from 'react';

import { Button } from '../components/Button';
import { CardDetails } from '../components/CardDetails';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Loading } from '../components/Loading';
import { OrderProps } from '../components/Order';
import { OrderFirestoreDTO } from '../ODTs/OrderFirestoreDTO';
import { dateFormat } from '../utils/firestoreDateFormat';

export type OrderDetails = OrderProps & {
  closed_at: string
  solution: string
}
export type RouteParams = {
  orderId: string
}

export function Details() {
  const route = useRoute()

  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState<OrderDetails>({} as OrderDetails)

  const { orderId } = route.params as RouteParams
  const orderDocument = firestore().collection<OrderFirestoreDTO>('orders').doc(orderId)

  useEffect(() => {
    orderDocument
      .get()
      .then(doc => {
        const { patrimony, description, status, created_at, closed_at, solution } = doc.data()

        setOrder({
          id: doc.id,
          created_at: dateFormat(created_at),
          patrimony,
          description,
          status,
          solution,
          closed_at: dateFormat(closed_at) || ''
        })

        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <Loading/>

  return (
    <VStack flex={1} bg='gray.700'>
      <Header 
        title={ order.status === 'closed'  ? 'FINALIZADO' : 'EM ANDAMENTO'}
        icon={ order.status === 'closed'  ? CircleWavyCheck : Hourglass}
      />

      <ScrollView 
        mx={5} 
        _contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false} 
      >
        <CardDetails 
          title='EQUIPAMENTO'
          description={`Patrimônio ${order.patrimony}`}
          icon={DesktopTower}
        />

        <CardDetails 
          title='DESCRIÇÃO DO PROBLEMA'
          description={order.description}
          icon={ClipboardText}
          footer={`Registrado em ${order.created_at}`}

        />
         
        <CardDetails 
          title='SOLUÇÃO'
          description={order.status === 'closed' && order.solution}
          icon={CircleWavyCheck}
          footer={order.status === 'closed' && `Finalizado em ${order.closed_at}`}
        >
          {
            order.status === 'open' &&
            <Input 
              placeholder='Descreva a solução do problema'
              multiline
              autoCapitalize='sentences'
              textAlignVertical='top'
              keyboardType='default'
              h={24}
              mt={4}
            />
          }

        </CardDetails>
        
      </ScrollView>
      {
        order.status === 'open' && 
        <VStack p={5}>
          <Button title='Finalizar' onPress={() => {}}/>
        </VStack >
      }
    </VStack>
  );
}
