import {  ImageBackground  } from "react-native"
import React, { useEffect, useState } from "react";
import { Input, Box, Center, NativeBaseProvider,View,Button, Flex,Divider } from "native-base";
import {StyleSheet} from 'react-native'
import {bgimg} from '../../../assets/background_Img.jpg'
import * as Location from 'expo-location';
import { getDataFromAPI } from "../../services/apicall"; 



const HomeScreen = ({ route, navigation })=>{

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cityName,setCityValue] = useState('')
  const [DataObj,setDataObj] = useState({})

  const getCoordinates = async () => {
    const location = await Location.geocodeAsync(cityName)

    const [{latitude,longitude}] = location
    setLatitude(latitude)
    setLongitude(longitude)
    // console.log("£££££££££££££££££.....>",cityName )
    // console.log(">>>>>>>>>>>>>>>>>>>>!",latitude,longitude)
  };
  
  const getApiData =  async () =>{
    try{
      const a = await getDataFromAPI(latitude,longitude)
      setDataObj(a)
    //  console.log(">>>>>>>>LLLLLLOOOOLLLLLL>>>>>>>>",a)
  }catch (e){
    
  }
  }

  useEffect(()=>{
    getCoordinates()
  },[getCoordinates,latitude,longitude])

  const handleInputChange = (text) =>{
   getApiData()
   navigation.navigate('detailHome',{
    itemObj: DataObj,
  })
  }
  return(
    <ImageBackground
      source={require('../../../assets/background_Img.jpg')} // Provide the path to your image
      style={homeStyle.backgroundImage}
    >
    <View style={homeStyle.constainer}>
    
    <Box alignItems="center">
    <Input mx="3" placeholder="Input" w="100%"  value={cityName} onChangeText={text => setCityValue(text)} />
    <Divider/>
    <Button marginTop={10} onPress={handleInputChange}>Locate</Button>
  </Box>
  

  </View>
  </ImageBackground>
  )
}
   
const homeStyle = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch', 'contain'
  },

})

export default HomeScreen