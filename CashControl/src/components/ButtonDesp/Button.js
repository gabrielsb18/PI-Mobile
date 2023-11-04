import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import ListagemDespEResp from '../../../Screens/ListagemDespEResp/ListagemDespEResp';
import { useNavigation } from '@react-navigation/native';

export default function Button_Desp_e_Rec () {

    const [fontsLoaded] = useFonts({
    InterMedium:require('../../../assets/Fonts/InterMedium.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    
    const navigation = useNavigation()

    return (
        <View style={styles.viewreceitas}>
            <TouchableOpacity onPress= {() => navigation.navigate('ListagemDespesasEReceitas') }>
                <View style={styles.receitas}>
                    <Text style = {{fontSize: 20, alignItems:'center',fontFamily: 'InterMedium'}}>Despesas e Receitas</Text>
                    <Image
                    source = {require('../../../assets/Images/seta.png')} style = {styles.imgSeta}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
    viewreceitas:{
        width: '84%',
        height: '12%',
        marginTop: -20 /*margin do topo*/
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
});