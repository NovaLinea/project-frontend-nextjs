import clsx from 'clsx';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import { Sidebar } from '../Sidebar';
import styles from "./MainLayout.module.scss";


export function MainLayout({children}) {
    const userData = useAppSelector(selectUserData);

    return (
        <main className={clsx(styles.content, userData ? styles.authorized : styles.no_authorized)}>
            {userData &&
                <Sidebar />
            }
            
            {children}
        </main>
    );
}