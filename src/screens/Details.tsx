import { VStack, ScrollView } from 'native-base';
import { CircleWavyCheck, ClipboardText, DesktopTower } from 'phosphor-react-native';

import { CardDetails } from '../components/CardDetails';
import { Header } from '../components/Header';

export function Details() {

  return (
    <VStack flex={1} bg='gray.700'>
      <Header 
        title='FINALIZADO'
        icon={CircleWavyCheck}
      />

      <ScrollView 
        mx={5} 
        _contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false} 
      >
        <CardDetails 
          title='EQUIPAMENTO'
          description='Patrimônio 123456'
          icon={DesktopTower}
        />

        <CardDetails 
          title='DESCRIÇÃO DO PROBLEMA'
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          icon={ClipboardText}
          footer='Registrado em 20/11/2022 às 14:30'

        />

        <CardDetails 
          title='SOLUÇÃO'
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          icon={CircleWavyCheck}
          footer='Finalizado em 20/11/2022 às 14:30'
        />
        
      </ScrollView>
    </VStack>
  );
}
