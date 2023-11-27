import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import {Picker} from '@react-native-picker/picker';
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
import { useState, useEffect } from "react";
import { FlatList } from 'react-native-gesture-handler';
import { Footer } from '../../src/Utils/style.ts';
import { transactions } from '../../src/Utils/Transactions.js';
import { somarValores } from "../../src/Utils/Transactions.js";
import Header from "../../src/components/Header/Header";

const Statistics = () => {

  const mesesDoAno = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];

  const [selectedMonth, setSelectedMonth] = useState(mesesDoAno[0]);

  const renderMonths = () => {
    return mesesDoAno.map((month, index) => (
      <TouchableOpacity
        key={index}
        style={style.monthButton}
        onPress={() => setSelectedMonth(month)}
      >
        <Text style={style.monthButtonText}>{month}</Text>
      </TouchableOpacity>
    ));
  };

  
  const [totalGastos, setTotalGastos] = useState(0);

  //Total Gastos do Mês
  useEffect(() => {
    //Sempre que esta lista de trasnsações mudar, irá chamar essa função
    const total = somarValores(transactions);
    setTotalGastos(total);
  },[transactions])

  //SearcBar
  const [list, setList] = useState(transactions);
  const [searchQuery, setSearchQuery] = useState('');

  //Implementação da busca da minha lista
  useEffect(() => {
    if(searchQuery ==='') {
      setList(transactions);
    } else {
      setList (
        transactions.filter(item => (item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        item.Amount.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)
          //toLowerCase = responsável por buscar os carateres tanto em maiusculo ou minusculo

          //CODIGO REFATORADO!  
          // if (item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
          //   return true;
          // } else {              
          //   return false
          // })
      ));
    }
  },[searchQuery])

  function setSearch(s) {
    return transactions.filter((d) => d.title.includes(s));
   }

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
      <Header title="Histórico"/>
      <View style={style.textTitle}>
        <Text
          style={{ fontFamily: "InterLight", fontSize: 18, letterSpacing: -1 }}
        >
          Gastos do Mês
        </Text>
        <Text
          style={{ fontFamily: "InterBold", fontSize: 32, letterSpacing: -1 }}
        >
          R$ {totalGastos}
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/Images/Grafico.png")}
          style={style.imgGraph}
        />
      </View> 
      <View style={style.container2}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={style.scrollView}
      >
        {renderMonths()}
      </ScrollView>
      {/* Renderizar a lista de transações filtradas */}
      {/* Exemplo: <TransactionList transactions={filteredTransactions} /> */}
    </View>
      <View
        style={{
          width: 385,
          height: 85,
          padding: 15,
          justifyContent: "center",
          alignItems: "center",
          //backgroundColor: 'red',
         // marginTop: -120
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={(s) => setSearchQuery(s)}
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
            data={list}
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

  // boxHeader: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "row",

  //   backgroundColor: "#9BF500",
  //   width: "100%",
  //   height: "10%",
  //   padding: 20,
  //   marginTop: 30,
  // },

  imgGraph: {
    alignItems: "center",
    justifyContent: "center",
    height: 213,
    width: 213,
  },

  expenses:{
    color:'red'
  },

  container2: {
    height: 50,
    width: 316,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    height: 50,
    width: 340,
    marginTop: 20,
    //backgroundColor: 'red'
  },
  monthButton: {
    //backgroundColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    height: 24
  },
  monthButtonText: {
    fontFamily: 'InterBold',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Statistics;
