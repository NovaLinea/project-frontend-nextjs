import '../styles/globals.scss'
import { Header } from '../components/Header';
import { MainLayout } from '../components/MainLayout';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import AuthService from '../API/AuthService';
import { setUserData } from '../redux/slices/user';
import NextNProgress from "nextjs-progressbar";


function App({ Component, pageProps }) {
    return (
        <>
            <NextNProgress
                color="#1e2d43"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />

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
