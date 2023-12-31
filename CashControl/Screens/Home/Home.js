import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient'; {/* lib gradiente do header*/}
import Button_Desp_e_Rec from '../../src/components/ButtonDesp/Button.js';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Footer } from '../../src/Utils/style.ts';
import { transactions } from '../../src/Utils/Transactions.js';
import {ContentFlat,
    IconTransaction,
    DetailsTransaction,
    NameTransaction,
    SubtitleTransaction,
    AmountTransaction,} from '../../src/Utils/style.ts';
    
export default function Home() {
  const [showValue, setShowValue] = useState (false)
  
  /* Lógica Botão Menu*/
  const navigation = useNavigation();
    const abridrawer = () => {
      navigation.openDrawer(); /* função responsável por abrir nosso drawer*/
    };

  const [fontsLoaded] = useFonts({
    InterRegular:require('../../assets/Fonts/InterRegular.ttf'),
    InterMedium:require('../../assets/Fonts/InterMedium.ttf'),
    InterBold:require('../../assets/Fonts/InterBold.ttf'),
    InterLight:require('../../assets/Fonts/InterLight.ttf')

    });

   if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/*BARRA DE STATUS DO TOP*/}
      {/*<StatusBar style="auto" />*/}
      <LinearGradient
      colors = {['rgba(155, 245, 0, 1)', 'rgba(120, 189, 0, 1)']}
      style = {styles.headerHome}>
        <View style = {styles.row1}>
          <TouchableOpacity>
            <Image
            source = {require('../../assets/Images/Perfil_Usuario.png')} style = {styles.imgProfile}/> 
          </TouchableOpacity>
          <TouchableOpacity onPress={abridrawer}> 
            <Image
            source = {require('../../assets/Images/Button_menu.png')} style = {styles.imgMenu}/>
          </TouchableOpacity>
        </View>
          <Text style = {styles.msgWelcome}>Bem Vindo(a) {'\n'}Usuário</Text>
      </LinearGradient>

      <View style ={{width:"100%", alignItems:'center',}}>
        <View style ={styles.saldoTotal}>
          <Text style ={{letterSpacing: -0.3, fontSize: 15, fontFamily: 'InterLight'}}>Seu saldo total</Text>
          <Text style ={{fontSize: 32, marginTop: 16, fontFamily: 'InterBold' }}>R$ 5.000,00</Text>
          <TouchableOpacity>
          <Image
          source = {require('../../assets/Images/Eye_Saldo.png')} style = {styles.imgEye}/>
          </TouchableOpacity>
        </View>
      
      </View>
        <View style = {styles.viewTransacoes}>
          <View style={styles.box1}>
            <Text>R$ 135,00</Text>
            <Image
            source = {require('../../assets/Images/Arrow2.png')} style = {{marginLeft: 10}}/>
          </View>
          <View style={styles.box2}>
            <Text styles ={{marginLeft: 20,}}>R$ 834,90</Text>
            <Image
            source = {require('../../assets/Images/Arrow1.png')} style = {{marginLeft: 10}}/>
          </View>      
        </View>
        
        <Button_Desp_e_Rec/>
        
        <View style = {styles.textsTr}>
            <Text style = {styles.TitleTr}>Últimas transações</Text>
            <TouchableOpacity>
                <Text style = {styles.textView}>View All</Text>
            </TouchableOpacity>
        </View>

      {/*Lista de ultimas transações*/}
      <Footer>
        <FlatList
            //ADICIONAR FUNÇÃO PARA EXIBIR SOMENTE OS 3 PRIMEIROS ITENS
            data={transactions.slice(0, 3)}
            renderItem={({ item }) =>(
                    <ContentFlat>
                            <IconTransaction source = {item.Icon}/>
                            <DetailsTransaction>
                                <NameTransaction>{item.title}</NameTransaction>
                                <SubtitleTransaction>{item.subtitle}</SubtitleTransaction>
                            </DetailsTransaction>
                            <AmountTransaction style={item.type === 1 ? styles.value : styles.expenses}>{item.type === 1 ? `R$ ${item.value}` : `R$ ${item.Amount}`}</AmountTransaction>
                    </ContentFlat>
            )}
            overScrollMode="never" /*Desativa o efeito de limite de rolagem */
            scrollEnabled={true} /*Desativa o scrool da minha lista  */
            />
      </Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
  },
  
  headerHome: {
    width: '100%',
    height: 400, /*Altura do meu background verde*/
    padding: 21,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
    backgroundColor: '#9BF500',
  },

  imgProfile: {
    width: 58,
    height: 54,
    borderRadius: 100 /*Aplicando em qualquer imagem*/
  },

  imgMenu: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },

  row1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 45,
    padding: 20
  },

  msgWelcome: {
    fontFamily: 'InterRegular',
    color: 'black',
    fontSize: 30,
    marginLeft: 50,
    marginTop: 30
  },
  
  saldoTotal: {

    backgroundColor: '#75B700',
    fontSize: 15,
    width: '80%',
    height: 115,
    top: -76,
    borderRadius: 14,
    padding: 20,

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5
  },

  imgEye: {
    marginLeft: '85%',
    marginTop:'-12%',
  },

  viewTransacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 26,
    marginTop:-66
  },

  box1:{
    flexDirection: 'row',
    width: 119,
    height: 52,
    marginRight: 32, /* espaçamento entre cada box*/
    padding: 16,
    backgroundColor:'rgba(117, 183, 0, 0.25)',
    borderRadius: 13,
  },

   box2:{
    flexDirection: 'row',
    width: 119,
    height: 52,
    marginLeft: 32,  /* ajuste do espaçamento do box*/
    backgroundColor:'rgba(255, 0, 0, 0.25)',
    padding: 16,
    borderRadius: 13,
  },

  viewreceitas:{
    width: '84%',
    height: '12%',
  },

  receitas: {
    width: '100%',
    height: 94,
    backgroundColor: '#75B700',
    borderRadius: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  imgSeta: { 
    marginLeft: 30,
  },

  list: {
    flex: 1,
  },

  textsTr:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    paddingHorizontal: 45,
    paddingBottom:12,
    paddingTop: 12
  },

   TitleTr: {
    fontFamily: 'InterLight',
    letterSpacing: -0.26,
    fontSize: 13,
    flex:1,
  },

  textView: {
    fontFamily: 'InterLight',
    flex:1,
    letterSpacing: -0.26,
    fontSize: 13,
    color: '#75B700',
   },

  FlList:{
    marginStart: 14,
    marginEnd: 14,
    width:350,
    marginTop: -10,
  },

  expenses:{
    color:'red'
  }
});
