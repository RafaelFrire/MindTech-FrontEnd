import { View, Text, TextInput, Pressable, TouchableOpacity } from "react-native"
import Styles from './style'
import LogoBear from "../logoTipo"
import userSchema from './Schema'
import {useForm, Controller} from 'react-hook-form'
import { User } from "@/app/types/user" 

const form = () =>{
    
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm<User>({
        defaultValues:{
            email: '',
            password: '',
        }
    })

    const onSubmit = (data:User) => console.log('teste', data)
    


    return(
        <View style={Styles.formContainer} >
            <LogoBear />

        <View style={Styles.formContext}>
            <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                placeholder="name@email.com"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={Styles.InputBox} 
                />
            )}
            name="email"
        />
      {errors.email && <Text style={Styles.labelError}>Campo obrigatório</Text>}

      <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                placeholder="password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={Styles.InputBox} 
                />
            )}
            name="password"
        />
        {errors.password && <Text style={Styles.labelError}>Campo obrigatório</Text>}
      <Text style={Styles.label}>Cadastrar</Text>
                <TouchableOpacity style={Styles.Button} onPress={handleSubmit(onSubmit)}>
                    <Text style={Styles.InputText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default form