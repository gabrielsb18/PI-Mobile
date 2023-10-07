import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
{/* lib gradiente do header*/}
import {LinearGradient} from 'expo-linear-gradient';
{/* lib icon menu*/}
import {Feather} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Button_Desp_e_Rec from '../../src/components/Button_Desp_e_Rec/Button.js';

export default function Home() {
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
          <TouchableOpacity>
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
          <Image
          source = {require('../../assets/Images/Eye_Saldo.png')} style = {styles.imgEye}/>
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

  // imgProfile: {
  //   width: 58,
  //   height: 54,
  //   /*borderRadius: 100 Aplicando em qualquer imagem*/
  // },

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
    marginTop:-46
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
  }
});
