import { useState, useRef } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../../styles/Profile.module.scss';
import { Api } from '../../utils/api';
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";
import { BiImage } from "react-icons/bi";
import ParamsProfile from '../../components/ParamsProfile';
import { ListProjects } from '../../components/ListProjects';
import { Button } from "../../components/UI/Button"
import { Snackbar } from "../../components/UI/Snackbar";
import Avatar from '@mui/material/Avatar';


const Profile = ({projects, likesFavorites, userData, dataProfile, params, error}) => {
    const snackbarRef = useRef(null);
    const router = useRouter();
    const [modeSubscribe, setModeSubscribe] = useState(false);
    const [followings, setFollowings] = useState([]);
    const [photo, setPhoto] = useState(null);

    async function subscribeUser() {
        try {
            if (userData) {
                if (followings.indexOf(router.query.id) != -1) {
                    const temp = [...followings];
                    temp.splice(router.query.id, 1);
                    setFollowings(temp);
                    setModeSubscribe(false);
                    await Api().user.unsubscribe(userData.id, router.query.id);
                }
                else {
                    setFollowings([...followings, router.query.id]);
                    setModeSubscribe(true);
                    await Api().user.subscribe(userData.id, router.query.id);
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
                        <h3 className={styles.name}>{dataProfile.name}</h3>
                        <p className={styles.description}>{dataProfile.description}</p>
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

            <ParamsProfile countProjects={projects.length} params={params}/>

            <div className={styles.profile__content}>
                {projects.length
                    ? <ListProjects projects={projects} likesFavorites={likesFavorites} />
                    : <p className={styles.empty}>Пока нет проектов</p>
                }
            </div>

            <Snackbar ref={snackbarRef} />
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    try {
        const user = await Api(ctx).auth.getMe();
        const projects = await Api(ctx).project.getProjectsUser(ctx.params.id);
        const params = await Api(ctx).user.getParams(ctx.params.id);
        let dataProfile;
        let likesFavorites;

        if (user.data && user.data.id === ctx.params.id) {
            dataProfile = user;
        }
        else {
            dataProfile = await Api(ctx).user.getData(ctx.params.id);
        }

        if (user.data) {            
            likesFavorites = await Api(ctx).user.getLikesFavorites(user.data.id);
        }

        return {
            props: {
                projects: projects.data ? projects.data : [],
                userData: user.data,
                dataProfile: dataProfile.data,
                params: params.data,
                likesFavorites: user.data ? likesFavorites.data ? likesFavorites.data : {
                    'likes': [],
                    'favorites': []
                } : {
                    'likes': [],
                    'favorites': []
                },
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

export default Profile;