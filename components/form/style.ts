import { StyleSheet } from "react-native";



const Styles = StyleSheet.create({
    formContainer:{
        backgroundColor: '#F5F5F5',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContext:{
        width: '90%',
        height: 'auto',
        paddingLeft: 10,
        paddingTop: 30
    },
    InputBox:{
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white'
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
        backgroundColor: 'black',
        borderRadius: 4,
        color: 'white'
    }
})


export default Styles