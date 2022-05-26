import {useContext} from 'react'
import {Context} from "../../contexts/AuthContext";
import clsx from 'clsx';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "./Header.module.scss";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai"
import { BiExit, BiSearch } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { FiSettings } from "react-icons/fi"
import { Button } from "../UI/Button"
import { Dropdown } from 'react-bootstrap';
import Badge from '@mui/material/Badge';


export const Header = () => {
    const {store} = useContext(Context)
    const router = useRouter();

    async function logout() {
        store.logout();
        router.push("/")
    }

    return (
        <div className={clsx(styles.header, 'd-flex w100')}>
            <div className={`${styles.container} d-flex justify-between align-center`}>
                <div className={styles.header__left}>
                    <Link href='/'>
                        <h3 className={styles.logo}>ProjectUnion</h3>
                    </Link>
                </div>

                <div className={clsx(styles.header__right, 'd-flex align-center')}>
                    <BiSearch className={clsx(styles.search, 'fw-bold')} />
                    
                    {!store.isAuth
                        ?
                        <Button mode='fill' onClick={() => router.push("/login")}>Вход</Button>
                        :
                        <>
                            <Badge badgeContent={0} color="primary">
                                <AiOutlineBell className={clsx(styles.notifications, 'fw-bold')}/>
                            </Badge>

                            <Button mode='fill' onClick={logout}>Выйти</Button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};
