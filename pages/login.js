import { useState, useContext, useRef } from 'react'
import { Context } from "../contexts/AuthContext"
import Head from 'next/head'
import Link from "next/link"
import clsx from "clsx"
import { useRouter } from 'next/router'
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import styles from "../styles/Auth.module.scss"
import { LoginFormSchema } from "../utils/schemas/authValidation";
import { IoMdArrowBack } from "react-icons/io"
import { Button } from '../components/UI/Button'
import { Snackbar } from '../components/UI/Snackbar'
import { FormField } from '../components/FormField'


export default function Login() {
    const {store} = useContext(Context)
    const router = useRouter()
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema)
    });
    const snackbarRef = useRef(null)
    const [messageSnackbar, setMessageSnackbar] = useState("")
    const [modeSnackbar, setModeSnackbar] = useState("")

    const onSubmit = (data) => console.log(data);

    async function loginUser(data) {
        const err = await store.signin(data.email, data.password)
        
        if (err) {
            showSnackbar(err, "error")
        }
        else {
            router.push("/")
        }
	}

    const showSnackbar = (message, mode) => {
        setMessageSnackbar(message);
        setModeSnackbar(mode)
        snackbarRef.current.show();
    }

    return (
        <div className={styles.auth}>
            <Head>
				<title>Вход</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Link href="/">
                <IoMdArrowBack className={clsx(styles.back, 'fw-bold')} />
            </Link>

            <FormProvider {... form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                    <h2>Вход</h2>

                    <FormField name='email' label='Почта' type='text' />
                    <FormField name='password' label='Пароль' type='password' />

                    <Button 
                        disabled={!form.formState.isValid}
                        mode='fill' 
                        type='submit'
                    >
                        Войти
                    </Button>

                    <p className={styles.change}>Нет аккаунта? <span onClick={() => router.push('/register')}>Регистрация</span></p>
                </form>
            </FormProvider>

            <Snackbar ref={snackbarRef} message={messageSnackbar} mode={modeSnackbar} />
        </div>
    );
}