import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloColecao from '../Colecao/estiloColecao';
import estiloPerfil from './estiloPerfil';

function Perfil ({ navigation }) {
    const voltar = () => {
        navigation.goBack();
    }


return (
    <View style={estiloPerfil.container}>
        <View style={estiloPerfil.borda}>
            <Text style={estiloPerfil.texto}> Sobre Nós </Text>
            
            <Text style={estiloPerfil.paragrafo}> Somos um grupo de fãs entusiastas do artista Rogério Skylab de uma longa data. </Text>
            <Text style={estiloPerfil.paragrafo}> </Text> 
            <Text style={estiloPerfil.paragrafo}> Conhecemos esse compositor depois de descobrir que o tal fazeria um show em nossa cidade, e assim que nos reunimos para ver suas obras nos apaixonamos pelos seus feitos. </Text>
            <Text style={estiloPerfil.paragrafo}> </Text> 
            <Text style={estiloPerfil.paragrafo}> Desde então, montamos um dos maiores fãnclubes do Skylab, fazendo redes sociais e até o próprio site para que novas pessoas descubram esse cantor e se reunam para conversar sobre. </Text> 

            <TouchableOpacity style={estiloPerfil.botaoContainer} onPress={voltar}>
                <Text style={estiloPerfil.botaoTexto}>Voltar </Text> 
            </TouchableOpacity>
            </View>
            <Text style={estiloPerfil.paragrafo}> </Text> 
            <img src="https://lh3.googleusercontent.com/proxy/lsodSMA3Ysy_wedTuyauO-sqzWL9teHINgQApYmVlOfxwvHHHQ4Dk4fA0tcu6Vb_MsZL-jLCI0F_99s5f5mgU7mGdQZ6NYZ70ocIOl1nfeFKq-B52YYBaY2XR1j0b_bHqd8" witdh="400px" height="400px"/>
    </View>
)
}
export default Perfil;
