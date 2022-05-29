import { useRef } from 'react';
import Head from 'next/head';
import { Snackbar } from "../components/UI/Snackbar";


export default function Messages() {
    const snackbarRef = useRef(null);

    return (
        <div className='messages'>
            <Head>
                <title>Сообщения</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Snackbar ref={snackbarRef} />
        </div>
    );
}