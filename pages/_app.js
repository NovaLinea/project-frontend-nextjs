import '../styles/globals.scss'
import { Header } from '../components/Header';
import { MainLayout } from '../components/MainLayout';
import { wrapper } from '../redux/store';


function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}

export default wrapper.withRedux(App);
