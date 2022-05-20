import clsx from 'clsx';
import Link from "next/link";
import styles from "./Header.module.scss";
import { AiOutlineBell } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Button } from "../UI/Button"


export const Header = () => {

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
                    <AiOutlineBell className={clsx(styles.notifications, 'fw-bold')} />
                    <Button mode='fill'>Вход</Button>
                </div>
            </div>
        </div>
    );
};
