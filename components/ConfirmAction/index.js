import styles from './ConfirmAction.module.scss';
import { Button } from '../UI/Button';


export const ConfirmAction = ({action, text}) => {
    return (
        <div className={styles.confirm}>
            <p>{text}</p>

            <div className={styles.actions}>
                <Button mode='fill' onClick={() => action(true)}>Да</Button>
                <Button mode='outline' onClick={() => action(false)}>Отмена</Button>
            </div>
        </div>
	);
}
