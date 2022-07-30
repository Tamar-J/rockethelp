import { Box, HStack, Text, useTheme, VStack } from 'native-base';
import { IconProps } from 'phosphor-react-native';

type CardProps = {
  title: string
  description: string
  footer?: string
  icon: React.ElementType<IconProps>

}

export function CardDetails({ title, description, footer, icon: Icon, ...rest }: CardProps) {
  const { colors } = useTheme()

  return (
    <VStack bg='gray.600' p={5} rounded={5} mt={5} {...rest}>
      <HStack alignItems='center' space={2}>
        <Icon color={colors.primary[700]} size={20}/>
        <Text color='gray.300' fontSize='sm'>{title}</Text>

      </HStack>
      <Text color='gray.100' fontSize='md' mt={2}>{description}</Text>
      {
        !!footer && (
          <>
            <Box borderTopWidth={1} borderTopColor='gray.500' my={3}/>
            <Text color='gray.300' fontSize='md'>{footer}</Text>
          </>
        )
      }
    </VStack>
  )
}