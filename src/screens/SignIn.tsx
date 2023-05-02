import { VStack, Image } from 'native-base';

import ImgBg from '@assets/background.png';

// VStack é uma view que organiza os componentes em coluna

// Estemos utilizando o componentes Image para definir nossa imagem no bg, pois o componente nos fornece maior flexibilidade do que o BackgroundImage

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={ImgBg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  );
}
