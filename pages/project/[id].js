import { useEffect, useState } from 'react'
import clsx from 'clsx';
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import styles from "../../styles/Project.module.scss";
import { Api } from '../../utils/api';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineBookmark } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsBookmarkFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import Create from '../create';
import { Button } from '../../components/UI/Button';
import { Loader } from '../../components/UI/Loader';
import { Dropdown, ProgressBar } from 'react-bootstrap';


const Project = ({project, error}) => {
    const userData = useAppSelector(selectUserData);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [likes, setLikes] = useState([]);
    const [countLikes, setCountLikes] = useState(project.likes);
    const [modeLike, setModeLike] = useState(false);
    const [modeFavorite, setModeFavorite] = useState(false);
    const [statusEdit, setStatusEdit] = useState(false);

    useEffect(() => {
        determinateTime(project.created_at);
    }, [])

    async function fetchLikesFavorites() {
        try {
            const response = await Api().user.getLikesFavorites(userData.id);
            
            if (response.data) {
                if (response.data.favorites !== null)
                    setFavorites(response.data.favorites);

                if (response.data.likes !== null)
                    setLikes(response.data.likes);

                if (response.data.likes.indexOf(router.query.id) !== -1)
                    setModeLike(true);

                if (response.data.favorites.indexOf(router.query.id) !== -1)
                    setModeFavorite(true);
            }
            
        } catch (e) {
            console.log('Ошибка при получении данных о лайках и избранном', 'error');
        }
    }

    async function likeProject() {
        try {
            if (userData) {
                if (likes.indexOf(router.query.id) !== -1) {
                    setCountLikes(countLikes-1);
                    const temp = [...likes];
                    temp.splice(router.query.id, 1);
                    setLikes(temp);
                    setModeLike(false);
                    await Api().project.dislike(router.query.id, userData.id);
                }
                else {
                    setCountLikes(countLikes+1);
                    setLikes([...likes, router.query.id]);
                    setModeLike(true);
                    await Api().project.like(router.query.id, userData.id);
                }
            }
            else
                console.log('Вы не авторизованы в системе', 'error');
        } catch (e) {
            console.log('Ошибка при изменении данных в БД', 'error');
        }
    }

    async function favoriteProject() {
        try {
            if (userData) {
                if (favorites.indexOf(router.query.id) !== -1) {
                    const temp = [...favorites];
                    temp.splice(router.query.id, 1);
                    setFavorites(temp);
                    setModeFavorite(false);
                    await Api().project.removeFavorite(router.query.id, userData.id);
                }
                else {
                    setFavorites([...favorites, router.query.id]);
                    setModeFavorite(true);
                    await Api().project.favorite(router.query.id, userData.id);
                }
            }
            else
                console.log('Вы не авторизованы в системе');
        } catch (e) {
            console.log('Ошибка при добавлении проект в избранное');
        }
    }

    async function deleteProject() {
        try {
            setIsLoading(true);
            await Api().project.delete(router.query.id);
            router.push('/');
        } catch (e) {
            console.log('Ошибка при удалени проекта');
        } finally {
            setIsLoading(false);
        }
    }

    async function saveChanges(data) {
        try {
            setIsLoading(true);
            await Api().project.save(router.query.id, data.name, data.description, project.type, data.price, data.payment, data.staff);

            project.name = data.name;
            project.description = data.description;
            
            if (project.type === 'sale' || project.type === 'donates')
                project.price = data.price;

            if (project.type === 'donates')
                project.payment = data.payment;

            if (project.type === 'team')
                project.staff = data.staff;

            setStatusEdit(false);
        } catch (e) {
            console.log('Ошибка при сохранении изменений');
        } finally {
            setIsLoading(false);
        }
    }

    const determinateTime = (projectTime) => {
        const countTime = Math.round((new Date() - new Date(projectTime)) / (1000 * 60));
        
        if (countTime < 60) {
            setTime(String(countTime) + " мин");
        }
        else if (Math.round(countTime / 60) < 24) {
            if (Math.round(countTime / 60) === 1 || Math.round(countTime / 60) === 21) {
                setTime(Math.round(countTime / 60) + " час")
            }
            else if (Math.round(countTime / 60) === 2 || Math.round(countTime / 60) === 3 || Math.round(countTime / 60) === 4 || Math.round(countTime / 60) === 22 || Math.round(countTime / 60) === 23) {
                setTime(Math.round(countTime / 60) + " часа");
            }
            else {
                setTime(Math.round(countTime / 60) + " часов");
            }
        }
        else if (Math.round(countTime / 60) < 48) {
            setTime("вчера");
        }
        else {
            setTime(new Date(projectTime).toDateString().substring(4));
        }
    }

    if (isLoading) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <Loader/>
            </div>
        );
    }

    if (statusEdit) {
        return(
            <Create 
                name={project.name} 
                description={project.description}
                type={project.type}
                price={project.price}
                payment={project.payment}
                staff={project.staff}
                save={saveChanges}
                cancel={() => setStatusEdit(false)}
            />
        );
    }

    return (
        <div className={styles.project}>
            <Head>
				<title>Проект</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <div className={styles.project__header}>
                <div className={styles.main__data}>
                    <div className={styles.person}>
                        <div className={styles.photo}></div>
                        <Link href={`/profile/${project.creator_id}`}>
                            <a className={styles.name}>{project.creator_name}</a>
                        </Link>

                        <div className={styles.type}>
                            {project.type === 'sale'
                                ? <span>Продажа</span>
                                :
                                project.type === 'donates'
                                    ? <span>Сбор донатов</span>
                                    : <span>Набор команды</span>
                            }
                        </div>
                        
                        <div className={styles.time}>{time}</div>
                    </div>
                </div>
                
                <div className={styles.heading}>
                    <p className={styles.title}>{project.name}</p>
                    {project.type === 'sale' &&
                        <p className={styles.price}>{project.price}₽</p>
                    }
                </div>
            </div>

            <div className={styles.project__body}>
                <p className={clsx(styles.description, styles.description__open)}>{project.description}</p>

                {project.type === 'donates' &&
                    <div className={styles.donates}>
                        {project.price === project.progress
                            ? 
                            <ProgressBar 
                                variant='success' 
                                className={styles.progress__donates} 
                                now={100} 
                                label={project.price}  
                            />
                            : 
                            <ProgressBar 
                                variant='app-blue' 
                                className={styles.progress__donates} 
                                max={project.price} 
                                now={project.progress} 
                                label={project.progress}  
                            />
                        }

                        <div className={styles.borders}>
                            <p className={styles.start}>0</p>
                            <p className={styles.end}>{project.price}</p>
                        </div>

                        <Button mode='fill'>Задонатить</Button>
                    </div>
                }

                {project.type === 'team' &&
                    <div className={styles.necessary__staff}>
                        <p className={styles.title}>Требуются в команду:</p>
                        <ul className={styles.list__staff}>
                            {project.staff.map(staff => 
                                <li key={staff} className={styles.staff__item}>{staff}</li>
                            )}
                        </ul>
                        <Button mode='fill'>Подать заявку</Button>
                    </div>
                }
            </div>

            <div className={styles.project__footer}>
                <div className={styles.feedback}>
                    <div className={styles.feedback__item}>
                        {modeLike
                            ? 
                            <AiFillHeart 
                                onClick={() => likeProject()} 
                                className={styles.footer__icon}
                            />
                            : 
                            <AiOutlineHeart 
                                onClick={() => likeProject()} 
                                className={styles.footer__icon}
                            />
                        }
                        <span>{countLikes}</span>
                    </div>
                    
                    {modeFavorite
                        ? 
                        <BsBookmarkFill 
                            nClick={() => favoriteProject()} 
                            className={styles.footer__icon}
                        />
                        : 
                        <HiOutlineBookmark 
                            onClick={() => favoriteProject()} 
                            className={styles.footer__icon}
                        />
                    }
                </div>

                <div className={styles.share}>
                    <RiShareForwardLine className={styles.footer__icon} />
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    try {
        const user = await Api(ctx).auth.getMe();
        const response = await Api(ctx).project.getData(ctx.params.id);
        
        if (user.data) {
            // Check favorite and like
        }

        return {
            props: {
                project: response.data
            },
        }
    } catch (e) {
        return {
            props: {
                error: 'Ошибка при получении данных проекта'
            },
        }
    }
}

export default Project;