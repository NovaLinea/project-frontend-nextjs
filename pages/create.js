import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import clsx from 'clsx';
import { useAppSelector } from '../redux/hooks';
import { selectUserData } from '../redux/slices/user';
import styles from '../styles/Create.module.scss';
import { Api } from '../utils/api';
import { GrFormClose } from 'react-icons/gr';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import { Snackbar } from "../components/UI/Snackbar";
import TextareaAutosize from '@mui/material/TextareaAutosize';


export default function Create(props) {
    const userData = useAppSelector(selectUserData);
    const snackbarRef = useRef(null);
    const [nameProject, setNameProject] = useState("");
    const [descriptionProject, setDescriptionProject] = useState("");
    const [typeProject, setTypeProject] = useState("sale");
    const [priceProject, setPriceProject] = useState("");
    const [paymentSystem, setPaymentSystem] = useState("");
    const [nameStaff, setNameStaff] = useState("");
    const [listStaff, setListStaff] = useState([]);

    useEffect(() => {
        if (props.type) {
            setNameProject(props.name);
            setDescriptionProject(props.description);
            setTypeProject(props.type);
            setPriceProject(props.price);
            setPaymentSystem(props.payment);
            setListStaff(props.staff);
        }
    }, [])

    async function create() {
        try {
            if (userData) {
                if (nameProject === "" || descriptionProject === "" || (typeProject === "donates" && paymentSystem === "" && priceProject === "") || (typeProject !== "team" && priceProject === ""))
                    snackbarRef.current.show('Вы заполнили не все поля', 'error');

                else if (typeProject === "team" && listStaff.length === 0)
                    snackbarRef.current.show('Добавьте хотя бы одну должность', 'error');

                else {
                    await Api().project.create(userData.id, nameProject, descriptionProject, typeProject, priceProject, paymentSystem, listStaff);
            
                    setNameProject("");
                    setDescriptionProject("");
                    setPriceProject("");
                    setPaymentSystem("");
                    setListStaff([]);

                    snackbarRef.current.show('Проект успешно создан', 'success');
                }
            }
            else
                snackbarRef.current.show('Вы не авторизованы в системе', 'error');

        } catch (e) {
            snackbarRef.current.show('Ошибка при создании проекта', 'error');
        }
    }

    const save = () => {
        const newData = {
            name: nameProject, 
            description: descriptionProject, 
            price: priceProject, 
            payment: paymentSystem, 
            staff: listStaff, 
            id: Date.now()
        }
        props.save(newData);
    }

    const addStaff = () => {
        if (nameStaff) {
            if (listStaff.indexOf(nameStaff) === -1) {
                setListStaff([...listStaff, nameStaff]);
                setNameStaff("");
            }
            else
                showSnackbar('Такая должность уже указана', 'error');
        }
    }

    const deleteStaff = (staff) => {
        setListStaff(listStaff.filter(item => item !== staff));
    }

    return (
        <div className={styles.create}>
            <Head>
                <title>Создание проекта</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.create__editor}>
                <TextareaAutosize
                    className={styles.title}
                    aria-label="empty textarea"
                    placeholder="Заголовок"
                    maxLength={120}
                    value={nameProject}
                    onChange={e => setNameProject(e.target.value)}
                />

                <TextareaAutosize
                    className={styles.description}
                    aria-label="empty textarea"
                    placeholder="Описание проекта"
                    value={descriptionProject}
                    onChange={e => setDescriptionProject(e.target.value)}
                />

                {!props.type &&
                    <div className={styles.type__project}>
                        <div 
                            onClick={() => setTypeProject('sale')} 
                            className={typeProject === 'sale' ? clsx(styles.type__item, styles.active) : styles.type__item}
                        >
                            На продажу
                        </div>

                        <div 
                            onClick={() => setTypeProject('donates')} 
                            className={typeProject === 'donates' ? clsx(styles.type__item, styles.active) : styles.type__item}
                        >
                            Сбор донатов
                        </div>

                        <div 
                            onClick={() => setTypeProject('team')} 
                            className={typeProject === 'team' ? clsx(styles.type__item, styles.active) : styles.type__item}
                        >
                            Набор команды
                        </div>
                    </div>
                }

                {typeProject === 'sale'
                    ?
                    <div className={styles.price__project}>
                        <Input
                            type="number"
                            placeholder="Цена проекта"
                            value={priceProject} 
                            onChange={e => setPriceProject(e.target.value)}
                        />
                    </div>
                    :
                    typeProject === 'donates'
                        ?
                        <>
                            <div className={styles.target__donates}>
                                <Input
                                    type="number"
                                    placeholder="Цель дотанов"
                                    value={priceProject} 
                                    onChange={e => setPriceProject(e.target.value)}
                                />
                            </div>

                            <div className={styles.payment__project}>
                                <Input
                                    placeholder="Платежная система"
                                    value={paymentSystem} 
                                    onChange={e => setPaymentSystem(e.target.value)}
                                />
                            </div>
                        </>
                        :
                        <div className={styles.staff__project}>
                            <ul className={styles.list__staff}>
                                {listStaff.map(staff =>
                                    <div key={staff} className={styles.staff__item}>
                                        <li>{staff}</li>
                                        <GrFormClose className='close' onClick={() => deleteStaff(staff)} />
                                    </div>
                                )}
                            </ul>

                            <div className={styles.add__staff}>
                                <Input
                                    placeholder="Введите должность"
                                    maxLength={30}
                                    value={nameStaff} 
                                    onChange={e => setNameStaff(e.target.value)}
                                />
                                <Button mode='outline' onClick={addStaff}>Добавить</Button>
                            </div>
                        </div>
                }
            </div>

            {!props.type
                ? <Button mode='fill' onClick={create}>Создать</Button>
                : 
                <div className={styles.actions__edit}>
                    <Button mode='fill' onClick={save}>Сохранить изменения</Button>
                    <Button mode='output' onClick={props.cancel} style={{marginLeft: 10}}>Отмена</Button>
                </div>
            }

            <Snackbar ref={snackbarRef} />
        </div>
    );
}