import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useForm, FormProvider } from "react-hook-form"
import { destroyCookie } from "nookies";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../redux/hooks';
import { selectUserData } from '../redux/slices/user';
import { useAppDispatch } from '../redux/hooks';
import { setUserData } from '../redux/slices/user';
import styles from "../styles/Settings.module.scss"
import UserService from '../API/UserService';
import { MainDataUser } from '../utils/settingsValidation';
import { ChangePassword } from '../utils/settingsValidation';
import { Loader } from '../components/UI/Loader';
import { Button } from "../components/UI/Button"
import { Toggle } from '../components/UI/Toggle';
import { FormField } from '../components/UI/FormField'
import { Modal } from '../components/UI/Modal'
import { ConfirmAction } from '../components/ConfirmAction';


export default function Settings() {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUserData);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [settings, setSettings] = useState({});
    const [ntfsNewMsg, setNftsNewMsg] = useState(false);
    const [ntfsNewSubs, setNftsNewSubs] = useState(false);
    const [ntfsNewComment, setNftsNewComment] = useState(false);
    const [ntfsUpdate, setNftsUpdate] = useState(false);
    const [ntfsEmail, setNftsEmail] = useState(false);
    const [modalConfirm, setModalConfirm] = useState(false);

    const formChangePassword = useForm({
        mode: 'onChange',
        resolver: yupResolver(ChangePassword)
    });
    const formDataUser = useForm({
        mode: 'onChange',
        resolver: yupResolver(MainDataUser)
    });

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            setIsLoading(true);
            const response = await UserService.fetchDataSettings(userData.id);
            
            if (response.data) {
                setSettings(response.data);

                if (response.data.notifications) {
                    setNftsNewMsg(response.data.notifications.new_message);
                    setNftsNewSubs(response.data.notifications.new_sub);
                    setNftsNewComment(response.data.notifications.new_comment);
                    setNftsUpdate(response.data.notifications.update);
                    setNftsEmail(response.data.notifications.email_notification);
                }
            }
            
        } catch (e) {
            console.log('Ошибка при получении настроек');
        } finally {
            setIsLoading(false);
        }
    }

    async function saveData(data) {
        try {
            await UserService.saveData(userData.id, data.name, data.email, data.description, ntfsNewMsg, ntfsNewSubs, ntfsNewComment, ntfsUpdate, ntfsEmail);
            console.log('Настройки успешно сохранены');
        } catch (e) {
            console.log('Ошибка при сохранении данных пользователя');
        }
    }

    async function changePassword(data) {
        try {
            if (data.newPassword !== data.newConfirmPassword)
                console.log('Новые пароли не совпадают');
            else if (data.newPassword === data.oldPassword)
                console.log('Новые пароли не отличается от старого');
            else {
                await UserService.changePassword(userData.id, data.oldPassword, data.newPassword);
                console.log('Пароль успешно изменен');

                formChangePassword.resetField("oldPassword")
                formChangePassword.resetField("newPassword")
                formChangePassword.resetField("newConfirmPassword")
            }
        } catch (e) {
            console.log('Ошибка при изменении пароля');
        }
    }

    async function deleteAccount(choice) {
        try {
            setModalConfirm(false);
            if (choice) {
                await UserService.deleteAccount(userData.id);

                destroyCookie(null, 'token')
                dispatch(setUserData(null));
                router.push("/")
            }
        } catch (e) {
            console.log('Ошибка при удалении аккаунта');
        }
    }

    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Настройки</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader/>
                </div>
            </>
        );
    }

    return (
        <div className={styles.settings}>
            <Head>
                <title>Настройки</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <FormProvider {... formDataUser}>
                <form 
                    onSubmit={formDataUser.handleSubmit(saveData)} 
                    className={styles.main__settings}
                >
                    <div className={styles.settings__header}>
                        <h3 className={styles.title}>Основные настройки</h3>
                        <Button
                            disabled={!formDataUser.formState.isValid || formDataUser.formState.isSubmitting}
                            mode='fill' 
                            type='submit'
                        >
                            Сохранить
                        </Button>
                    </div>

                    <div className={styles.settings__item}>
                        <p className={styles.name}>Имя и фамилия</p>
                        <FormField 
                            name='name' 
                            placeholder='Имя и фамилия' 
                            type='text' 
                            defaultValue={settings.name} 
                        />
                    </div>

                    <div className={styles.settings__item}>
                        <p className={styles.name}>Почта</p>
                        <FormField 
                            name='email' 
                            placeholder='Почта' 
                            type='text'
                            defaultValue={settings.email}
                         />
                    </div>

                    <div className={styles.settings__item}>
                        <p className={styles.name}>О вас</p>
                        <FormField 
                            name='description' 
                            placeholder='Описание' 
                            type='text' 
                            defaultValue={settings.description}
                            multiline 
                            rows={6} 
                        />
                    </div>
                </form>
            </FormProvider>

            <FormProvider {... formChangePassword}>
                <form 
                    onSubmit={formChangePassword.handleSubmit(changePassword)} 
                    className={styles.change__password}
                >
                    <h3 className={styles.title}>Изменение пароля</h3>

                    <div className={styles.settings__item}>
                        <p className={styles.name}>Старый пароль</p>
                        <FormField 
                            name='oldPassword' 
                            placeholder='Старый пароль' 
                            type='password' 
                        />
                    </div>

                    <div className={styles.settings__item}>
                        <p className={styles.name}>Новый пароль</p>
                        <FormField 
                            name='newPassword' 
                            placeholder='Новый пароль' 
                            type='password' 
                        />
                    </div>

                    <div className={styles.settings__item}>
                        <p className={styles.name}>Подтвердите новый пароль</p>
                        <FormField 
                            name='newConfirmPassword' 
                            placeholder='Подтвердите новый пароль' 
                            type='password'
                        />
                    </div>

                    <Button
                        disabled={!formChangePassword.formState.isValid || formChangePassword.formState.isSubmitting}
                        mode='fill' 
                        type='submit'
                    >
                        Изменить пароль
                    </Button>
                </form>
            </FormProvider>

            <div className={styles.notifications}>
                <h3 className={styles.title}>Уведомления</h3>

                <Toggle 
                    text="Новые сообщения" 
                    status={ntfsNewMsg && "checked"}
                    change={() => setNftsNewMsg(!ntfsNewMsg)}
                />

                <Toggle 
                    text="Новые подписчики"
                    status={ntfsNewSubs && "checked"}
                    change={() => setNftsNewSubs(!ntfsNewSubs)}
                />

                <Toggle 
                    text="Новые комментарии к проектам"
                    status={ntfsNewComment && "checked"}
                    change={() => setNftsNewComment(!ntfsNewComment)}
                />

                <Toggle
                    text="Обновления платформы"
                    status={ntfsUpdate && "checked"}
                    change={() => setNftsUpdate(!ntfsUpdate)}
                />

                <Toggle
                    text="Уведомления на почту"
                    status={ntfsEmail && "checked"}
                    change={() => setNftsEmail(!ntfsEmail)}
                />
            </div>

            <div className={styles.delete__account}>
                <p onClick={() => setModalConfirm(true)}>Удалить аккаунт</p>
            </div>

            <Modal title='Удаление аккаунта' visible={modalConfirm} setVisible={setModalConfirm}>
                <ConfirmAction text="Вы уверены, что хотите удалить аккаунт и все свои проекты?" action={deleteAccount}/>
            </Modal>
        </div>
    );
}