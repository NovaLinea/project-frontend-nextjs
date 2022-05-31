import { useRef } from 'react'
import Head from 'next/head';
import styles from "../styles/Popular.module.scss";
import { Api } from '../utils/api';
import { Snackbar } from "../components/UI/Snackbar";
import { ListProjects } from '../components/ListProjects'


const Popular = ({projects, likesFavorites, error}) => {
    const snackbarRef = useRef(null);

    const showSnackbar = (message, type) => {
        console.log(snackbarRef)
        //snackbarRef.current.show(message, type);
    }

    if (error) {
        showSnackbar(error, 'error')
    }

    return (
        <div className={styles.popular}>
            <Head>
                <title>Популярное</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {projects &&
                <ListProjects projects={projects} likesFavorites={likesFavorites} />
            }
            
            <Snackbar ref={snackbarRef} />
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    try {
        const user = await Api(ctx).auth.getMe();
        const projects = await Api().project.getPopular();
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

export default Popular;