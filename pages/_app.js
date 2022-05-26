import { useContext, useEffect } from 'react'
import { Context } from "../contexts/AuthContext";
import '../styles/globals.scss'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { MainLayout } from '../components/MainLayout';


function MyApp({ Component, pageProps }) {
    const {store} = useContext(Context);

    useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth()
		}
	}, [])

    return (
        <Context.Provider value={{
            store
        }}>
            <Header />

            {store.isAuth &&
                <Sidebar />
            }
            
            <MainLayout auth={store.isAuth}>
                <Component {...pageProps} />
            </MainLayout>
        </Context.Provider>
    );
}

export default MyApp
