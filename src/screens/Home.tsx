import { useNavigation } from '@react-navigation/native';
import { VStack, FlatList, HStack, IconButton, useTheme, Heading, Text, Center } from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';
import { useState } from 'react';

import Logo from '../assets/logo_secondary.svg' 
import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Order } from '../components/Order';


export function Home() {
  const { colors } = useTheme()
  const { navigate } = useNavigation()

  const [typeSelected, setTypeSelected] = useState('open')

  const data = [
    {
      id: '1',
      created_at: '20/01/22 às 14h',
      patrimony: '147456',
      description: 'Problema de Junta',
      solution: 'Jogamos tudo fora',
      closed_at: '21/01/22 às 15h',
      status: 'closed'
    }, 
    {
      id: '2',
      created_at: '20/01/22 às 15h',
      patrimony: '147457',
      description: 'Teste',
      solution: '',
      closed_at: '',
      status: 'open'
    },
    {
      id: '3',
      created_at: '21/01/22 às 15h',
      patrimony: '147457',
      description: 'Teste2',
      solution: '',
      closed_at: '',
      status: 'open'
    }
  ]

  const filteredData = data.filter(e => (
    typeSelected === 'open' 
    ? e.status === 'open' 
    : e.status === 'closed'
  ))

  const handleNewOrder = () => {
    navigate('Register')
  }

  const handleOpenDetails = () => {
    navigate('Details')
  }

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
        />
      </HStack>
      <VStack flex={1} px={6} pb={6} >
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <>
              <HStack mt={8} mb={4} alignItems='center' justifyContent='space-between'>
                <Heading color='gray.100' fontSize='lg'>
                  Solicitações
                </Heading>
                <Text color='gray.200' fontSize='md'>
                  {filteredData.length}
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
          renderItem={({ item }) => <Order data={item}  onPress={handleOpenDetails} />}
          _contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
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