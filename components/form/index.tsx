import { View, Text, TextInput, Pressable } from "react-native"
import Styles from './style'
import LogoBear from "../logoTipo"


const form = () =>{
    return(
        <View style={Styles.formContainer}>
            <LogoBear />
            <View style={Styles.formContext}>
                <TextInput style={Styles.InputBox}>
                    <Text style={Styles.InputText}>Ex: name@email.com</Text>
                </TextInput>
                <TextInput style={Styles.InputBox} >
                    <Text style={Styles.InputText}>Ex: ABC@2024</Text>
                </TextInput>
                <Text style={Styles.label}>cadastrar</Text>
                <Pressable style={Styles.Button}>
                    <Text style={Styles.textButton}>Entrar</Text>
                </Pressable>
            </View>
        </View>
    )
}


export default form