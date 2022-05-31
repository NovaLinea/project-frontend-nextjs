import { useRef } from 'react'
import Head from 'next/head'
import styles from "../styles/Favorite.module.scss"
import { Api } from '../utils/api';
import { Snackbar } from "../components/UI/Snackbar";
import { ListProjects } from '../components/ListProjects';


const Favorite = ({projects, error}) => {
    const snackbarRef = useRef(null);

    return (
        <div className={styles.favorite}>
            <Head>
                <title>Избранное</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {projects
                ? <ListProjects projects={projects} />
                : <p className={styles.empty}>У вас нет избранных проектов</p>
            }

            <Snackbar ref={snackbarRef} />
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    try {
        const user = await Api(ctx).auth.getMe();
        const projects = await Api().project.getFavorites(user.data.id);

        return {
            props: {
                projects: projects.data,
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

export default Favorite;