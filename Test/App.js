import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as font from 'expo-font';
import { AppLoading } from 'expo-font';

export default function App() {

useEffect(() => {
font.loadAsync({
'roboto-italic': require('./assets/fonts/OpenSans-Light.ttf')
})
},[])
return (
<View>
    <Text style={{fontFamily:'roboto-italic'}}>Hiiiiiiiiiiii</Text>

</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#aaa',
alignItems: 'center',
justifyContent: 'center',
}

});


// import Page1 from './Page1';
// import Connexion from './Connexion';
// import HomePage from './HomePage';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Like from './Like';



// export default function App() {

//   const Stack = createNativeStackNavigator();

//     return (
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>

//             <Stack.Screen name="Connexion" component={Connexion} options={{ headerShown: false }}/>
//             <Stack.Screen name="Page1" component={Page1} options={{ headerShown: false }}/>
//             <Stack.Screen name="Like" component={Like} options={{ headerShown: false }}/>

//           </Stack.Navigator>
//         </NavigationContainer>
//     );
// }