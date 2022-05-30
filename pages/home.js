import { useState, useRef } from 'react'
import Head from 'next/head'
import { useAppSelector } from '../redux/hooks';
import { selectUserData } from '../redux/slices/user';
import styles from "../styles/Home.module.scss"
import ProjectService from '../API/ProjectService';
import { Snackbar } from "../components/UI/Snackbar";
import { ListProjects } from '../components/ListProjects';


const Home = ({projects, error}) => {
    const userData = useAppSelector(selectUserData);
    const snackbarRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchProjects() {
        try {
            const response = await ProjectService.fetchProjectsHome(userData.id);

            if (response.data)
                setProjects(response.data);
        } catch (e) {
            //snackbarRef.current.show('Ошибка при получении проектов', 'error');
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return (
            <></>
        );
    }

    return (
        <div className={styles.home}>
            <Head>
                <title>Домашняя</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {projects.length === 0
                ? <p className={styles.empty}>К сожалению ваша лента пуста</p>
                : <ListProjects projects={projects} />
            }

            <Snackbar ref={snackbarRef} />
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    try {
        console.log('USER DATA', ctx)
        const response = await Api(ctx).project.getHome();

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