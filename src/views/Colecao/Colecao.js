import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}>Bibliografia</Text>

                <Text style={estiloColecao.paragrafo}> Rogério Tolomei Teixeira nasceu no Rio de Janeiro em 2 de setembro de 1956, e é de ascendência italiana e portuguesa. Formou-se em Letras e em Filosofia pela Universidade Federal do Rio de Janeiro, e também iniciou um curso de Direito, mas nunca o concluiu. Antes de abraçar a carreira musical trabalhou como funcionário de uma agência do Banco do Brasil em Maracaju, Mato Grosso do Sul, por 28 anos. </Text>
                <Text style={estiloColecao.paragrafo}> </Text>
                <Text style={estiloColecao.paragrafo}> Em 1991 participou de um festival de música em Juiz de Fora, Minas Gerais; ganhou o prêmio em dinheiro do primeiro lugar com a canção "Samba do Skylab" (da qual retirou seu nome artístico), utilizando-o para financiar a gravação de seu álbum de estreia, Fora da Grei, no ano seguinte; o álbum foi muito bem-recebido pela crítica, e lhe rendeu muitas aparições nos talk shows de Jô Soares Jô Soares Onze e Meia e Programa do Jô ao decorrer dos anos 1990. </Text>
                <Text style={estiloColecao.paragrafo}> </Text>
                <Text style={estiloColecao.paragrafo}> Em 15 de novembro de 2017 Skylab disponibilizou por intermédio de serviços de streaming como o Deezer, Spotify e iTunes um pequeno EP, intitulado Skylab (EP), de três faixas, que conta com a participação da dupla paulistana de noise rock/música experimental Farme&Hixizine e do músico eletrônico carioca Cadu Tenório. Das três faixas do EP, apenas uma ("Bocetinha de Cocô") foi escrita por Skylab; as outras duas ("Let's Play That" e "Pra Dizer Adeus") são poemas de autoria de Torquato Neto musicados por outros artistas, respectivamente Jards Macalé e Edu Lobo. </Text> 
                <Text style={estiloColecao.paragrafo}> </Text>
                <Text style={estiloColecao.paragrafo}> Em 7 de março de 2018, Skylab anunciou que começou a trabalhar num novo álbum de estúdio, intitulado O Rei do Cu, lançado em 17 de maio de 2018. Mais tarde, em 2 de abril, postou em sua página oficial no SoundCloud um trecho de uma das canções que seriam incluídas no álbum, "Dedo no Cu e Gritaria". Numa postagem em sua página do Facebook ele veio a elaborar que O Rei do Cu seria a primeira parte de uma nova trilogia, a "Trilogia do Cu". A segunda parte, Nas Portas do Cu, foi lançada em 1º de janeiro de 2019. A terceira parte, Crítica da Faculdade do Cu, foi lançada em 20 de dezembro de 2019. </Text> 
                <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
            <Text style={estiloColecao.paragrafo}> </Text>
            <img src="https://www.pjf.mg.gov.br/noticias/arquivo/142552.jpg" witdh="400px" height="400px"/>
        </View>
    )
}
export default Colecao;