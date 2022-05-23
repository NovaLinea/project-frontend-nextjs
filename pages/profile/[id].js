import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Profile() {
    const router = useRouter();

    return (
        <div className='profile'>
            <Head>
                <title>Профиль</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Профиль {router.query.id}</h1> 
        </div>
    );
}