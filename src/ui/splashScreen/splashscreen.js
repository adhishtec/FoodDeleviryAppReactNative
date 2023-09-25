import { useEffect, useState } from "react"
import { Text,View,Image,StyleSheet } from "react-native"
import {splash} from "../../../assets/splash.jpg"
import { getDataFromAPI } from "../../services/apicall"

const SplashScreen = ({navigation}) =>{ 
    const[apiData,setApiData]=useState()
    const func = async()=>{
        try{
            const a = await getDataFromAPI()
            setApiData(a)
        }catch (e){
            
        }
        
    }
    useEffect(()=>{
       
        func()
   //     console.log("SSSSSS",apiData)
        
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('home',{
                itemId: apiData,
              })
        },1000) 
    },[apiData])

    return (
    <>
    <View style={style.container}>
        <Image source ={require('../../../assets/splash.jpg')}/>
    </View>
    </>)
}

const style= StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    }
})
export default SplashScreen