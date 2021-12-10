import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estiloItem from './estiloItem';

function Item({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}>Quem é Skylab?</Text>

                <Text style={estiloItem.paragrafo}> Seu estilo musical único é caracterizado pelo minimalismo e pelo ecletismo, e suas letras são permeadas de mordazes alusões à cultura popular, pessimismo, escatologia, niilismo e humor ácido (ele, porém, sempre negou com veemência que suas canções possuem fins cômicos). </Text>
                <Text style={estiloItem.paragrafo}> </Text> 
                <Text style={estiloItem.paragrafo}> Rogério Tolomei Teixeira, mais conhecido por seu nome artístico Rogério Skylab, é um cantor, compositor, violonista, letrista, poeta, ensaísta, ator, ex-apresentador de televisão, ex-bancário e produtor de discos brasileiro. </Text> 
                <Text style={estiloItem.paragrafo}> </Text> 
                <Text style={estiloItem.paragrafo}> O crítico musical Regis Tadeu assim o definiu: "Skylab é um exemplo inteligente de como dois elementos – “baixarias” e “sacanagens” – podem funcionar e fazer pensar. Unindo um esquisito lirismo politicamente incorreto levado a graus verborrágicos extremos a um som frequentemente pesado e intenso, Skylab destila sua acidez mórbida com uma fisionomia tão insana quanto divertida". </Text>

                <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <Text style={estiloItem.paragrafo}> </Text> 
            <img src="https://www.diariodocentrodomundo.com.br/wp-content/uploads/2018/06/skylab-1-600x332.jpg" witdh="400px" height="400px"/>
        </View>
    )
}
export default Item;