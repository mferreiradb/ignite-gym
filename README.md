<div align='center'>
<h1>Ignite Gym</h1>

<p><b>In progress...</b></p>
</div>

**Fontes**

    npx expo install expo-font @expo-google-fonts/roboto

*Configurando fontes*

            import { Text, View } from 'react-native'
            import {
            useFonts,
            Roboto_400Regular,
            Roboto_700Bold,
            } from '@expo-google-fonts/roboto'

            export default function App() {
            const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {fontsLoaded ? (
                    <Text style={{ fontSize: 20, fontFamily: 'Roboto_700Bold' }}>
                    Hello world
                    </Text>
                ) : (
                    <View />
                )}
                </View>
            )
            }

## UTILIZANDO NATIVE BASE

- Bibioteca de componentes

- Pode ser utilizado para Android, IOS ou mesmo Web

- Possui componentes prontos para uso, aumentando a produtividade

- os componentes são personalizaveis

**Instalação e configuração**

*Native base core*

        npm install native-base

*Dependencias adicionais*

> Verifique as versões corretas no documentaçao: https://docs.nativebase.io/install-expo

- react-native-svg

        expo install react-native-svg@12.1.1

- safe-area-context
        
        expo install react-native-safe-area-context@3.3.2

- Para utiizarmos o Native Base, devemos envolver toda a aplicação pelo componente `NativeBaseProvider`

        import { Text, View, StatusBar } from 'react-native'
        import {
        useFonts,
        Roboto_400Regular,
        Roboto_700Bold,
        } from '@expo-google-fonts/roboto'

        import React from 'react'
        import { NativeBaseProvider, Box } from 'native-base'
        import { Loading } from '@components/Loading'

        export default function App() {
        

        return (
            <NativeBaseProvider>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Loading />
            </NativeBaseProvider>
        )
        }


- O Native Base nos permite criar nossas interfaces de forma declarativas passando as propriedades no arquivo do próprio componentes, sem a necessidade de criarmos um arquivo apenas para a estilização (parecido com Tawilwind)

        import { Center, Spinner } from 'native-base'

        export function Loading() {
        return (
            <Center flex={1}>
            <Spinner size="lg" />
            </Center>
        )
        }

**Customizando tema**

- Criamos um arquivo para nosso tema e definimos as cores, fontes e tamnho que desejamos utilizar

    -`src/theme/index.ts`

        import { extendTheme } from 'native-base'

        export const THEME = extendTheme({
        colors: {
            green: {
            700: '#00875F',
            500: '#00B37E',
            },
            gray: {
            700: '#121214',
            600: '#202024',
            500: '#29292E',
            400: '#323238',
            300: '#7C7C8A',
            200: '#C4C4CC',
            100: '#E1E1E6',
            },
            white: '#FFFFFF',
            red: {
            500: '#F75A68',
            },
        },
        fonts: {
            heading: 'Roboto_700Bold',
            body: 'Roboto_400Regular',
        },
        fontSizes: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
        },
        sizes: {
            14: 56,
            33: 148,
        },
        })

**Utilizando SVG**

- Nativamente, o RN não exibe SVG, porém podemos ter essa exibição através da instalação de bibliotecas auxiliares

- Ao instalar o Native Base, instalamos uma dessas bibliotecas

    - react-native-svg

            expo install react-native-svg@12.1.1

- Além disso, instalaremos outra bilioteca para que seja possível utilizarmos SVGs como componentes

    - [SVG Transform](https://github.com/kristerkari/react-native-svg-transformer)

            npm i react-native-svg-transformer --save-dev

- Após a instalação do `SVG Transform`, precisamos adicionar um arquivo `metro.config.js` na raiz do projeto para que ele permia que uitilizamos os SVGs com a mesma sintaxe de um componente

    - `metro.config.js`

            const { getDefaultConfig } = require("expo/metro-config");

            module.exports = (() => {
            const config = getDefaultConfig(__dirname);

            const { transformer, resolver } = config;

            config.transformer = {
                ...transformer,
                babelTransformerPath: require.resolve("react-native-svg-transformer"),
            };
            config.resolver = {
                ...resolver,
                assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
                sourceExts: [...resolver.sourceExts, "svg"],
            };

            return config;
            })();

## NAVEGAÇÃO

*Instalação*

- Instalação do core para uso da biblioteca `React Navigation`

                npm install @react-navigation/native

- Instalação de dependencias para uso em uma aplicação feita co Expo Maneged Project

                npx expo install react-native-screens react-native-safe-area-context

- Nesta aplicação, utilizaremos apenas a `Stack Navigation`

                npm install @react-navigation/native-stack

*Configuração e uso*

- Criamos uma pasta para guardarmos as rotas

    `src/routes/app.routes.tsx`

                import React from 'react';
                import { createNativeStackNavigator } from '@react-navigation/native-stack';
                import { Groups } from '@screens/Groups';
                import { NewGroup } from '@screens/NewGroup';
                import { Players } from '@screens/Players';

                const { Navigator, Screen } = createNativeStackNavigator();

                export function AppRoutes() {
                    return (
                        <Navigator>
                            <Screen name="Groups" component={Groups} />
                            <Screen name="NewGroup" component={NewGroup} />
                            <Screen name="Players" component={Players} />
                        </Navigator>
                    );
                }

- Utilizamos `createNativeStackNavigator()` para criar as nossas rotas

    - `Navigator` é o componente que armazena as rotas
    - `Screen` é o componente que determina qual o nome da rota e qual tela ele renderiza

- Em nosso `routes/index.tsx`, criamos o nosso `contexto de navegação`, que são as rotas que iremos disponibilizar para a nossa aplicação

    - `src/routes/index.tsx`

                import React from 'react';
                import { NavigationContainer } from '@react-navigation/native';
                import { AppRoutes } from './app.routes';

                export function Routes() {
                    return (
                        <NavigationContainer>
                            <AppRoutes />
                        </NavigationContainer>
                    );
                }

- Desta forma, basta passar o componente de contexto no nosso `App.tsx`, e agora todas as telas poderão ser acessadas

                import React from 'react';
                import { StatusBar } from 'react-native';
                import { ThemeProvider } from 'styled-components';
                import theme from './src/theme';
                import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
                import { Loading } from '@components/Loading';
                import { Routes } from '@routes/index';

                export default function App() {

                    //fontsLoaded recebe um valor boolean
                    const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold});

                    return (
                        <ThemeProvider theme={theme}>
                            { fontsLoaded ? <Routes /> : <Loading />}
                            <StatusBar
                                barStyle="light-content"
                                translucent
                                backgroundColor='transparent'
                            />
                        </ThemeProvider>
                    );
                }

- Por padrão, a primeira tela a ser mostrada é a que for definida primeiro no nosso arquivo de rotas, porém, podemos passar a propriedade `initialRouteName` para definir qual a primeira tela que queremos que seja renderizada

- Para remover o cabeçalho das rotas, basta passar a propriedade `screenOptions={{ headerShown: false }}` para o componente `Navigator`

                import React from 'react';
                import { createNativeStackNavigator } from '@react-navigation/native-stack';
                import { Groups } from '@screens/Groups';
                import { NewGroup } from '@screens/NewGroup';
                import { Players } from '@screens/Players';

                const { Navigator, Screen } = createNativeStackNavigator();

                export function AppRoutes() {
                    return (
                        <Navigator screenOptions={{ headerShown: false }}>
                            <Screen name="Groups" component={Groups} />
                            <Screen name="NewGroup" component={NewGroup} />
                            <Screen name="Players" component={Players} />
                        </Navigator>
                    );
                }