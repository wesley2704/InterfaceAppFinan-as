import { View,Text,StyleSheet } from "react-native";

export default function Store() {
 return (
   <View style={style.container}> 
    <Text>
        Store
    </Text>
   </View>
  );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})