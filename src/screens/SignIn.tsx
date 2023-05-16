import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
// Heading pode ser utilizado para textos em destaque, como titulos

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import ImgBg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

// VStack é uma view que organiza os componentes em coluna

// Estamos utilizando o componentes Image para definir nossa imagem no bg, pois o componente nos fornece maior flexibilidade do que o BackgroundImage

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate('signup');
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack px={10} flex={1}>
        <Image
          source={ImgBg}
          // DefaultSource define qual a imagem pardrão, para carregamento mais rápido
          defaultSource={ImgBg}
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
        </Center>
        <Center mt={24}>
          <Text fontSize="sm" fontFamily="body" color="gray.100">
            Ainda não tem acesso?
          </Text>
        </Center>
        <Button title="Criar conta" variant="outline" onPress={handleSignUp} />
      </VStack>
    </ScrollView>
  );
}
