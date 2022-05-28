import { useState, useEffect } from 'react'
import Head from 'next/head'
import clsx from 'clsx';
import { useAppSelector } from '../redux/hooks';
import { selectUserData } from '../redux/slices/user';
import styles from '../styles/Create.module.scss';
import ProjectService from '../API/ProjectService';
import { GrFormClose } from 'react-icons/gr';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export default function Create(props) {
    const userData = useAppSelector(selectUserData);
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

    async function createProject() {
        try {
            if (userData) {
                if (nameProject === "" || descriptionProject === "" || (typeProject === "donates" && paymentSystem === "" && priceProject === "") || (typeProject !== "team" && priceProject === ""))
                    console.log('Вы заполнили не все поля');

                else if (typeProject === "team" && listStaff.length === 0)
                    console.log('Добавьте хотя бы одну должность');

                else {
                    await ProjectService.createProject(userData.id, nameProject, descriptionProject, typeProject, priceProject, paymentSystem, listStaff);
            
                    setNameProject("");
                    setDescriptionProject("");
                    setPriceProject("");
                    setPaymentSystem("");
                    setListStaff([]);

                    console.log('Проект успешно создан');
                }
            }
            else
                console.log('Вы не авторизованы в системе');

        } catch (e) {
            console.log('Ошибка при создании проекта');
        }
    }

    const saveChanges = () => {
        const newData = {
            name: nameProject, description: descriptionProject, price: priceProject, payment: paymentSystem, staff: listStaff, id: Date.now()
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
                ? <Button mode='fill' onClick={createProject}>Создать</Button>
                : 
                <div className={styles.actions__edit}>
                    <Button mode='fill' onClick={saveChanges}>Сохранить изменения</Button>
                    <Button mode='output' onClick={props.cancel} style={{marginLeft: 10}}>Отмена</Button>
                </div>
            }
        </div>
    );
}