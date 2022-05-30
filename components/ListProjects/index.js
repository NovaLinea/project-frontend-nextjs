import { useState, useEffect, useRef } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import UserService from '../../API/UserService';
import styles from "./ListProjects.module.scss";
import { ProjectItem } from './ProjectItem';
import { Loader } from '../UI/Loader';
import { Snackbar } from "../UI/Snackbar";


export function ListProjects({projects}) {
    const userData = useAppSelector(selectUserData);
    const snackbarRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        if (userData)
            fetchLikesFavorites();
        else
            setIsLoading(false);
    }, [])

    async function fetchLikesFavorites() {
        try {
            const response = await UserService.fetchLikesFavorites(userData.id);
            
            if (response.data) {
                if (response.data.favorites !== null)
                    setFavorites(response.data.favorites);

                if (response.data.likes !== null)
                    setLikes(response.data.likes);
            }
        } catch (e) {
            console.log('Ошибка при получении данных о лайках и избранном');
            //snackbarRef.current.show('Ошибка при получении данных о лайках и избранном', 'error');
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <Loader/>
            </div>
        );
    }

    return (
        <div className={styles.projects}>
            {projects.map(project => 
                <ProjectItem key={project.id} project={project} listLikes={likes} listFavorites={favorites} />
            )}

            <Snackbar ref={snackbarRef} />
        </div>
    );
}