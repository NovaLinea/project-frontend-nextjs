import Head from 'next/head'

export default function Favorite() {
    return(
        <div className='favorite'>
            <Head>
                <title>Избранное</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}