import { Heading, Text, Pressable, Button as NativeBaseButton, IButtonProps } from 'native-base';

type Props = {
  title: string
}

type CustomButtonProps = IButtonProps & Props

export function Button({ title, ...rest }: CustomButtonProps) {
  return (
    <NativeBaseButton 
      w='full' 
      h={14} 
      bg='secondary.700' 
      rounded={6}
      _pressed={{
        background: '#FFBC70'
      }}
      {...rest}
    >
      <Heading color='white' fontSize='sm'>{title}</Heading>
    </NativeBaseButton>
  );
}

export function TextButton({ title, ...rest }: Props) {
  return (
    <Pressable>
      {({isPressed}) => (
        <Text color={isPressed ? '#5689E5' : 'primary.700' } fontSize='sm'>
          {title}
        </Text>
      )}
    </Pressable>
  );
}