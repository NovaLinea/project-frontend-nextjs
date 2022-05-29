import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useAppSelector } from '../redux/hooks';
import { selectUserData } from '../redux/slices/user';
import styles from "../styles/Favorite.module.scss"
import ProjectService from '../API/ProjectService';
import { ListProjects } from '../components/ListProjects';


export default function Favorite() {
    const userData = useAppSelector(selectUserData);
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, [])

    async function fetchProjects() {
        try {
            const response = await ProjectService.fetchFavoritesProjects(userData.id);

            if (response.data)
                setProjects(response.data);
        } catch (e) {
            console.log('Ошибка при получении проектов');
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
        <div className={styles.favorite}>
            <Head>
                <title>Избранное</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {projects.length !== 0
                ? <ListProjects projects={projects} />
                : <p className={styles.empty}>У вас нет избранных проектов</p>
            }
        </div>
    );
}