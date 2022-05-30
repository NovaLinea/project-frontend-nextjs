import * as yup from "yup"

export const MainDataUser = yup.object({
    name: yup.string().max(30, 'Не более 30 символов').required('Имя и фамилия обязательны'),
    email: yup.string().email('Неверная почта').required('Почта обязательная'),
    description: yup.string().max(150, 'Не более 150 символов')
});

export const ChangePassword = yup.object({
    oldPassword: yup.string().min(6, "Пароль не менее 6 символов").required('Пароль обязательный'),
    newPassword: yup.string().min(6, "Пароль не менее 6 символов").required('Пароль обязательный'),
    newConfirmPassword: yup.string().min(6, "Пароль не менее 6 символов").required('Пароль обязательный'),
});