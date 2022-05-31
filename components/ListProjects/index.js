import { useRef } from 'react';
import styles from "./ListProjects.module.scss";
import { ProjectItem } from './ProjectItem';
import { Snackbar } from "../UI/Snackbar";


export function ListProjects ({projects, likesFavorites}) {
    const snackbarRef = useRef(null);

    return (
        <div className={styles.projects}>
            {projects.map(project => 
                <ProjectItem 
                    key={project.id} 
                    project={project} 
                    listLikes={likesFavorites.likes} 
                    listFavorites={likesFavorites.favorites}
                />
            )}

            <Snackbar ref={snackbarRef} />
        </div>
    );
}