import { object, string } from 'yup';


let userSchema = object({
    email: string().email().required('campo obrigatório!'),
    password: string().required('campo obrigatório!')
})

export default userSchema;