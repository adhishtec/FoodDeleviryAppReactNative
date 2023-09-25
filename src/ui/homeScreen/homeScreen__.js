import { ScrollView, View } from "react-native"
import { Text, Card, Button, Icon } from '@rneui/themed';
import { useEffect, useState } from "react";
//import { ScrollView } from "native-base";
const HomeScreen = ({ route, navigation })=>{
    const { itemId, otherParam } = route.params;
    const [cardData,setCardData] = useState()
    console.log("!!!!!!!!!!!!!!!!!!!!",itemId?.data)
    useEffect(()=>{
        setCardData(itemId?.data.categories)
    },[itemId?.data])
    return (
       <ScrollView>
            {cardData && cardData.map((data)=>{
return(
    <View key={data.idCategory}>
    <Card>
    <Card.Title>{data.strCategory}</Card.Title>
    <Card.Divider />
    <Card.Image
      style={{ padding: 0 }}
      source={{
        uri:
          data.strCategoryThumb,
      }}
    />
    <Text style={{ marginBottom: 10 }}>
     {data.strCategoryDescription}
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
      title={data.strCategory}
    />
  </Card>
  
  </View>
  
)

            })}
           
       </ScrollView>
        
       
    )
}

export default HomeScreen