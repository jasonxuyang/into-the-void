import styles from './styles.module.scss'

export default function Notification({
    message
}) {

    return (
        <div className={styles.notification}>
            <p>{message}</p>
        </div>
    )
}