import Head from 'next/head'

export default function Popular() {
    return(
        <div className='popular'>
            <Head>
				<title>Популярное</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <h1>Популярные проекты</h1> 
        </div>
    );
}