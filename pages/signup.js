import { useState, useContext } from 'react'
import { Context } from "../contexts/AuthContext";
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router';
import clsx from "clsx"
import styles from "../styles/Signup.module.scss";
import { IoMdArrowBack } from "react-icons/io";
import { Input } from '../components/UI/Input';
import { Button } from '../components/UI/Button';

export default function Signup() {
    const {store} = useContext(Context);
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        if (name === '' || email === '' || password === '') {
            //showSnackbar('Вы заполнили не все поля', 'error');
        }
        else {
            store.signup(name, email, password);
            setEmail('');
            setName('');
            setPassword('');
        }
	}

    return (
        <div className={styles.signup}>
            <Head>
				<title>Регистрация</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Link href="/">
                <IoMdArrowBack className={clsx(styles.back, 'fw-bold')} />
            </Link>

            <div className={styles.form}>
                <h2>Регистрация</h2>

                <Input 
                    value={name} 
                    onChange={e => setName(e.target.value)}    
                    placeholder='Имя и фамилия' 
                />
                <br/>
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
                <Button mode='fill' onClick={signUp}>Зарегестрироваться</Button>

                <p>Есть аккаунт? <span onClick={() => router.push("/signin")}>Войти</span></p>
            </div>
        </div>
    );
}