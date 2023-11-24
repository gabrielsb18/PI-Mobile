import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import GoBack from "../../src/components/GoBack/goBack";
import { Searchbar } from 'react-native-paper';

import {ContentFlat,
  IconTransaction,
  DetailsTransaction,
  NameTransaction,
  SubtitleTransaction,
  AmountTransaction} from '../../src/Utils/style.ts';

import { FlatList } from 'react-native-gesture-handler';
import { Footer } from '../../src/Utils/style.ts';
import { transactions } from '../../src/Utils/Transactions.js';

const Statistics = () => {

  //SearcBar
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [fontsLoaded] = useFonts({
    InterRegular: require("../../assets/Fonts/InterRegular.ttf"),
    InterMedium: require("../../assets/Fonts/InterMedium.ttf"),
    InterBold: require("../../assets/Fonts/InterBold.ttf"),
    InterLight: require("../../assets/Fonts/InterLight.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={style.container}>
      <View style={style.boxHeader}>
        <GoBack />
        <Text
          style={{
            fontFamily: "InterMedium",
            fontSize: 20,
            letterSpacing: -1,
            fontWeight: 500,
            alignItems: "center",
            position: "absolute",
            marginLeft: 90,
          }}
        >
          Histórico
        </Text>
      </View>

      <View style={style.textTitle}>
        <Text
          style={{ fontFamily: "InterLight", fontSize: 18, letterSpacing: -1 }}
        >
          Gastos do mês
        </Text>
        <Text
          style={{ fontFamily: "InterBold", fontSize: 32, letterSpacing: -1 }}
        >
          R$ 840,90
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/Images/Grafico.png")}
          style={style.imgGraph}
        />
      </View>
      <View
        style={{
          width: 385,
          height: 85,
          padding: 15,
          marginTop: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            backgroundColor: "lightgray",
            borderRadius: 9,
            margin: 10,
          }}
        />
      </View>
        <Footer>
          <FlatList
            //ADICIONAR FUNÇÃO PARA EXIBIR SOMENTE OS 3 PRIMEIROS ITENS
            data={transactions}
            renderItem={({ item }) => (
              <ContentFlat>
                <IconTransaction source={item.Icon} />
                <DetailsTransaction>
                  <NameTransaction>{item.title}</NameTransaction>
                  <SubtitleTransaction>{item.subtitle}</SubtitleTransaction>
                </DetailsTransaction>
                <AmountTransaction
                  style={item.type === 1 ? style.value : style.expenses}
                >
                  {item.type === 1 ? `R$ ${item.value}` : `R$ ${item.Amount}`}
                </AmountTransaction>
              </ContentFlat>
            )}
            overScrollMode="never" /*Desativa o efeito de limite de rolagem */
            scrollEnabled={true} /*Desativa o scrool da minha lista  */
          />
        </Footer>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7f7f7",
  },

  textTitle: {
    justifyContent: "row",
    alignItems: "center",
    padding: 20,
  },

  boxHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: "#9BF500",
    width: "100%",
    height: "10%",
    padding: 20,
    marginTop: 30,
  },

  imgGraph: {
    alignItems: "center",
    justifyContent: "center",
    height: 213,
    width: 213,
  },

  expenses:{
    color:'red'
  }
});

export default Statistics;
