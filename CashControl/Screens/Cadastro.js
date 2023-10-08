import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { useFonts } from 'expo-font';

const Cadastro = ({ navigation }) => {
  useFonts({
    Inter: require('../assets/fonts/Inter-Variable.ttf'),
  });

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/*esse TouchableOpacity é meio que um botão invisível, 
        só coloquei ele em volta do png do botão pra ficar mais fácil
        e cuidar do navigation*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.returnButtonContainer}>
          <Image
            style={styles.returnButton}
            source={require('../assets/images/return-button-1.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Realização de cadastro</Text>
      </View>
      <View style={styles.formArea}>
        {/*os campos de texto do formulário de cadastro ainda tão sem funcionalidade,
        só pra poder digitar qualquer coisa por enquanto*/}
        <Text style={styles.formTitle}>Criar nova conta</Text>
        <Text style={styles.formItem}>Nome:</Text>
        <TextInput style={styles.textInputBox} onChangeText={() => {}} />
        <Text style={styles.formItem}>Sobrenome:</Text>
        <TextInput style={styles.textInputBox} onChangeText={() => {}} />
        <Text style={styles.formItem}>E-mail:</Text>
        <TextInput style={styles.textInputBox} onChangeText={() => {}} />
        <Text style={styles.formItem}>Senha:</Text>
        <TextInput
          style={styles.textInputBox}
          onChangeText={() => {}}
          secureTextEntry={true}
        />
        <Text style={styles.formItem}>Confirmar Senha:</Text>
        <TextInput
          style={styles.textInputBox}
          onChangeText={() => {}}
          secureTextEntry={true}
        />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            style={{ height: 20, width: 20 }}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text
            style={{
              marginLeft: 8,
              fontFamily: 'Inter',
              fontSize: 13,
              top: 2,
            }}>
            Concordo com os Termos de Uso
          </Text>
        </View>
        <Button
          contentStyle={{ height: 50 }}
          labelStyle={{
            fontFamily: 'Inter',
            fontSize: 16,
            fontWeight: 300,
            letterSpacing: 0,
          }}
          color="#75B700"
          style={{
            marginTop: 20,
            marginHorizontal: 65,
            borderRadius: 14,
            width: 150,
          }}
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          dark={true}>
          CRIAR CONTA
        </Button>
      </View>
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    overflow: 'hidden',
    backgroundColor: 'white' 
  },
  header: {
    backgroundColor: '#9BF500',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: 550,
    letterSpacing: -1,
  },
  returnButtonContainer: {
    position: 'absolute',
    left: 10
  },
  returnButton: {
    height: 25,
    width: 30,
  },
  formArea: {
    height: 520,
    marginTop: 40,
    marginHorizontal: 30,
  },
  formTitle: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 20,
    fontWeight: '650',
    color: '#2D5300',
    letterSpacing: -1,
  },
  formItem: {
    fontFamily: 'Inter',
    fontSize: 14,
    textAlign: 'start',
    marginBottom: 5,
    marginHorizontal: 10,
    marginTop: 10,
  },
  textInputBox: {
    backgroundColor: '#F7F7F7',
    height: 50,
    marginBottom: 17,
    padding: 15,
    borderRadius: 10,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderWidth: 1,
    fontFamily: 'Inter',
    fontSize: 14,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});

