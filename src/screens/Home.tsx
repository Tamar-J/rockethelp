import { VStack, FlatList, HStack, IconButton, useTheme, Heading, Text, Center, Box, Circle, Button } from 'native-base';
import { SignOut, ChatTeardropText, Hourglass, ClockAfternoon } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg' 
import { Button as CustomButton } from '../components/Button';


export function Home() {
  const { colors } = useTheme()

  const data = [
/*     {
      id: '1',
      patrimony: '147456',
      when: '20/01/22 às 14h'
    } */
  ]

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
          data={data}
          keyExtractor={item => item.id}
          ListHeaderComponent={({ item }) => {
            return (
              <>
                <HStack mt={8} mb={4} alignItems='center' justifyContent='space-between'>
                  <Heading color='gray.100' fontSize='lg'>
                    Solicitações
                  </Heading>
                  <Text color='gray.200' fontSize='md'>
                    3
                  </Text>
                </HStack>
                <HStack alignItems='center' justifyContent='space-between' space={3} pb={8}>
                  <Button bg='gray.600' flex={1} size='sm' borderWidth={1} borderColor='secondary.700'>
                    <Text color='secondary.700' fontSize='xs'>EM ANDAMENTO</Text>
                  </Button>
                  <Button bg='gray.600' flex={1} size='sm'>
                    <Text color='gray.300' fontSize='xs'>FINALIZADOS</Text>
                  </Button>
                </HStack>
              </>
            )
          }}
          renderItem={({ item }) => (
            <HStack mb={4} bg='gray.600' rounded='sm'>
              <Box h='full' w={2} borderLeftRadius='sm' bg='secondary.700'/>
              <HStack flex={1} alignItems='center' justifyContent='space-between'>
                <VStack ml={5} my={5} mr={2} flex={1}>
                  <Text fontSize='md' fontFamily='heading' color='gray.100' mb={1}>
                    Patrimônio {item.patrimony}
                  </Text>
                  <HStack alignItems='center'>
                    <ClockAfternoon size={18} color={colors.gray[300]} />
                    <Text ml={1} fontSize='xs' color='gray.200'>
                      {item.when}
                    </Text>
                  </HStack>
                </VStack>
                <Circle h={12} w={12} bg='gray.500' mr={5}>
                  <Hourglass size={24} color={colors.secondary[700]}/>
                </Circle>
              </HStack>
            </HStack>
          )}
          _contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={({ item }) => (
            <Center>
              <ChatTeardropText color={colors.gray[400]} size={50} weight='light' />
              <Text color='gray.300' fontSize='lg' mt={6}>Você ainda não tem{'\n'}solicitações criadas</Text>
            </Center>
          )}
        />

        <CustomButton title='Nova solicitação'  />
      </VStack>
    </VStack>
  );
}