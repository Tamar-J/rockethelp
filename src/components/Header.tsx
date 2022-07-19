import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, useTheme, StyledProps, Heading } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
  title: string
}

export function Header({ title, ...props}: Props) {
  const navigation = useNavigation()
  const { colors } = useTheme()

  const handleGoBack = () => {
    navigation.goBack()
  }
  return (
    <HStack
      w='full'
      justifyContent='space-between'
      alignItems='center'
      bg='gray.600'
      pb={6}
      pt={12}
      {...props}
    >
      <IconButton 
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
      />

      <Heading 
        color='gray.100'
        textAlign='center'
        fontSize='lg'
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>

    </HStack>
  );
}