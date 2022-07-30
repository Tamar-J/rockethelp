import { Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { CaretLeft, IconProps } from 'phosphor-react-native';

type HeaderProps = {
  title: string
  icon: React.ElementType<IconProps>
}

export function Header({ title, icon: Icon }:HeaderProps) {
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