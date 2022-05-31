import { useRef } from 'react'
import Head from 'next/head'
import styles from "../styles/Home.module.scss"
import { Api } from '../utils/api';
import { Snackbar } from "../components/UI/Snackbar";
import { ListProjects } from '../components/ListProjects';


const Home = ({projects, error}) => {
    const snackbarRef = useRef(null);

    return (
        <div className={styles.home}>
            <Head>
                <title>Домашняя</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {projects
                ? <ListProjects projects={projects} />
                : <p className={styles.empty}>К сожалению ваша лента пуста</p>
            }

            <Snackbar ref={snackbarRef} />
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    try {
        const user = await Api(ctx).auth.getMe();
        const response = await Api(ctx).project.getHome(user.data.id);
        
        return {
            props: {
                projects: response.data,
            },
        }
    } catch (e) {
        return {
            props: {
                error: 'Ошибка при получении проектов'
            },
        }
    }
}

export default Home;