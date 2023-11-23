import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens imports
import HomeScreen from '../screens/HomeScreen'


const Stack = createNativeStackNavigator()

const appNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default appNavigation