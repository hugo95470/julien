import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState, useCallback } from 'react';


export default function HomePage(props) {

    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/OpenSans-Light.ttf'),
      });

    let [recherche, setRecherche] = useState("");
    
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    var RenderItem = ({ item }) => (
        <View>
            <ScrollView horizontal={true} style={{flexDirection: 'row', marginVertical: 20}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'blue', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/4 - 10, width: Dimensions.get('screen').width/4 - 10, borderRadius: 100}}>
                        <Image style={{height: '100%', width: '100%', borderRadius: 100}} source={require('./Profil1.webp')}/>
                    </View>
                    <Text style={globalStyles.center}>HEllo</Text>
                </View>
                
                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'blue', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/4 - 10, width: Dimensions.get('screen').width/4 - 10, borderRadius: 100}}>
                        <Image style={{height: '100%', width: '100%', borderRadius: 100}} source={require('./Profil2.webp')}/>
                    </View>
                    <Text style={globalStyles.center}>HEllo</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'blue', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/4 - 10, width: Dimensions.get('screen').width/4 - 10, borderRadius: 100}}>
                        <Image style={{height: '100%', width: '100%', borderRadius: 100}} source={require('./Profil3.webp')}/>
                    </View>
                    <Text style={globalStyles.center}>HEllo</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'blue', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/4 - 10, width: Dimensions.get('screen').width/4 - 10, borderRadius: 100}}>
                        <Image style={{height: '100%', width: '100%', borderRadius: 100}} source={require('./Profil1.webp')}/>
                    </View>
                    <Text style={globalStyles.center}>HEllo</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'blue', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/4 - 10, width: Dimensions.get('screen').width/4 - 10, borderRadius: 100}}>
                        <Image style={{height: '100%', width: '100%', borderRadius: 100}} source={require('./Profil1.webp')}/>
                    </View>
                    <Text style={globalStyles.center}>HEllo</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'blue', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/4 - 10, width: Dimensions.get('screen').width/4 - 10, borderRadius: 100}}>
                        <Image style={{height: '100%', width: '100%', borderRadius: 100}} source={require('./Profil1.webp')}/>
                    </View>
                    <Text style={globalStyles.center}>HEllo</Text>
                </View>
            </ScrollView>

            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: 'red', margin: 5, height: Dimensions.get('screen').width/2 - 10, width: Dimensions.get('screen').width/2 - 10, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./Sport.png')}/>
                </View>

                <View style={{backgroundColor: 'green', margin: 5, height: Dimensions.get('screen').width/1.5 - 10, width: Dimensions.get('screen').width/2 - 10, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./Peche.jpeg')}/>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: 'green', margin: 5, top: -65, height: Dimensions.get('screen').width/1.5 - 10, width: Dimensions.get('screen').width/2 - 10, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./GuitareElectrique.jpeg')}/>
                </View>

                <View style={{backgroundColor: 'green', margin: 5, height: Dimensions.get('screen').width/1.5 - 10, width: Dimensions.get('screen').width/2 - 10, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./VinRouge.jpeg')}/>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginBottom: -65}}>
                <View style={{backgroundColor: 'green', margin: 5, top: -65, height: Dimensions.get('screen').width/1.5 - 10, width: Dimensions.get('screen').width/2 - 10, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./Phoque.jpeg')}/>
                </View>

                <View style={{backgroundColor: 'red', margin: 5, height: Dimensions.get('screen').width/2 - 10, width: Dimensions.get('screen').width/2 - 10, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./Sport.png')}/>
                </View>
            </View>

            <ScrollView horizontal={true} style={{flexDirection: 'row', marginVertical: 20}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'white', flexDirection: 'row', borderWidth: 2, borderColor: 'orange', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/3 - 10, width: Dimensions.get('screen').width - 100, borderRadius: 19}}>
                        <Image style={{height: 80, width: 80, margin: 10, borderRadius: 100}} source={require('./Sport.png')}/>

                        <Text style={globalStyles.center}>HEllo</Text>
                    </View>
                </View>
                
                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'white', flexDirection: 'row', borderWidth: 2, borderColor: 'orange', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/3 - 10, width: Dimensions.get('screen').width - 100, borderRadius: 19}}>
                        <Image style={{height: 80, width: 80, margin: 10, borderRadius: 100}} source={require('./Sport.png')}/>

                        <Text style={globalStyles.center}>HEllo</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'white', flexDirection: 'row', borderWidth: 2, borderColor: 'orange', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/3 - 10, width: Dimensions.get('screen').width - 100, borderRadius: 19}}>
                        <Image style={{height: 80, width: 80, margin: 10, borderRadius: 100}} source={require('./Sport.png')}/>

                        <Text style={globalStyles.center}>HEllo</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={{backgroundColor: 'white', flexDirection: 'row', borderWidth: 2, borderColor: 'orange', margin: 10, marginTop: 20, height: Dimensions.get('screen').width/3 - 10, width: Dimensions.get('screen').width - 100, borderRadius: 19}}>
                        <Image style={{height: 80, width: 80, margin: 10, borderRadius: 100}} source={require('./Sport.png')}/>

                        <Text style={globalStyles.center}>HEllo</Text>
                    </View>
                </View>
            </ScrollView>
            
            {/* <View style={{backgroundColor: 'orange', margin: 5, height: Dimensions.get('screen').width/1.5 - 10, width: Dimensions.get('screen').width - 10, borderRadius: 19}}>

            </View> */}

            <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={{backgroundColor: 'red', margin: 10, height: Dimensions.get('screen').width/2 - 20, width: Dimensions.get('screen').width/2 - 20, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./Sport.png')}/>
                </View>

                <View style={{backgroundColor: 'green', margin: 10, height: Dimensions.get('screen').width/1.5 - 20, width: Dimensions.get('screen').width/2 - 20, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./GuitareElectrique.jpeg')}/>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: 'green', margin: 10, top: -65, height: Dimensions.get('screen').width/1.5 - 20, width: Dimensions.get('screen').width/2 - 20, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./Phoque.jpeg')}/>
                </View>

                <View style={[globalStyles.shadows, {backgroundColor: 'green', margin: 5, height: Dimensions.get('screen').width/1.5 - 20, width: Dimensions.get('screen').width/2 - 20, borderRadius: 19}]}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./Peche.jpeg')}/>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginBottom: -45}}>
                <View style={{backgroundColor: 'green', margin: 10, top: -65, height: Dimensions.get('screen').width/1.5 - 20, width: Dimensions.get('screen').width/2 - 20, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./VinRouge.jpeg')}/>
                </View>

                <View style={{backgroundColor: 'red', margin: 10, height: Dimensions.get('screen').width/2 - 20, width: Dimensions.get('screen').width/2 - 20, borderRadius: 19}}>
                    <Image style={{height: '100%', width: '100%', borderRadius: 19}} source={require('./Sport.png')}/>
                </View>
            </View>
        </View>
    );

    return (
        <ScrollView style={{backgroundColor: '#eee', marginTop: 100}} onLayout={onLayoutRootView}>

            <Text style={[globalStyles.fontFamily, globalStyles.section, {marginLeft: 30, marginTop: 20}]}>Hello Spright! 👋</Text>

            <Text style={[globalStyles.fontFamily, globalStyles.TitreNoir, {marginTop: 15, fontFamily: 'Inter-Black'}]}>Explore le monde qui t'entoure !</Text>

            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <View style={[globalStyles.shadows, {flexDirection: 'row', width: '70%', marginLeft: 'auto', marginRight: 10, backgroundColor: 'white', borderRadius: 100, padding: 10}]}>
                    <Image style={{height: 20, width: 20, marginTop: 'auto', marginBottom: 'auto', marginRight: 20, marginLeft: 10}} source={require("./Loupe.png")}/>
                    <TextInput style={[globalStyles.fontFamily, {fontSize: 15, width: '100%'}]} placeholderTextColor={"#aaa"} placeholder={"Recherche une affiche"} value={recherche} onChangeText={setRecherche}/>
                    <TouchableOpacity style={{position: 'absolute', padding: 10, right: 5, top: 5}} onPress={() => setRecherche("")}>
                        <Image style={{height: 20, width: 20}} source={require('./Cross.png')}/>
                    </TouchableOpacity>
                </View> 

                <TouchableOpacity style={[globalStyles.center, globalStyles.orangeShadows, {width: 50, height: 50, borderRadius: 15, backgroundColor: "#FEA52A"}]} onPress={() => props.navigation.navigate('SearchAffichePage')}>
                    <Image style={[globalStyles.center, {height: 33, width: 35, opacity: 0.7}]} source={require("./RoundTag.png")}/>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={() => props.navigation.navigate("GamesPage")} style={[globalStyles.borderRadius, globalStyles.center, styles.playAGameBox, globalStyles.orangeShadows]}>
                <Image style={[globalStyles.center, {height: 100, width: 100, borderRadius: 12, marginLeft: 10}]} source={require('./Games.jpg')}/>
                <Text style={[globalStyles.center, globalStyles.fontFamily, styles.title]}>Avec une citation ici</Text>
                <Text style={[{color: "black", marginRight: 20, marginBottom: 20, marginTop: 'auto', backgroundColor: 'white', paddingHorizontal: 25, paddingVertical: 8, borderRadius: 10}]}>Jouer</Text>
            </TouchableOpacity>

            <RenderItem/>
            <RenderItem/>
            <RenderItem/>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    playAGameBox: {
        flexDirection: 'row', 
        width: "90%", 
        height: 140,
        backgroundColor: '#FEA52A',
        // borderWidth: 2,
        borderColor: "#FEA52A",
        marginBottom: 20
    },
    title: {
        color: "white",
        fontSize: 23,
        lineHeight: 30,
        marginTop: 25,
        marginLeft: 80,
        maxWidth: 180
    },
})

const fontFamily = Platform.OS === 'ios' ? "AppleSDGothicNeo-UltraLight" : "sans-serif-light";

const globalStyles = StyleSheet.create({
  //TEXT
  mediumText: {
    fontFamily: fontFamily,
    fontSize: 17,
},
fontFamily: {
    fontFamily: fontFamily,
    lineHeight: 21
},
title: {
    fontFamily: fontFamily,
    fontSize: 40,
    lineHeight: 42
},
section: {
    fontFamily: fontFamily,
    fontSize: 25,
    marginLeft: 10,
    marginTop: 10,
    lineHeight: 30
},
TitreNoir: {
    margin: 30,
    fontSize: 30,
    color: 'black',
    lineHeight: 33
},

//GLOBAL
orange: {
    backgroundColor: "#FEA52A",
},
center: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
},
orangeShadows: {
    shadowColor: "#FEA52A",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,

    elevation: 15,
},
shadows: {
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    elevation: 6,
},
white: {
    color: 'white',
},
opacityWeak: {
    opacity: 0.3,
},

//VIEW
borderRadius : {
    borderRadius: 19,
},
button: {
    position: 'absolute',
    backgroundColor: '#FEA52A',
    padding: 20,
    paddingVertical: 15,
    borderRadius: 5,
    right: 25,
    bottom: 25,
},
cercle: {
    borderRadius: 1000,
},
roundButton: {
    height: 50,
    backgroundColor: '#FEA52A',
    minWidth: 10,
    width: 150,
    paddingVertical: 10,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
},
input: {
    backgroundColor: 'white',
    paddingLeft: 20,
    minWidth: 250,
    paddingVertical: 10,
    borderRadius: 1000,
    marginTop: 20,
},
mediumCard: {

},
smallCard: {
    borderRadius: 19,
},
})
