import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Project() {
    const router = useRouter();

    return(
        <div className='project'>
            <Head>
				<title>Проект</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <h1>Проект {router.query.id}</h1> 
        </div>
    );
}