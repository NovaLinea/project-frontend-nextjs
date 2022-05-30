import * as yup from "yup"

export const LoginFormSchema = yup.object({
    email: yup.string().email('Неверная почта').required('Почта обязательная'),
    password: yup.string().min(6, "Пароль не менее 6 символов").required('Пароль обязательный'),
});

export const RegisterFormSchema = yup.object({
    name: yup.string().max(30, 'Не более 30 символов').required('Имя и фамилия обязательны')
}).concat(LoginFormSchema);