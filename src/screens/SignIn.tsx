import { VStack, Image, Text, Center, Heading } from 'native-base';
// Heading pode ser utilizado para textos em destaque, como titulos

import ImgBg from '@assets/background.png';
import Logo from '@assets/logo.svg';

// VStack é uma view que organiza os componentes em coluna

// Estamos utilizando o componentes Image para definir nossa imagem no bg, pois o componente nos fornece maior flexibilidade do que o BackgroundImage

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={ImgBg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <Logo />

        <Text color="gray.100">Treine sua menste e seu corpo</Text>
      </Center>

      <Center>
        <Heading fontFamily="heading" color="gray.100">
          Acesse sua conta
        </Heading>
      </Center>
    </VStack>
  );
}
