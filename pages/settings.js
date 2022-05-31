import { useState, useRef } from 'react'
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
import { Api } from '../utils/api';
import { MainDataUser } from '../utils/validate/settingsValidation';
import { ChangePassword } from '../utils/validate/settingsValidation';
import { Button } from "../components/UI/Button"
import { Toggle } from '../components/UI/Toggle';
import { FormField } from '../components/UI/FormField'
import { Modal } from '../components/UI/Modal'
import { ConfirmAction } from '../components/ConfirmAction';
import { Snackbar } from "../components/UI/Snackbar";


const Settings = ({settings, error}) => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUserData);
    const snackbarRef = useRef(null);
    const router = useRouter();
    const [ntfsNewMsg, setNftsNewMsg] = useState(settings.notifications.new_message);
    const [ntfsNewSubs, setNftsNewSubs] = useState(settings.notifications.new_sub);
    const [ntfsNewComment, setNftsNewComment] = useState(settings.notifications.new_comment);
    const [ntfsUpdate, setNftsUpdate] = useState(settings.notifications.update);
    const [ntfsEmail, setNftsEmail] = useState(settings.notifications.email_notification);
    const [modalConfirm, setModalConfirm] = useState(false);

    const formChangePassword = useForm({
        mode: 'onChange',
        resolver: yupResolver(ChangePassword)
    });
    const formDataUser = useForm({
        mode: 'onChange',
        resolver: yupResolver(MainDataUser)
    });

    async function save(data) {
        try {
            await Api().user.save(userData.id, data.name, data.email, data.description, ntfsNewMsg, ntfsNewSubs, ntfsNewComment, ntfsUpdate, ntfsEmail);
            //snackbarRef.current.show('Настройки успешно сохранены', 'success');
        } catch (e) {
            //snackbarRef.current.show('Ошибка при сохранении данных пользователя', 'error');
        }
    }

    async function changePassword(data) {
        try {
            if (data.newPassword !== data.newConfirmPassword)
                snackbarRef.current.show('Новые пароли не совпадают', 'error');
            else if (data.newPassword === data.oldPassword)
                snackbarRef.current.show('Новые пароли не отличается от старого', 'error');
            else {
                await Api().user.changePassword(userData.id, data.oldPassword, data.newPassword);
                console.log('Пароль успешно изменен');
                snackbarRef.current.show('Пароль успешно изменен', 'success');

                formChangePassword.resetField("oldPassword")
                formChangePassword.resetField("newPassword")
                formChangePassword.resetField("newConfirmPassword")
            }
        } catch (e) {
            snackbarRef.current.show('Ошибка при изменении пароля', 'error');
        }
    }

    async function deleteAccount(choice) {
        try {
            setModalConfirm(false);
            if (choice) {
                await Api().user.delete(userData.id);

                destroyCookie(null, 'token')
                dispatch(setUserData(null));
                router.push("/")
            }
        } catch (e) {
            snackbarRef.current.show('Ошибка при удалении аккаунта', 'error');
        }
    }

    return (
        <div className={styles.settings}>
            <Head>
                <title>Настройки</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <FormProvider {... formDataUser}>
                <form 
                    onSubmit={formDataUser.handleSubmit(save)} 
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
                            defaultValue={userData.name} 
                        />
                    </div>

                    <div className={styles.settings__item}>
                        <p className={styles.name}>Почта</p>
                        <FormField 
                            name='email' 
                            placeholder='Почта' 
                            type='text'
                            defaultValue={userData.email}
                         />
                    </div>

                    <div className={styles.settings__item}>
                        <p className={styles.name}>О вас</p>
                        <FormField 
                            name='description' 
                            placeholder='Описание' 
                            type='text' 
                            defaultValue={userData.description}
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

            <Snackbar ref={snackbarRef} />
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    try {
        const user = await Api(ctx).auth.getMe();
        const response = await Api(ctx).user.getSettings(user.data.id);

        return {
            props: {
                settings: response.data,
            },
        }
    } catch (e) {
        return {
            props: {
                error: 'Ошибка при получении настроек'
            },
        }
    }
}

export default Settings;