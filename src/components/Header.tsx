import { Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { CaretLeft, IconProps } from 'phosphor-react-native';

type HeaderProps = {
  title?: 'EM ANDAMENTO' | 'FINALIZADO'
  icon?: React.ElementType<IconProps>
}

export function Header({ title, icon: Icon }:HeaderProps) {
  const { colors } = useTheme()

  return (
    <VStack bg='gray.600'>
      <HStack  mt={20} justifyContent='center' alignItems='center' mb={6}>
        <IconButton
          icon={<CaretLeft color={colors.gray[200]} size={24} />}
          position='absolute'
          left={0}
          ml={4}
        />
        <Heading color='gray.100' size='md'>Solicitação</Heading>
      </HStack>
      {
        title && Icon && (
          <HStack 
            alignItems='center' 
            justifyContent='center' 
            bg='gray.500' 
            w='full' 
            py={4}
            rounded={5}
          >
            <Icon color={colors.green[300]}/>
            <Text color='green.300' fontSize='sm' fontFamily='heading' ml={4}>
              {title}
            </Text>
          </HStack>
        )
      }
    </VStack>
  )
}