import Head from 'next/head'

export default function Home() {
    return(
        <div className='home'>
            <Head>
                <title>Домашняя</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}