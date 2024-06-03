import { View, Text, TextInput, Pressable } from "react-native"
import Styles from './style'
import LogoBear from "../logoTipo"
import userSchema from './Schema'
import {useForm, useController} from 'react-hook-form'
import { User } from "@/app/types/user" 

const form = () =>{
    
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm<User>({
        defaultValues:{
            email: '',
            password: ''
        }
    })

    const onSubmit = (data:User) => console.log(data)
    


    return(
        <View style={Styles.formContainer} >
            <LogoBear />
            <View style={Styles.formContext}>
                <TextInput style={Styles.InputBox}>
                    <Text style={Styles.InputText}>Ex: name@email.com</Text>
                </TextInput>
                <TextInput style={Styles.InputBox} >
                <Text style={Styles.InputText}>ex: abc@2024</Text>
                </TextInput>
                <Text style={Styles.label}>cadastrar</Text>
                <Pressable style={Styles.Button} >
                    <Text style={Styles.textButton}>Entrar</Text>
                </Pressable>
            </View>
        </View>
    )
}


export default form