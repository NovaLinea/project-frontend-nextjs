import clsx from 'clsx';
import Link from "next/link";
import { useRouter } from 'next/router';
import { destroyCookie } from "nookies";
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import styles from "./Header.module.scss";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai"
import { BiExit, BiSearch } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { FiSettings } from "react-icons/fi"
import { Button } from "../UI/Button"
import { Dropdown } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { useAppDispatch } from '../../redux/hooks';
import { setUserData } from '../../redux/slices/user';


export const Header = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUserData);
    const router = useRouter();

    async function logout() {
        destroyCookie(null, 'token')
        dispatch(setUserData(null));
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
                    
                    {!userData
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
