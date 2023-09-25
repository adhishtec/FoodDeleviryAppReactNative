import { ScrollView, View } from "react-native"
import { Text, Card, Button, Icon } from '@rneui/themed';
import { useEffect, useState } from "react";
import { apiData } from "../../services/apicall";
import { thumbnailImageBaseUrl } from "../../const";
import { FlatList } from "native-base";
import { Menu } from 'native-base';
//import { ScrollView } from "native-base";
const DetailHomeComponent = ({ route, navigation })=>{
  //  const { itemObj } = route.params;
    const mainApiData = apiData
    const [cardData,setCardData] = useState([])
    //const cards=
  
    
   // console.log("JJJJJJJJJJ",cards)
   useEffect(()=>{
  // const {data:{data:{cards}}} = itemObj
   // console.log(".......>>>>",mainApiData?.data.success.cards)
    const getRestorantDetails = mainApiData?.data.success.cards.find((data)=> data.gridWidget.id === 'restaurantCollectionDeliveringNowTheme')
   // setCardData(mainApiData?.data.success)
   console.log(getRestorantDetails.gridWidget.gridElements.infoWithStyle.restaurants)
   setCardData(getRestorantDetails.gridWidget.gridElements.infoWithStyle.restaurants)
   },[mainApiData])

    
    return (       
    <ScrollView key='Helllo'>
        {cardData && cardData.map((restoData)=>{
            return(
<Card>
    <Card.Title>{restoData.info.name}</Card.Title>
    <Card.Divider />
    <Card.Image
      style={{ padding: 0 , height:350}}
      source={{
        uri:
        thumbnailImageBaseUrl+restoData.info.cloudinaryImageId,
      }}
    />
    <Text style={{ marginBottom: 10 ,color:"black",fontSize:19}}>
     Location: {restoData.info.locality}
    </Text>
    <Text style={{ marginBottom: 10 ,color:"black",fontSize:19}}>
    Area Name: {restoData.info.areaName}
    </Text>
    <Text style={{ marginBottom: 10 ,color:"black",fontSize:19}}>
    Cost: {restoData.info.costForTwo} 
    </Text>
    <Text style={{ marginBottom: 10 ,color:"black",fontSize:19}}>
     Rating: {restoData.info.avgRating}
    </Text>
    <Text style={{ marginBottom: 10 }}>
     Status: {restoData.info.isOpen?'Open':'Close'}
    </Text>
    <Text style={{ marginBottom: 10 }}>
     {restoData.info.cuisines.map(data=> <Menu.Item style={{borderWidth:1,borderColor:"pink",borderRadius:10 }}>{data}</Menu.Item>)}
    </Text>
    <Button
      icon={
        <Icon
          name="code"
          color="#ffffff"
          iconStyle={{ marginRight: 10 }}
        />
      }
      buttonStyle={{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      }}
      title={'Dummy'}
    />
  </Card>
            )
        })}


  </ScrollView>
    )

      
}
 
export default DetailHomeComponent