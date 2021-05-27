import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './views/Home';
import DetailsScreen from './views/Detail';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Лист продукты" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Описание продукт'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
