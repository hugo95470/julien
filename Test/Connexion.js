import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, TextInput, Image, Dimensions, ScrollView,} from 'react-native';


export default function Connexion(props) {
    return (
        <View style={styles.container}>


            <View>

            <TextInput 
                style={styles.InPut}
                placeholder='username'
                placeholderTextColor="white"
                textAlign='center'/>

            <TextInput 
                style={styles.InPut}
                placeholder='password'
                placeholderTextColor="white"
                textAlign='center'/>

            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("Page1")} style={styles.loggin}>
               <Text style= {{fontSize: 22, fontWeight:'500'}}>CONNEXION</Text>
            </TouchableOpacity>


        </View>
    )
}



const styles = StyleSheet.create({
    container: 
        {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#404140',
        justifyContent:'center',
        alignItems:'center',
        },
    loggin:
        {
        height: '9%',
        width: '90%', 
        backgroundColor: '#fff', 
        borderRadius:20,
        margin:0, 
        alignItems:'center',
        justifyContent:'center',
        },
    InPut:
        {
        height: 50,
        width: 270, 
        backgroundColor: '#7C7F7D', 
        borderRadius:20,
        marginBottom:20, 
        alignItems:'center',
        justifyContent:'center',
        fontSize:17,
        }
})
