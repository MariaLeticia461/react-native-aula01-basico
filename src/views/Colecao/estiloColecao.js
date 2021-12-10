import { StyleSheet } from 'react-native';
import estiloInicial from '../Inicial/estiloInicial';

const estiloColecao = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    borda: {
        backgroundColor: '#081a31',
        width: '80%',
        height: '52%',
        borderRadius: 10,
    },

    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#14417b',
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    
    paragrafo: {
        fontSize: 15,
        color: '#FFFFFF',
        marginLeft: 10,
    }

})
export default estiloColecao