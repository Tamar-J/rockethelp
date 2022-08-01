import { Box, HStack, Text, useTheme, VStack } from 'native-base';
import { IconProps } from 'phosphor-react-native';
import { ReactNode } from 'react';

type CardProps = {
  title: string
  description: string
  footer?: string
  icon: React.ElementType<IconProps>
  children?: ReactNode
}

export function CardDetails({ title, description, footer, icon: Icon, children }: CardProps) {
  const { colors } = useTheme()

  return (
    <VStack bg='gray.600' p={5} rounded={5} mt={5} >
      <HStack alignItems='center' space={2}>
        <Icon color={colors.primary[700]} size={20}/>
        <Text color='gray.300' fontSize='sm'>{title}</Text>

      </HStack>
      {
        description && 
        <Text color='gray.100' fontSize='md' mt={3}>
          {description}
        </Text>
      }

      { children }

      {
        footer && (
          <>
            <Box borderTopWidth={1} borderTopColor='gray.500' my={3}/>
            <Text color='gray.300' fontSize='md'>{footer}</Text>
          </>
        )
      }
    </VStack>
  )
}