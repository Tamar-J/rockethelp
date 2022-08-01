import { useRoute } from '@react-navigation/native';
import { VStack, ScrollView } from 'native-base';
import { CircleWavyCheck, ClipboardText, DesktopTower, Hourglass } from 'phosphor-react-native';

import { Button } from '../components/Button';
import { CardDetails } from '../components/CardDetails';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { OrderProps } from '../components/Order';

export type OrderDetails = OrderProps & {
  closed_at: string
  solution: string
}

export type RouteParams = {
  orderObj: OrderDetails
}
export function Details() {
  const route = useRoute()
  const { orderObj } = route.params as RouteParams

  return (
    <VStack flex={1} bg='gray.700'>
      <Header 
        title={ orderObj.status === 'closed'  ? 'FINALIZADO' : 'EM ANDAMENTO'}
        icon={ orderObj.status === 'closed'  ? CircleWavyCheck : Hourglass}
      />

      <ScrollView 
        mx={5} 
        _contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false} 
      >
        <CardDetails 
          title='EQUIPAMENTO'
          description={`Patrimônio ${orderObj.patrimony}`}
          icon={DesktopTower}
        />

        <CardDetails 
          title='DESCRIÇÃO DO PROBLEMA'
          description={orderObj.description}
          icon={ClipboardText}
          footer={`Registrado em ${orderObj.created_at}`}

        />
         
        <CardDetails 
          title='SOLUÇÃO'
          description={orderObj.status === 'closed' && orderObj.solution}
          icon={CircleWavyCheck}
          footer={orderObj.status === 'closed' && `Finalizado em ${orderObj.closed_at}`}
        >
          {
            orderObj.status === 'open' &&
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
        orderObj.status === 'open' && 
        <VStack p={5}>
          <Button title='Finalizar' onPress={() => {}}/>
        </VStack >
      }
    </VStack>
  );
}
