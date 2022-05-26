import { useState, useContext } from 'react'
import { Context } from "../contexts/AuthContext";
import Head from 'next/head'
import Link from "next/link";
import clsx from "clsx"
import { useRouter } from 'next/router';
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import styles from "../styles/Auth.module.scss";
import { RegisterFormSchema } from "../utils/schemas/authValidation";
import { IoMdArrowBack } from "react-icons/io";
import { Button } from '../components/UI/Button';
import { FormField } from '../components/FormField'

export default function Register() {
    const {store} = useContext(Context);
    const router = useRouter();
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema)
    });
    const [name, setName] = useState('');

    const onSubmit = (data) => console.log(data);

    const registerUser = (data) => {
        store.signup(data.fullname, data.email, data.password);
	}

    return (
        <div className={styles.auth}>
            <Head>
				<title>Регистрация</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Link href="/">
                <IoMdArrowBack className={clsx(styles.back, 'fw-bold')} />
            </Link>

            <FormProvider {... form}>
                <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
                    <h2>Регистрация</h2>

                    <FormField name='fullname' label='Имя и фамилия' type='text' />
                    <FormField name='email' label='Почта' type='text' />
                    <FormField name='password' label='Пароль' type='password' />

                    <Button 
                        disabled={!form.formState.isValid}
                        mode='fill' 
                        type='submit'
                    >
                        Зарегистрироваться
                    </Button>

                    <p className={styles.change}>Есть аккаунт? <span onClick={() => router.push("/login")}>Войти</span></p>
                </form>
            </FormProvider>
        </div>
    );
}