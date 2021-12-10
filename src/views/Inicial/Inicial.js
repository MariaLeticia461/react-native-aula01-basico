import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloColecao from '../Colecao/estiloColecao';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }

    const abrirItem = () => {
        navigation.navigate('Item')
    }

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Menu</Text>

                <Text style={estiloInicial.paragrafo}> Conheça mais sobre o Rogério Skylab: </Text>
                <Text style={estiloInicial.paragrafo}>  </Text> 

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirColecao}>
                    <Text style={estiloInicial.botaoTexto}>Bibliografia</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirItem}>
                    <Text style={estiloInicial.botaoTexto}>Sobre</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Inicial;