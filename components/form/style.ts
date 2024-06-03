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
        paddingTop: 15
    },
    InputBox:{
        padding: 10,
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
    labelError:{
        fontSize: 12,
        paddingBottom: 25

    }
})


export default Styles