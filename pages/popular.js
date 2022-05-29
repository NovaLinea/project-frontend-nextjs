import { useState, useEffect } from 'react'
import Head from 'next/head';
import styles from "../styles/Popular.module.scss";
import ProjectService from '../API/ProjectService';
import { ListProjects } from '../components/ListProjects';


export default function Popular() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects();
    }, [])

    async function fetchProjects() {
        try {
            const response = await ProjectService.fetchProjectsPopular();
            
            if (response.data) {
                setProjects(response.data);
            }
        } catch (e) {
            console.log('Ошибка при получении проектов');
        }
    }

    return (
        <div className={styles.popular}>
            <Head>
                <title>Популярное</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ListProjects projects={projects} />
        </div>
    );
}