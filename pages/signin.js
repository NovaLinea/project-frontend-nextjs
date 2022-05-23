import { useState, useContext } from 'react'
import { Context } from "../contexts/AuthContext";
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router';
import clsx from "clsx"
import styles from "../styles/Signin.module.scss";
import { IoMdArrowBack } from "react-icons/io";
import { Input } from '../components/UI/Input';
import { Button } from '../components/UI/Button';


export default function Signin() {
    const {store} = useContext(Context);
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signIn() {
        if (email === '' || password === '') {
            //showSnackbar('Вы заполнили не все поля', 'error');
        }
        else {
            const err = await store.signin(email, password);
            
            if (err) {
                //showSnackbar(err, "error");
            }
            else {
                setEmail('');
                setPassword('');
            }
        }
	}

    return (
        <div className={styles.signin}>
            <Head>
				<title>Вход</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Link href="/">
                <IoMdArrowBack className={clsx(styles.back, 'fw-bold')} />
            </Link>

            <div className={styles.form}>
                <h2>Вход</h2>

                <Input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Почта' 
                />
                <br/>
                <Input 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    placeholder='Пароль' 
                />
                <br/>
                <Button mode='fill' onClick={signIn}>Войти</Button>

                <p>Нет аккаунта? <span onClick={() => router.push('/signup')}>Регистрация</span></p>
            </div>
        </div>
    );
}