import { useState, useEffect, useRef } from 'react'
import Head from 'next/head';
import styles from "../styles/Popular.module.scss";
import ProjectService from '../API/ProjectService';
import { Snackbar } from "../components/UI/Snackbar";
import { ListProjects } from '../components/ListProjects';


export default function Popular({projects, error}) {
    const snackbarRef = useRef(null);

    if (error) {
        console.log(error)
        //snackbarRef.current.show(error, 'error');
    }

    return (
        <div className={styles.popular}>
            <Head>
                <title>Популярное</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {projects &&
                <ListProjects projects={projects} />
            }
            
            <Snackbar ref={snackbarRef} />
        </div>
    );
}

export async function getStaticProps(context) {
    try {
        const response = await ProjectService.fetchProjectsPopular();

        return {
            props: {
                projects: response.data,
                error: 'Ошибка при получении проектов'
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