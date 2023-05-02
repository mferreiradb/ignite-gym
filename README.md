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
