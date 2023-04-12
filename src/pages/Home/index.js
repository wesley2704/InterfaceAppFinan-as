import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../Components/Header";
import Balance from "../../Components/Balance";
import Moviments from "../../Components/Moviments";
import Actions from "../../Components/Actions";

const list = [
  {
    id: 1,
    label: "boleto conta luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0, // despesas
  },
  {
    id: 1 / 2,
    label: "pix cliente x",
    value: "2.500,00",
    date: "17/09/2022",
    type: 1, // receitas / entradas
  },
  {
    id: 3,
    label: "salario",
    value: "7.500,00",
    date: "17/09/2022",
    type: 1, // receita /entrada
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name=" Ola,Natan" />
      <Balance saldo="36.495,00" gastos="-300,00" />
      <Actions />
      
      <Text style={styles.title}>Ultimas movimentações </Text>
     
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
  },
});
