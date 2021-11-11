import styles from './styles.module.scss'

export default function LocationCard({
    locationName,
    goToLocation
}) {

    return (
        <div className={styles.location_card_container} onClick={() => goToLocation(locationName)}>
            <p>{locationName}</p>
        </div>
    )
}