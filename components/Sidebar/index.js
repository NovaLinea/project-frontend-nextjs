import {useEffect, useState} from 'react'
import styles from "./Sidebar.module.scss";
import clsx from 'clsx';
import Link from "next/link";
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import { useRouter } from 'next/router';
import { AiOutlineFire, AiOutlineHome, AiOutlinePlus } from "react-icons/ai"
import { BiMessageRounded } from "react-icons/bi"
import { HiOutlineBookmark } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"


export const Sidebar = () => {
    const userData = useAppSelector(selectUserData);
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('')
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        if (router.pathname === "/") {
            setActiveItem("popular");
        }
        else if (router.pathname === '/profile/[id]' && router.query.id === userData.id) {
            setActiveItem("profile");
        }
        else {
            setActiveItem(router.pathname.substring(1, location.pathname.length));
        }
    }, [router.pathname])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
    
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) {
                setShow(false); 
            }
            else {
                setShow(true);  
            }
    
            setLastScrollY(window.scrollY);
        }
    };

    return (
        <div className={clsx(styles.sidebar, !show && styles.hidden, 'd-flex align-center')}>
            <Link href="/popular">
                <a className={clsx(activeItem === 'popular' && styles.active, styles.sidebar__item)}>
                    <AiOutlineFire className={styles.sidebar__icon}/>
                </a>
            </Link>

            <Link href="/home">
                <a className={clsx(activeItem === 'home' && styles.active, styles.sidebar__item)}>
                    <AiOutlineHome className={styles.sidebar__icon}/>
                </a>
            </Link>

            <Link href="/messages">
                <a className={clsx(activeItem === 'messages' && styles.active, styles.sidebar__item)}>
                    <BiMessageRounded className={styles.sidebar__icon}/>
                </a>
            </Link>

            <Link href="/favorite">
                <a className={clsx(activeItem === 'favorite' && styles.active, styles.sidebar__item)}>
                    <HiOutlineBookmark className={styles.sidebar__icon}/>
                </a>
            </Link>

            <Link href="/create">
                <a className={clsx(activeItem === 'create' && styles.active, styles.sidebar__item)}>
                    <AiOutlinePlus className={styles.sidebar__icon}/>
                </a>
            </Link>

            <Link href="/settings">
                <a className={clsx(activeItem === 'settings' && styles.active, styles.sidebar__item)}>
                    <FiSettings className={styles.sidebar__icon}/>
                </a>
            </Link>

            <Link href={`/profile/${userData.id}`}>
                <a className={clsx(activeItem === 'profile' && styles.active, styles.sidebar__item)}>
                    <CgProfile className={styles.sidebar__icon}/>
                </a>
            </Link>
        </div>
    );
};