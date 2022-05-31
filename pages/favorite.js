import { useRef } from 'react'
import Head from 'next/head'
import styles from "../styles/Favorite.module.scss"
import { Api } from '../utils/api';
import { Snackbar } from "../components/UI/Snackbar";
import { ListProjects } from '../components/ListProjects';


const Favorite = ({projects, likesFavorites, error}) => {
    const snackbarRef = useRef(null);

    return (
        <div className={styles.favorite}>
            <Head>
                <title>Избранное</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {projects
                ? <ListProjects projects={projects} likesFavorites={likesFavorites} />
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
        let likesFavorites;

        if (user.data) {
            likesFavorites = await Api(ctx).user.getLikesFavorites(user.data.id);
        }

        return {
            props: {
                projects: projects.data,
                likesFavorites: user.data ? likesFavorites.data ? likesFavorites.data : {
                    'likes': [],
                    'favorites': []
                } : {
                    'likes': [],
                    'favorites': []
                },
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