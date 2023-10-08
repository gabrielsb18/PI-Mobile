import { View, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';

const Login = ({ navigation }) => {
  //useStates pra cuidar do login
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //mexi nesse useFonts pra ver se aquela const era necessária, parece que não
  //qualquer coisa só editar até a fonte dar certo, mas deve funcionar
  useFonts({
    Inter: require('../assets/fonts/Inter-Variable.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 240, width: '100%' }}
        source={require('../assets/images/shop.png')}
      />
      <View style={styles.overlay} />
      <View style={styles.overlay2} />
      <View style={styles.loginArea}>
        <Text
          style={{
            fontFamily: 'Inter',
            textAlign: 'center',
            marginTop: 14,
            fontSize: 32,
            fontWeight: '650',
            color: '#2D5300',
          }}>
          Login
        </Text>
        <Text
          style={{
            fontFamily: 'Inter',
            fontSize: 12,
            textAlign: 'center',
            color: '#2D5300',
          }}>
          Acesse sua conta e comece a economizar.
        </Text>
        <TextInput
          style={styles.textInputBox}
          inputMode="email"
          placeholder="E-mail"
          placeholderTextColor="#878787"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInputBox}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#878787"
          value={password}
          onChangeText={setPassword}
        />
        {/*por enquanto o botão de restaurar senha é só texto inerte*/}
        <Text
          style={{
            fontFamily: 'Inter',
            marginTop: 13,
            color: '#2D5300',
            textAlign: 'center',
          }}>
          Esqueceu sua senha?
        </Text>
        <Button
          contentStyle={{ height: 50 }}
          labelStyle={{
            fontFamily: 'Inter',
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0,
          }}
          color="#75B700"
          style={{
            marginTop: 10,
            marginHorizontal: 80,
            borderRadius: 14,
          }}
          mode="contained"
          onPress={() => {}}
          dark={true}>
          LOGIN
        </Button>
        <Button
          labelStyle={{
            fontFamily: 'Inter',
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: 0,
          }}
          color="#75B700"
          uppercase={false}
          style={{
            marginTop: 7,
            marginHorizontal: 80,
            borderRadius: 14,
          }}
          mode="contained"
          onPress={() => navigation.navigate('Cadastro')}
          dark={true}>
          Não tenho conta
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3EAB3D',
    overflow: 'hidden',
  },
  loginArea: {
    backgroundColor: 'white',
    height: 384,
    width: 280,
    borderRadius: 20,
    top: '16%',
  },
  overlay: {
    width: '120%',
    height: '40%',
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: '#9BF500',
    top: '16%',
    left: '-10%',
  },
  overlay2: {
    width: '120%',
    height: '34%',
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: '#3EAB3D',
    top: '22%',
    left: '-10%',
  },
  textInputBox: {
    backgroundColor: '#F7F7F7',
    height: 50,
    marginTop: 17,
    marginHorizontal: 16,
    padding: 15,
    borderRadius: 10,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderWidth: 1,
    fontFamily: 'Inter',
    fontSize: 14,
  },
});
