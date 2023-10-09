
import { View, Text, StyleSheet,Image } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BF500',
    paddingHorizontal:0,
    justifyContent:'center',
    maxHeight:'9em',
    fontFamily:'Arial',
    fontVariant:'Regular',

  },
});


const styles = StyleSheet.create({
  container: {
    paddingLeft:16,
    flex: 1,
    backgroundColor: '#EAEAEA',
    justifyContent:'center',
    maxHeight:'5em',
    fontFamily:'Arial',
    fontVariant:'Regular',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const headerBox = StyleSheet.create({
  container:{
    display: 'block',
    position: 'fixed',
    paddingBottom: 30,
    fontSize:20,
    paddingLeft:65,
  }
});

const textBox = StyleSheet.create({
  container:{
    display: 'block',
    position: 'fixed',
    paddingTop: 10,
    fontSize:12,
    paddingLeft:65,
  }
});

const subtitleBox = StyleSheet.create({
  container:{
    display: 'block',
    position: 'fixed',
    paddingTop:45,
    fontSize:8,
    paddingLeft:65,
  }
});



const Lembrete = () => {
  return (
    <View style={estilos.container}>
    <h2 align='center'>Lembrete</h2>
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../assets/lembrete.svg')}/> 
      <Text style={headerBox.container}>Lembrete</Text>
      <Text style={textBox.container}>Pagamento - Conta de Luz</Text>
      <Text style={subtitleBox.container}>10/9/2023</Text>
    </View>
    </View>
  );
};



/* Notification Tab*/



export default Lembrete;
