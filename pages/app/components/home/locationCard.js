import styles from './styles.module.scss'

export default function LocationCard({
    locationName,
    goToLocation,
    isDisabled
}) {

    return (
        <div className={!isDisabled ? `${styles.location_card_container}` : `${styles.location_card_container} ${styles.disabled}`} onClick={() => goToLocation(locationName)}>
            <p>{locationName}</p>
        </div>
    )
}