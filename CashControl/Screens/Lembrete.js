
import { View, StyleSheet, } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BF500',
    paddingHorizontal:0,
    justifyContent:'center',
    maxHeight:'4em',
    fontFamily:'Arial',
    fontVariant:'Regular',

  },
});


const Lembrete = () => {
  return (
    <View style={estilos.container}>
    <h2 align='center'>Nova categoria</h2>
    </View>
  );
};



/* Notification Tab*/



export default Lembrete;
