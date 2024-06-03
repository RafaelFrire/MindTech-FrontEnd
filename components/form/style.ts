import { StyleSheet } from "react-native";



const Styles = StyleSheet.create({
    formContainer:{
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContext:{
        width: '90%',
        height: 'auto',
        paddingLeft: 10,
        paddingTop: 10
    },
    InputBox:{
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#F0F0F0',
    },
    InputText:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    Button:{
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        paddingVertical: 12,
        backgroundColor: '#F97069',
        borderRadius: 50,
        color: 'white'
    },
    label:{
        textAlign: 'center',
        margin: 15,
        fontSize: 15,
        color: 'black'
    },
    textButton:{
        color:'white',
        fontWeight: '900',
        fontSize: 18
    }
})


export default Styles