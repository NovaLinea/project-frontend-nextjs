import '../styles/globals.scss'
import { Header } from '../components/Header';
import { MainLayout } from '../components/MainLayout';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import AuthService from '../API/AuthService';
import { setUserData } from '../redux/slices/user';


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

App.getInitialProps = wrapper.getInitialAppProps(store => async ({ctx, Component}) => {
    try {
		const {token} = parseCookies(ctx);
		const userData = await AuthService.refresh(token);
		store.dispatch(setUserData(userData.data));
	} catch (e) {
		console.log(e);
	}

    return {
        pageProps: Component.getInitialProps ? await Component.getInitialProps({... ctx, store}) : {},
    };
})

export default wrapper.withRedux(App);
