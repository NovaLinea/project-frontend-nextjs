import { wrapper } from '../redux/store'
import { parseCookies } from 'nookies';
import Popular from './popular'
import AuthService from '../API/AuthService';
import { setUserData } from '../redux/slices/user';


export default function Home() {
	return (
		<Popular/>
	);
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	try {
		const {token} = parseCookies(ctx);

		const userData = await AuthService.refresh(token);
		console.log(userData.data)
		store.dispatch(setUserData(userData.data));
		
		return { props: {} };
	} catch (e) {
		console.log(e);
		return { props: {} };
	}
});