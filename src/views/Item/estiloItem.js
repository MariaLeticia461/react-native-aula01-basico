import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    borda: {
        backgroundColor: '#D2B48C',
        width: '80%',
        height: '35%',
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
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#936138',
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
});

export default estiloItem;