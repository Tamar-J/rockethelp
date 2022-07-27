import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      h={14}
      rounded={6}
      borderWidth={0}
      placeholderTextColor='gray.300'
      backgroundColor='gray.700'
      color='white'
      fontSize='md'
      fontFamily='body'
      autoCapitalize='none'
      _focus={{
        borderWidth: 1,
        borderColor: 'secondary.600'
      }}
      {...rest}
    />
    
  );
}

/* 
<VStack w='full' pl={4} mb={1} backgroundColor='red'>
  <Text color='#F75A68' fontSize='xs'>E-mail inválido</Text>
</VStack> 
*/