import {useContext} from 'react'
import {Context} from "../../contexts/AuthContext";
import clsx from 'clsx';
import styles from "./MainLayout.module.scss";


export function MainLayout({children, auth}) {
    const {store} = useContext(Context)

    return (
        <main className={clsx(styles.content, auth ? styles.authorized : styles.no_authorized)}>
            {children}
        </main>
    );
}