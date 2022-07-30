import { Heading, Text, Pressable, Button as NativeBaseButton, IButtonProps } from 'native-base';

type CustomButtonProps = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: CustomButtonProps) {
  return (
    <NativeBaseButton 
      w='full' 
      h={14} 
      bg='secondary.700' 
      rounded={6}
      _pressed={{
        background: 'secondary.600'
      }}
      {...rest}
    >
      <Heading color='white' fontSize='sm'>{title}</Heading>
    </NativeBaseButton>
  );
}

export function TextButton({ title, ...rest }: CustomButtonProps) {
  return (
    <Pressable {...rest}>
      {({isPressed}) => (
        <Text color={isPressed ? 'primary.600' : 'primary.700' } fontSize='sm'>
          {title}
        </Text>
      )}
    </Pressable>
  );
}