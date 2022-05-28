import Head from 'next/head'
import Link from "next/link";
import clsx from "clsx"
import { setCookie } from "nookies";
import { useRouter } from 'next/router';
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import styles from "../styles/Auth.module.scss";
import AuthService from '../API/AuthService';
//import { useAppDispatch } from '../redux/hooks';
//import { setUserData } from '../redux/slices/user';
import { RegisterFormSchema } from "../utils/authValidation";
import { IoMdArrowBack } from "react-icons/io";
import { Button } from '../components/UI/Button';
import { FormField } from '../components/FormField'


export default function Register() {
    //const dispatch = useAppDispatch();
    const router = useRouter();
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema)
    });

    async function registerUser(data) {
        try {
            const response = await AuthService.register(data);
            setCookie(null, 'token', response.data.accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
            //dispatch(setUserData(response.data));
            router.push("/");
        } catch (e) {
            if (e.response)
                console.log(e.response.data.message)
        }
	}

    return (
        <div className={styles.auth}>
            <Head>
				<title>Регистрация</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Link href="/">
                <a>
                    <IoMdArrowBack className={clsx(styles.back, 'fw-bold')} />
                </a>
            </Link>

            <FormProvider {... form}>
                <form className={styles.form} onSubmit={form.handleSubmit(registerUser)}>
                    <h2>Регистрация</h2>

                    <FormField name='name' label='Имя и фамилия' type='text' />
                    <FormField name='email' label='Почта' type='text' />
                    <FormField name='password' label='Пароль' type='password' />

                    <Button 
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
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