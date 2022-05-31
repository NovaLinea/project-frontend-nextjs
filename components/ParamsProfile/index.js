import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from "./ParamsProfile.module.scss";
import { Api } from '../../utils/api';
import { Snackbar } from "../UI/Snackbar";


export function ParamsProfile({countProjects, userID}) {
    const snackbarRef = useRef(null);
    const router = useRouter();
    const [follows, setFollows] = useState(0);
    const [followings, setFollowings] = useState(0);

    useEffect(() => {
        fetchData();
    }, [router.query.id])

    async function fetchData() {
        try {
            const response = await Api().user.getParams(userID);

            if (response.data) {
                setFollowings(response.data.followings);
                setFollows(response.data.follows);
            }
        } catch (e) {
            snackbarRef.current.show('Ошибка при получение параметров профиля', 'error');
        }
    }

    return (
        <div className={styles.profile__params}>
            <div className={styles.params__item}>
                <p>Проектов</p>
                <p>{countProjects}</p>
            </div>

            <div className={styles.params__item}>
                <p>Подписчиков</p>
                <p>{follows}</p>
            </div>

            <div className={styles.params__item}>
                <p>Подписок</p>
                <p>{followings}</p>
            </div>

            <Snackbar ref={snackbarRef} />
        </div>
    );
}