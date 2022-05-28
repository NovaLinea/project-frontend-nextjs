import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import UserService from '../../API/UserService';
import styles from "./ParamsProfile.module.scss";


export function ParamsProfile({countProjects, userID}) {
    const router = useRouter();
    const [follows, setFollows] = useState(0);
    const [followings, setFollowings] = useState(0);
    const [modalFollows, setModalFollows] = useState(false);
    const [modalFollowings, setModalFollowings] = useState(false);

    useEffect(() => {
        fetchData();
    }, [router.pathname])

    async function fetchData() {
        try {
            const response = await UserService.fetchDataParams(userID);

            if (response.data) {
                setFollowings(response.data.followings);
                setFollows(response.data.follows);
            }
        } catch (e) {
            console.log('Ошибка при получение параметров профиля');
        }
    }

    return (
        <div className={styles.profile__params}>
            <div className={styles.params__item}>
                <p>Проектов</p>
                <p>{countProjects}</p>
            </div>

            <div onClick={() => setModalFollows(true)} className={styles.params__item}>
                <p>Подписчиков</p>
                <p>{follows}</p>
            </div>

            <div onClick={() => setModalFollowings(true)} className={styles.params__item}>
                <p>Подписок</p>
                <p>{followings}</p>
            </div>
        </div>
    );
}