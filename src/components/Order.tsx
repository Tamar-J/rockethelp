import { Box, Circle, HStack, Pressable, Text, useTheme, VStack, IPressableProps } from "native-base"
import { ClockAfternoon, Hourglass, CircleWavyCheck } from "phosphor-react-native"

export type OrderProps = {
  id: string
  created_at: string
  patrimony: string
  description: string
  status: string
}

type Props = IPressableProps & {
  data: OrderProps
}

export function Order({ data, ...rest }: Props) {
  const { colors } = useTheme()

  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300]
  
  return (
    <Pressable mb={4} {...rest}>
      <HStack bg='gray.600' rounded='sm'>
        <Box h='full' w={2} borderLeftRadius='sm' bg={statusColor}/>
        <HStack flex={1} alignItems='center' justifyContent='space-between'>
          <VStack ml={5} my={5} mr={2} flex={1}>
            <Text fontSize='md' fontFamily='heading' color='gray.100' mb={1}>
              Patrimônio {data.patrimony}
            </Text>
            <HStack alignItems='center'>
              <ClockAfternoon size={18} color={colors.gray[300]} />
              <Text ml={1} fontSize='xs' color='gray.200'>
                {data.created_at}
              </Text>
            </HStack>
          </VStack>
          <Circle h={12} w={12} bg='gray.500' mr={5}>
            { 
              data.status === 'open'
              ? <Hourglass size={24} color={statusColor}/>
              : <CircleWavyCheck size={24} color={statusColor}/>
            }
          </Circle>
        </HStack>
      </HStack>
    </Pressable>
  )
}