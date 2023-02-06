import { Text, View, TouchableOpacity, ImageBackground,StyleSheet, } from 'react-native';

    
    export default renderItem = ({item}) => {
        return (
          <View>
            <ImageBackground imageStyle={{borderRadius: 19}} style = {styles.Image2} source = {{uri: item.image}}>

                <View style={styles.CaseForName}>
                <Text style={styles.CupCake}>{item.nom}</Text>
              </View>
            </ImageBackground>
              
            </View>
          
        );
      }

  const styles = StyleSheet.create({
    Image2: {
        height: 150,
        width: 150,
        margin: 10,
        marginTop: 0 ,
        marginBottom: 0,
        },
    CaseForName:
        {
        width: '100%', 
        height: '26%', 
        backgroundColor: 'white',
        borderRadius:12,
        position: 'absolute',
        bottom: -4,
        },
    CupCake:
        {
        height:40,
        width:'100%',
        fontWeight:'700',
        }
      })