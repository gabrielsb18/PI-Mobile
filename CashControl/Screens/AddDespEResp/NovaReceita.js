import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView  } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DatePickerInput } from "react-native-paper-dates";
import {SelectList} from 'react-native-dropdown-select-list';
import { useFonts } from 'expo-font';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Receitas from "../Transactions/Receitas";
import Header from "../../src/components/Header/Header";
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

//Validação do formulario
const schema = yup.object({
  nomeReceita: yup.string().required("Escolha sua receita"),
  valorReceita: yup.string().required("Digite o valor da sua receita"),
  Descricao: yup.string().required("Digite sua descrição"),
  Date: yup.string().required("Digite a data para lembrete"),
})

const NovaReceita = () => {

  const {control, handleSubmit, formState: {errors}} = useForm ({
    resolver:yupResolver(schema)
  })

  function handleSignIn(data){
    console.log(data)
  }

  const navigation = useNavigation();
  const buttonNav = () => {
    navigation.navigate('Receitas')
  }

  const [checked, setChecked] = useState(null);
  const [selected, setSelected] = useState("");
  const [date, setDate] = useState("");
  // const [descricao, setDescricao] = useState("");
  // const [valor, setValor] = useState("");
  
  const dataListReceitas = [
    {key:'1', value:'Investimentos'},
    {key:'2', value:'Salário'},
    {key:'3', value:'Pagamentos'},
    {key:'4', value:'Vendas'},
  ]

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
    <><Header title="Nova Receita" /><View style={style.container}>
      <View>
        <View style={style.input}>
        <Controller
          control = {control}
          name = "nomeReceita"
          render = {({field :{onChange, value}}) => ( <SelectList
            style={style.input}
            setSelected={(val) => onChange(val)}
            data={dataListReceitas}
            save="value"
            value = {value}
            placeholder="Categoria"
            boxStyles={{
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 1.2,

              borderWidth: errors.Descricao && 3,
              borderColor: errors.Descricao && "red",
            }}
            inputStyles={{ fontSize: 15 }}
            dropdownItemStyles={{
              backgroundColor: "#9BF500",
              flexDirection: "row",
              borderRadius: 19,
              height: 62,
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 10,
              fontSize: 18,
              alignItems: "center",
            }}
            maxHeight={300} />)}/>

            {/* Estilização da minha mensagem de erro */}
            {errors.nomeReceita && <Text style = {style.labelError}>{errors.nomeReceita?.message}</Text>} 
        </View>

        <View>
          {/* Passei meu text input para dentero do controller */}
          <Controller
          control = {control}
          name = "valorReceita"
          render = {({field :{onChange, value}}) => (
            <TextInput
            style={{height: 45, marginBottom: 10 }}
            mode="outlined"
            outlineStyle={{
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 1.2,
              borderWidth: errors.Descricao && 3,
              borderColor: errors.Descricao && "red",
            }}
            onChangeText={onChange}
            value = {value}
            keyboardType="phone-pad"
            // value={Text}
            // placeholder = 'Valor'
            label="Valor"
            // value={valor}
            // onChangeText={(text) => setValor(text)}
            activeOutlineColor="#75B700"
            inputStyles={{ fontSize: 15, color: "#828387" }} />
          )}/>
          {errors.valorReceita && <Text style = {style.labelError}>{errors.valorReceita?.message}</Text>} 
        </View>

        <View>
        <Controller
          control = {control}
          name = "Descricao"
          render = {({field :{onChange, value}}) => (          
          <TextInput
            style={{ marginBottom: 10, height: 45,}}
            onChangeText={onChange}
            value = {value}
            //descriptionHeight 
            outlineStyle={{
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 1.2,
              color: "#828387",

              borderWidth: errors.Descricao && 3,
              borderColor: errors.Descricao && "red",
            }}
            mode="outlined"
            // value={Text}
            // multiline
            // onContentSizeChange={(e) => {
            //   setDescriptionHeight(e.nativeEvent.contentSize.height);
            // }}
            // placeholder = 'Decrição'
            // value={descricao}
            // onChangeText={(text) => setDescricao(text)}
            label="Descrição"
            activeOutlineColor="#75B700"
            inputStyles={{ fontSize: 15, color: "#828387" }} />)}/>
            {errors.Descricao && <Text style = {style.labelError}>{errors.Descricao?.message}</Text>} 
        </View>
          

        <Controller
          control = {control}
          name = "Date"
          render = {({field :{onChange, value}}) => (
            <SafeAreaProvider>
            <View style={style.inputDate}>
              <DatePickerInput
                outlineStyle={{
                  borderRadius: 10,
                  backgroundColor: "white",
                  borderWidth: 1.2,

                  borderWidth: errors.Descricao && 3,
                  borderColor: errors.Descricao && "red",
                }}
                locale="en-GB"
                label="Data"
                onChange={(d) => onChange(d)}
                value={value}
                inputMode="start"
                style={{ height: 45 }}
                mode="outlined"
                activeOutlineColor="#75B700"
                presentationStyle="overFullScreen"
                transparent={false} />
                {/* {errors.Date && <Text style = {style.labelError}>{errors.Date?.message}</Text>} */}
            </View>
 
            </SafeAreaProvider>
          )}/>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            width: 250,
            borderWidth: 0,
            borderRadius: 10,

            marginTop: 65,
            padding: 10,

            backgroundColor: "white",
          }}
        >
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            } }
            color="green" />
          <Text>Lembrete</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
            <View style={style.Button}>
              <Text>Adicionar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View></>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: "#f7f7f7",
  },

  input: {
    marginBottom: 10
  },

  inputDate: {
    height: 45,
    marginBottom: 10
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#75B700",
    borderRadius: 13,
    width: 103,
    height: 59,
    marginTop: 150,
  },

  labelError: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 8
  }
  
});

export default NovaReceita;