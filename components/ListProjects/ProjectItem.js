import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import styles from "./ProjectItem.module.scss";
import { Api } from '../../utils/api';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineBookmark } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsBookmarkFill } from "react-icons/bs";
import { ProgressBar } from "react-bootstrap";


export function ProjectItem({project, listLikes, listFavorites}) {
    const userData = useAppSelector(selectUserData);
    const router = useRouter();
    const maxSymbols = 350;
    const [likes, setLikes] = useState([]);
    const [countLikes, setCountLikes] = useState(project.likes);
    const [modeLike, setModeLike] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [modeFavorite, setModeFavorite] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        determinateTime();
    }, [])

    useEffect(() => {
        if (listLikes.indexOf(project.id) !== -1)
            setModeLike(true);

        setLikes(listLikes);
    }, [listLikes])

    useEffect(() => {
        if (listFavorites.indexOf(project.id) !== -1)
            setModeFavorite(true);

        setFavorites(listFavorites);
    }, [listFavorites])

    async function likeProject() {
        try {
            if (userData) {
                if (likes.indexOf(project.id) !== -1) {
                    setCountLikes(countLikes-1);
                    const temp = [...likes];
                    temp.splice(project.id, 1);
                    setLikes(temp);
                    setModeLike(false);
                    await Api().project.dislike(project.id, userData.id);
                }
                else {
                    setCountLikes(countLikes+1);
                    setLikes([...likes, project.id]);
                    setModeLike(true);
                    await Api().project.like(project.id, userData.id);
                }
            }
            else
                console.log('Вы не авторизованы в системе');
        } catch (e) {
            console.log('Ошибка при изменении данных в БД');
        }
    }

    async function favoriteProject() {
        try {
            if (userData) {
                if (favorites.indexOf(project.id) !== -1) {
                    const temp = [...favorites];
                    temp.splice(project.id, 1);
                    setFavorites(temp);
                    setModeFavorite(false);
                    await Api().project.removeFavorite(project.id, userData.id);
                }
                else {
                    setFavorites([...favorites, project.id]);
                    setModeFavorite(true);
                    await Api().project.favorite(project.id, userData.id);
                }
            }
            else
                console.log('Вы не авторизованы в системе');
        } catch (e) {
            console.log('Ошибка при добавлении проект в избранное');
        }
    }

    const determinateTime = () => {
        const countTime = Math.round((new Date() - new Date(project.created_at)) / (1000 * 60));
        
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
            setTime(new Date(project.time).toDateString().substring(4));
        }
    }

    return (
        <div className={styles.project}>
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
                    </div>
                    <div className={styles.time}>{time}</div>
                </div>

                <div onClick={() => router.push(`/project/${project.id}`)} className={styles.heading}>
                    <p className={styles.title}>{project.name}</p>
                    {project.type === 'sale' &&
                        <p className={styles.price}>{project.price}₽</p>
                    }
                </div>
            </div>

            <div 
                onClick={() => router.push(`/project/${project.id}`)} 
                className={styles.project__body}
            >
                {project.description.length > maxSymbols
                    ? <p className={styles.description}>{project.description.substr(0, maxSymbols)}...</p>
                    : <p className={styles.description}>{project.description.substr(0, maxSymbols)}</p>
                }

                {project.type === 'donates' &&
                    <div className={styles.donates}>
                        {project.price === project.progress
                            ? <ProgressBar 
                                variant='success' 
                                className={styles.progress__donates} 
                                now={100} 
                                label={project.price}  
                            />
                            : <ProgressBar
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
                    </div>
                }
            </div>

            <div className={styles.project__footer}>
                <div className={styles.feedback}>
                    <div className={styles.feedback__item}>
                        {modeLike
                            ? <AiFillHeart onClick={() => likeProject()} className={styles.footer__icon} />
                            : <AiOutlineHeart onClick={() => likeProject()} className={styles.footer__icon} />
                        }
                        <span>{countLikes}</span>
                    </div>
                    
                    {modeFavorite
                        ? <BsBookmarkFill onClick={() => favoriteProject()} className={styles.footer__icon} />
                        : <HiOutlineBookmark onClick={() => favoriteProject()} className={styles.footer__icon} />
                    }
                </div>

                <div className={styles.share}>
                    <RiShareForwardLine className={styles.footer__icon} />
                </div>
            </div>
        </div>
    );
}