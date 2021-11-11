import styles from './styles.module.scss'

export default function LocationCard({
    locationName,
    goToLocation
}) {

    return (
        <div className={styles.location_card_container} onClick={() => goToLocation(locationName)}>
            <h4>{locationName}</h4>
        </div>
    )
}