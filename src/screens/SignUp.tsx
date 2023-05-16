import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
// Heading pode ser utilizado para textos em destaque, como titulos

import ImgBg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

// VStack é uma view que organiza os componentes em coluna

// Estamos utilizando o componentes Image para definir nossa imagem no bg, pois o componente nos fornece maior flexibilidade do que o BackgroundImage

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate('signin');
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack px={10} flex={1}>
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
            Crie sua conta
          </Heading>
          <Input placeholder="Nome" placeholderTextColor="gray.300" />
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
          <Button title="Criar e acessar" />
        </Center>

        <Button
          mt={24}
          title="Voltar para o login"
          variant="outline"
          onPress={handleSignUp}
        />
      </VStack>
    </ScrollView>
  );
}
