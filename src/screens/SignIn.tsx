import { VStack } from 'native-base'
import Logo from "../assets/logo_primary.svg";



export default function SignIn() {
  return (
    <VStack flex={1} bg='gray.700' alignItems='center' pt={24}>
      <Logo />

    </VStack>
  )
}