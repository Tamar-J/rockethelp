import { Heading, HStack, IconButton, useTheme, VStack, Text, ScrollView } from 'native-base';
import { CaretLeft, CircleWavyCheck, ClipboardText, DesktopTower, IconProps } from 'phosphor-react-native';

import { CardDetails } from '../components/CardDetails';

type HeaderProps = {
  title: string
  icon: React.ElementType<IconProps>
}

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

const Header = ({ title, icon: Icon }:HeaderProps) => {
  const { colors } = useTheme()

  return (
    <VStack bg='gray.600'>
      <HStack  mt={20} justifyContent='center' alignItems='center'>
        <IconButton
          icon={<CaretLeft color={colors.gray[200]} size={24} />}
          position='absolute'
          left={0}
          ml={4}
        />
        <Heading color='gray.100' size='lg'>Solicitação</Heading>
      </HStack>
      <HStack 
        alignItems='center' 
        justifyContent='center' 
        bg='gray.500' 
        w='full' 
        py={4}
        mt={6}
        rounded={5}
      >
        <Icon color={colors.green[300]}/>
        <Text color='green.300' fontSize='sm' fontFamily='heading' ml={4}>
          {title}
        </Text>
      </HStack>
    </VStack>
  )
}