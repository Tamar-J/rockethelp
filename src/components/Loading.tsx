import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center h='full' bg='gray.700'>
      <Spinner size='sm' color='secondary.700'/>
    </Center>
  );
}