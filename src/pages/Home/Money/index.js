import { View,Text,StyleSheet } from "react-native";

export default function Money() {
 return (
   <View style={style.container}>
    <Text>
        Money
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