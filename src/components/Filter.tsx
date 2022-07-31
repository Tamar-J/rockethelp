import { Button, IButtonProps, Text } from "native-base"

type Props = IButtonProps & {
  title: string
  isActive: boolean
  type: 'open' | 'closed'
}

export function Filter({ title, isActive, type, ...rest }: Props) {
  
  const filterColor = type === 'open' ? 'secondary.700' : 'green.300'

  return (
    <Button 
      bg='gray.600' 
      flex={1} 
      size='sm' 
      borderWidth={isActive ? 1 : 0} 
      borderColor={filterColor}
      {...rest}
    >
      <Text 
        color={isActive ? filterColor : 'gray.300'} 
        fontSize='xs'
      >
        {title}
      </Text>
    </Button>  
  )
}