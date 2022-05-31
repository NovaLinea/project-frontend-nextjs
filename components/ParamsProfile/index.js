import { useRef } from 'react';
import styles from "./ParamsProfile.module.scss";
import { Snackbar } from "../UI/Snackbar";


const ParamsProfile = ({countProjects, params}) => {
    const snackbarRef = useRef(null);

    return (
        <div className={styles.profile__params}>
            <div className={styles.params__item}>
                <p>Проектов</p>
                <p>{countProjects}</p>
            </div>

            <div className={styles.params__item}>
                <p>Подписчиков</p>
                <p>{params.follows}</p>
            </div>

            <div className={styles.params__item}>
                <p>Подписок</p>
                <p>{params.followings}</p>
            </div>

            <Snackbar ref={snackbarRef} />
        </div>
    );
}

export default ParamsProfile;