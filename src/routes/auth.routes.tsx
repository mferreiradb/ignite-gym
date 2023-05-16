import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

type AuthRoutesProps = {
  signin: undefined;
  signup: undefined;
};

// Tipagem que será reutilizada no uso das rotas
export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AuthRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  <Navigator>
    <Screen name="signin" component={SignIn} />
    <Screen name="signup" component={SignUp} />
  </Navigator>;
}
