import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  // Envolvemos o container de navegação com uma Box que possui o mesmo bg para que não haja o glitch de navegação
  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
