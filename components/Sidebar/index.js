import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../index";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "./Sidebar.module.scss";
import clsx from 'clsx';
import { AiOutlineFire, AiOutlineHome, AiOutlinePlus } from "react-icons/ai"
import { BiMessageRounded } from "react-icons/bi"
import { HiOutlineBookmark } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"


export const Sidebar = () => {
    const {store} = useContext(Context)
    const navigate = useNavigate();
    const location = useLocation()
    const [activeItem, setActiveItem] = useState('');
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveItem("popular");
        }
        else if (location.pathname === `/profile/${store.isUserID}`) {
            setActiveItem("profile");
        }
        else {
            setActiveItem(location.pathname.substring(1, location.pathname.length));
        }
    }, [location.pathname])

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
            <div onClick={() => navigate('/popular')} className={clsx(activeItem === 'popular' && styles.active, styles.sidebar__item)}>
                <AiOutlineFire className={styles.sidebar__item-icon}/>
            </div>

            <div onClick={() => navigate('/home')} className={clsx(activeItem === 'home' && styles.active, styles.sidebar__item)}>
                <AiOutlineHome className={styles.sidebar__item-icon}/>
            </div>
        
            <div onClick={() => navigate('/messages')} className={clsx(activeItem === 'messages' && styles.active, styles.sidebar__item)}>
                <BiMessageRounded className={styles.sidebar__item-icon}/>
            </div>

            <div onClick={() => navigate('/favorite')} className={clsx(activeItem === 'favorite' && styles.active, styles.sidebar__item)}>
                <HiOutlineBookmark className={styles.sidebar__item-icon}/>
            </div>

            <div onClick={() => navigate('/create')} className={clsx(activeItem === 'create' && styles.active, styles.sidebar__item)}>
                <AiOutlinePlus className={styles.sidebar__item-icon}/>
            </div>
            
            <div onClick={() => navigate('/settings')} className={clsx(activeItem === 'settings' && styles.active, styles.sidebar__item)}>
                <FiSettings className={styles.sidebar__item-icon}/>
            </div>

            <div onClick={() => navigate(`/profile/${store.isUserID}`)} className={clsx(activeItem === 'profile' && styles.active, styles.sidebar__item)}>
                <CgProfile className={styles.sidebar__item-icon}/>
            </div>

        </div>
    );
};