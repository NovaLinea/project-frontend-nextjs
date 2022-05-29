import { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import styles from '../../styles/Profile.module.scss';
import UserService from '../../API/UserService';
import ProjectService from '../../API/ProjectService';
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";
import { BiImage } from "react-icons/bi";
import { ParamsProfile } from '../../components/ParamsProfile';
import { ListProjects } from '../../components/ListProjects';
import { Button } from "../../components/UI/Button"
import { Loader } from '../../components/UI/Loader';
import Avatar from '@mui/material/Avatar';


export default function Profile() {
    const userData = useAppSelector(selectUserData);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const [projects, setProjects] = useState([]);
    const [modeSubscribe, setModeSubscribe] = useState(false);
    const [followings, setFollowings] = useState([]);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        fetchProjects();

        if (userData) {
            if (userData.id === router.query.id) {
                setData(userData);
                setPhoto(userData.photo);
            }
            else
                fetchData();

            fetchFollowings();
        }
    }, [router.query.id])

    async function fetchData() {
        try {
            setIsLoading(true);
            const response = await UserService.fetchDataProfile(router.query.id);
            
            if (response.data) {
                setData(response.data);
                setPhoto(response.data.photo);
            }
            
        } catch (e) {
            console.log('Ошибка при получении данных пользователя');
        } finally {
            setIsLoading(false);
        }
    }

    async function fetchProjects() {
        try {
            const response = await ProjectService.fetchProjectsUser(router.query.id);
            
            if (response.data) {
                setProjects(response.data);
            }
            else {
                setProjects([]);
            }
        } catch (e) {
            console.log('Ошибка при получении проектов');
        }
    }

    async function fetchFollowings() {
        try {
            const responce = await UserService.fetchListFollowings(userData.id);

            if (responce.data) {
                setFollowings(responce.data);

                if (responce.data.indexOf(router.query.id) != -1)
                    setModeSubscribe(true)
            }
        } catch (e) {
            console.log('Ошибка при получении подписок');
        }
    }

    async function subscribeUser() {
        try {
            if (userData) {
                if (followings.indexOf(router.query.id) != -1) {
                    const temp = [...followings];
                    temp.splice(router.query.id, 1);
                    setFollowings(temp);
                    setModeSubscribe(false);
                    await UserService.unsubscribeUser(userData.id, router.query.id);
                }
                else {
                    setFollowings([...followings, router.query.id]);
                    setModeSubscribe(true);
                    await UserService.subscribeUser(userData.id, router.query.id);
                }
            }
            else
                console.log('Вы не авторизированы в системе');
        } catch (e) {
            console.log('Ошибка при подписке на пользователя');
        }
    }

    const changePhoto = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setPhoto(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
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
        <div className={styles.profile}>
            <Head>
                <title>Профиль</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.profile__card}>
                <div className={styles.information}>
                    <div className={styles.photo__user}>
                        <Avatar 
                            className={styles.photo} 
                            src={photo}
                            variant="square" 
                            sx={{ width: 100, height: 100 }}
                        />

                        <label title="Сменить фото" className={styles.change__photo}>
                            <input type="file" onChange={changePhoto} accept="image/png, image/jpeg" hidden="hidden" />
                            <BiImage />
                        </label>
                    </div>                    

                    <div className={styles.text}>
                        <h3 className={styles.name}>{data.name}</h3>
                        <p className={styles.description}>{data.description}</p>
                    </div>
                </div>
                <div className={styles.action}>
                    {userData &&
                        <>
                            {userData.id === router.query.id
                                ?
                                <Button mode='fill' onClick={() => router.push('/settings')}>
                                    <FiEdit2 className={styles.icon} />
                                    Редактировать
                                </Button>
                                :
                                modeSubscribe
                                    ?
                                    <Button mode='outline' onClick={subscribeUser}>
                                        <FcCheckmark className={styles.icon} />
                                        Подписан
                                    </Button>
                                    :
                                    <Button mode='fill' onClick={subscribeUser}>
                                        <AiOutlineUserAdd className={styles.icon} />
                                        Подписаться
                                    </Button>
                            }
                        </>
                    }
                </div>
            </div>

            <ParamsProfile countProjects={projects.length} userID={router.query.id} />

            <div className={styles.profile__content}>
                {!projects.length
                    ? <p className={styles.empty}>Пока нет проектов</p>
                    : <ListProjects projects={projects} />
                }
            </div>
        </div>
    );
}