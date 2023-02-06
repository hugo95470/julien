import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, TextInput, Image, Dimensions, ScrollView,} from 'react-native';
import { useState } from 'react';
import renderItem from './component';
import { NavigationContainer } from '@react-navigation/native';


export default function Page1(props) {

let [name, setName] = useState("name")
let [affiches, setAffiches] = useState ([{image : "https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80", nom: "   StrawBerry Cupcake"}, 
                                        {image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", nom: "   Chocolate Cupcake"} ,
                                        {image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80", nom: "   Rainbow Cupcake"},
                                        {image: "https://images.unsplash.com/photo-1596223575327-99a5be4faf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", nom: "   Cherry Cupcake"},
                                        {image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", nom: "   Red Velvet Cupcake"}])


  return (

    <View style={styles.container}>

        
    <ScrollView style={{height: 100}}>


        <View style={{flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', width: '100%'}}>
            <Image style={styles.HamburgerMenuIcon} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"}}/>

            <Image style={{height: 40, width: 40, borderRadius: 100, margin: 20, backgroundColor: 'lightgrey'}} source={{uri: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"}}/>
        </View>


        <Text
            style={styles.Title}>  {new Date().getHours()>18?"Good Evening":"Hello"}
        </Text>
      
        <Text
            style={styles.Name}>   {name}
        </Text>  
       
        <View style={{flexDirection: 'row', backgroundColor: "#7C7F7D", marginHorizontal: 20, borderRadius: 5}}>
            <Image style = {{height: 30, width: 30,margin:5, marginRight:10 ,}}source={{uri:"https://cdn-icons-png.flaticon.com/512/64/64673.png"}}/>

            <TextInput 
                style={styles.InPut}
                value= {name} onChangeText= {setName}
                placeholder='Search for chocolate milkshake'
                placeholderTextColor="white"
                textAlign='left'/>


        </View>

        
          

        <Text
            style={styles.SpecialDay}>Monday Specials
        </Text>
        
        <FlatList horizontal={true} data={affiches} renderItem={renderItem} style={{height: 230}}/>
            
            
     
      
       
            



            {/* <View style={styles.Separateur}/>    */}
       
        
      
        <View style={{height:220,bottom:40,}}>
        <View style={{position: 'absolute', backgroundColor: 'white', height: 50, width: '75%', flexDirection: 'row', borderRadius: 19, left: '23%'}}>
            <View style={{width: "100%", marginTop: 10, marginLeft: 15,}}>
             <Text>Red Fruit Cake</Text>
             <Image style={{width: 80, height: 10,top: 5.5,}} source={{uri: "https://image.shutterstock.com/image-vector/five-stars-quality-rating-icon-260nw-1924521683.jpg"}}/>
             </View>
            <View style={{width: "30%"}}>
            
           </View>
        </View>
       

          <Image style = {styles.ImageSmall} source = {{uri: "https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80"}}/>
          
          <View style={{position: 'absolute',marginTop:70, backgroundColor: 'white', height: 50, width: '75%', flexDirection: 'row', borderRadius: 19, left: '23%'}}>
            <View style={{width: "100%", marginTop: 10, marginLeft: 15,}}>
             <Text>Raspberry Cake</Text>
             <Image style={{width: 80, height: 10,top: 5.5,}} source={{uri: "https://image.shutterstock.com/image-vector/five-stars-quality-rating-icon-260nw-1924521683.jpg"}}/>
             </View>
            <View style={{width: "30%"}}>
            
           </View>
        </View>
        <Image style = {styles.ImageSmall} source = {{uri: "https://images.unsplash.com/photo-1541782432180-e4371d7e1a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}}/>
          
          
        
        <View style={{position: 'absolute', marginTop:140,backgroundColor: 'white', height: 50, width: '75%', flexDirection: 'row', borderRadius: 19, left: '23%'}}>
            <View style={{width: "100%", marginTop: 10, marginLeft: 15,}}>
             <Text>Donuts</Text>
             <Image style={{width: 80, height: 10,top: 5.5,}} source={{uri: "https://image.shutterstock.com/image-vector/five-stars-quality-rating-icon-260nw-1924521683.jpg"}}/>
             </View>
            <View style={{width: "30%"}}>
            
           </View>
        </View>
        <Image style = {styles.ImageSmall} source = {{uri: "https://images.unsplash.com/photo-1653565084776-e1d8c8e238a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"}}/>
         
         
        <View style={{position: 'absolute', marginTop:210,backgroundColor: 'white', height: 50, width: '75%', flexDirection: 'row', borderRadius: 19, left: '23%'}}>
            <View style={{width: "100%", marginTop: 10, marginLeft: 15,}}>
             <Text>Macarons</Text>
             <Image style={{width: 80, height: 10,top: 5.5,}} source={{uri: "https://image.shutterstock.com/image-vector/five-stars-quality-rating-icon-260nw-1924521683.jpg"}}/>
             </View>
            <View style={{width: "30%"}}>
            
           </View>
        </View>
         <Image style = {styles.ImageSmall} source = {{uri: "https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"}}/>
         
         
         
         <View style={{position: 'absolute', marginTop:280,backgroundColor: 'white', height: 50, width: '75%', flexDirection: 'row', borderRadius: 19, left: '23%'}}>
            <View style={{width: "100%", marginTop: 10, marginLeft: 15,}}>
             <Text>Chocolate Cake</Text>
             <Image style={{width: 80, height: 10,top: 5.5,}} source={{uri: "https://image.shutterstock.com/image-vector/five-stars-quality-rating-icon-260nw-1924521683.jpg"}}/>
             </View>
            <View style={{width: "30%"}}>
            
           </View>
        </View>
          <Image style = {styles.ImageSmall} source = {{uri: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"}}/>
        
       
      
       
               </View>

        

             
               </ScrollView>






               <View style = {styles.CommandeBare}> 
               <Image style = {styles.IconCommande} source = {{uri: "https://cdn-icons-png.flaticon.com/512/1828/1828864.png"}}/> 
               

               <TouchableOpacity>
                    <Image style = {styles.IconCommande} source = {{uri: "https://cdn-icons-png.flaticon.com/512/447/447149.png"}}/>
               </TouchableOpacity>
               
               <TouchableOpacity onPress={() => props.navigation.navigate("Like")} >
                    <Image style = {styles.IconCommande} source = {{uri:"https://cdn-icons-png.flaticon.com/512/35/35687.png"}}/>
               </TouchableOpacity>

              
               
               <Image style = {styles.IconCommande} source= {{uri:"https://cdn-icons-png.flaticon.com/512/76/76716.png"}}/> 

          </View>

    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#404140',
  },
  InPut:{
    height: 40,
    width: '85%',
    fontWeight:'500',
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
  Image2: {
    height: 150,
    width: 150,
    margin: 0,
    marginTop: 0 ,
    marginBottom: 0,
    borderRadius: 20,
  },
  ImageSmall:
  {
    height: 50,
    width: 50,
    margin: 20,
    borderRadius: 20,
    marginTop: 0,
  },
  Separateur:
    {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 0,
    },
  Title:
    {
    color: 'white',
    fontSize: 18,
    fontWeight:'100',
    marginTop: 60
    },
  Name:
    {
    color: 'white',
    fontSize: 18,
    fontWeight:'500',
    },
  SpecialDay:
    {
    color: 'white',
    fontSize: 19,
    fontWeight: '400',
    },
  HamburgerMenuIcon:
    {
      height: 40, 
      width: 40, 
      borderRadius: 100, 
      margin: 20,
    },
  PP:
    {
    height: 40, 
    width: 40, 
    borderRadius: 100,
    margin: 20,
    },
  IconCommande:
    {
    height: 45,
    width: 45, 
    marginTop: 5,
    flexDirection: 'column',
    
    },
  MenuItem:
    {
    width:'25%',
    height:'100%',
    padding:20,
    backgroundColor: '#ccc'
    }
});
