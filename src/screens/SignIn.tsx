import { VStack, Image, Text, Center, Heading } from 'native-base';
// Heading pode ser utilizado para textos em destaque, como titulos

import ImgBg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

// VStack é uma view que organiza os componentes em coluna

// Estamos utilizando o componentes Image para definir nossa imagem no bg, pois o componente nos fornece maior flexibilidade do que o BackgroundImage

export function SignIn() {
  return (
    <VStack px={10} flex={1} bg="gray.700">
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
        <Heading fontFamily="heading" color="gray.100" mb={6} fontSize="xl">
          Acesse sua conta
        </Heading>
      </Center>

      <Input
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="E-mail"
        placeholderTextColor="gray.300"
      />
      <Input
        secureTextEntry
        placeholder="Senha"
        placeholderTextColor="gray.300"
      />

      <Button title="Acessar" />

      <Button title="Criar conta" variant="outline" />
    </VStack>
  );
}
