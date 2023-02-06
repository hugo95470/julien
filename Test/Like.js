import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import { StyleSheet, View, Text, TouchableOpacity, Alert,Button,ImageBackground, FlatList, TextInput, Image, Dimensions, ScrollView,} from 'react-native';

const PayButton = () => {
    Alert.alert("Details","Are you sure you want to pay?",[
        { text:"YES",onPress:() =>console.log("No is pressed" )},
        { text:"NO",onPress:() =>console.log("No is pressed")}
    ])
} 







export default function Like(props) {
    return (
        <View style={styles.container}>


            <View>

                
                <TouchableOpacity>


                </TouchableOpacity>



                

                    <TouchableOpacity style={styles.PayButton}>
                        <View>

                

                             <Button AlertButtonstyle='cancel' title='proceed to pay' onPress={()=>PayButton()}/>
            
               
               
                        </View>
                     </TouchableOpacity>
                
            </View>


            <View style = {styles.CommandeBare}> 
               
               
                     <TouchableOpacity onPress={() => props.navigation.navigate("Page1")} style={styles.loggin}> 
                        <Image style = {styles.IconCommande} source = {{uri: "https://cdn-icons-png.flaticon.com/512/1828/1828864.png"}}/> 
                     </TouchableOpacity>
               
               
                         <Image style = {styles.IconCommande} source = {{uri: "https://cdn-icons-png.flaticon.com/512/447/447149.png"}}/>
               
               
                     <TouchableOpacity onPress={() => props.navigation.navigate("Like")} style={styles.loggin}>
                         <Image style = {styles.IconCommande} source = {{uri:"https://cdn-icons-png.flaticon.com/512/35/35687.png"}}/>
                     </TouchableOpacity>

              


              
                     <Image style = {styles.IconCommande} source= {{uri:"https://cdn-icons-png.flaticon.com/512/76/76716.png"}}/> 
           
          
          </View>
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
        alignItems:'center',
        },
    PayButton:
        {
        height:50,
        width:290, 
        backgroundColor:'#FFF',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        top:450
        },
    CommandeBare:{
        height: '10%',
        width: '100%',
        borderRadius: 20,
        flexDirection:'row',
        backgroundColor:"#7C7F7D",
        justifyContent: 'space-evenly',
        alignContent: 'center',
        position:'absolute',
        bottom: 0
        },
    IconCommande:
        {
        height: 45,
        width: 45, 
        marginTop: 5,
        flexDirection: 'column',
        }
    }
)