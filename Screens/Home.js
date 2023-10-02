import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
{/* lib gradiente do header*/}
import {LinearGradient} from 'expo-linear-gradient';
{/* lib icon menu*/}
import {Feather} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>App Cash Control</Text>*/}
      {/*<StatusBar style="auto" />*/}

      <LinearGradient
      colors = {['rgba(155, 245, 0, 1)', 'rgba(120, 189, 0, 1)']}
      style = {styles.headerHome}>
        <View style = {styles.row1}>
          <Image
          source = {require('./assets/Perfil_Usuario.png')} style = {styles.imgProfile}/> 
          {/*menu icon*/}
          {/*<Feather name ="menu" size={24} color = "black" style= {styles.menu}/>*/}
          <Image
          source = {require('./assets/Button_menu.png')} style = {styles.imgMenu}/>
        </View>
        <Text style = {styles.msgWelcome}>Bem Vindo(a) {'\n'}Usuário</Text>
      </LinearGradient>

      <View style ={{width:"100%", alignItems:'center',}}>
        <View style ={styles.saldoTotal}>
          <Text style ={{letterSpacing: -0.3, fontSize: 15}}>Seu saldo total</Text>
          <Text style ={{fontSize: 32, marginTop: 16,  }}>R$ 5.000,00</Text>
          <Image
          source = {require('./assets/Eye_Saldo.png')} style = {styles.imgEye}/>
        </View>
      </View>
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
    height: '50%', /*Altura do meu background verde*/
    padding: 20,
    borderBottomLeftRadius: 95, /*Radius em meu butão ( ͡° ͜ʖ ͡°)*/
    borderBottomRightRadius: 95
  },

  imgProfile: {
    width: 58,
    height: 54,
    /*borderRadius: 100 Aplicando em qualquer imagem*/
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
    color: 'black',
    fontSize: 30,
    marginLeft: 50,
    marginTop: 50
  },

  saldoTotal: {
    backgroundColor: '#75B700',
    fontSize: 15,
    width: '80%',
    height: 115,
    top: -50,
    borderRadius: 14,
    padding: 20,
  },

  imgEye: {
    alignItems: 'right',
  }
});
