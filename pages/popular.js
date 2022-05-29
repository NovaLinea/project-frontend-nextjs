import { useState, useEffect, useRef } from 'react'
import Head from 'next/head';
import styles from "../styles/Popular.module.scss";
import ProjectService from '../API/ProjectService';
import { Snackbar } from "../components/UI/Snackbar";
import { ListProjects } from '../components/ListProjects';


export default function Popular() {
    const [projects, setProjects] = useState([])
    const snackbarRef = useRef(null);

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
            snackbarRef.current.show('Ошибка при получении проектов', 'error');
        }
    }

    return (
        <div className={styles.popular}>
            <Head>
                <title>Популярное</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ListProjects projects={projects} />
            <Snackbar ref={snackbarRef} />
        </div>
    );
}