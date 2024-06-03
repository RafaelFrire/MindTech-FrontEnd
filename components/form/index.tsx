import { View, Text, TextInput, Pressable } from "react-native"
import Styles from './style'


const form = () =>{
    return(
        <View style={Styles.formContainer}>
            <View style={Styles.formContext}>
                <TextInput style={Styles.InputBox}>
                    <Text style={Styles.InputText}>Ex: name@email.com</Text>
                </TextInput>
        
                <TextInput style={Styles.InputBox}>
                    <Text style={Styles.InputText}>Ex: ABC@2024</Text>
                </TextInput>
                <Pressable style={Styles.Button}>
                    <Text>Entrar</Text>
                </Pressable>
            </View>
        </View>
    )
}


export default form