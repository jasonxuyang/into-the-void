import { useState } from 'react'
import Location from './components/location';
import styles from './styles.module.scss'
import LocationCard from './components/home/locationCard';

export default function App() {
  const [suspects, setSuspects] = useState([]);
  const [turnsLeft, setTurnsLeft] = useState(24);
  const [location, setLocation] = useState('Home');
  const [ventsEnabled, setVentsEnabled] = useState(false);

  const goToLocation = (locationName) => {
    setLocation(locationName);
    setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 1);
  }

  const renderState = () => {
    return <div className={styles.status_container}>
      <h4>Status</h4>
      <p>Hours Left: <strong>{turnsLeft}</strong></p>
      <p>Location: <strong>{location}</strong></p>
    </div>
  }

  const renderLocation = () => {
    return <div className={styles.location_page_container}>
      <Location
        locationName={location}
        ventsEnabled={ventsEnabled}
        setVentsEnabled={setVentsEnabled}
      />
      <div onClick={() => goToLocation('Home')} className={styles.back_button}><p>Go Back</p></div>
    </div>
  }

  return (
    <main id={styles.app_container}>
      {renderState()}
      <div className={styles.content_wrapper}>
        {location == 'Home' ?
          <div className={styles.locations_container}>
            <h3>Investigate a Location</h3>
            <div className={styles.location_group}>
              <LocationCard
                locationName='Main Frame'
                goToLocation={goToLocation}
                isDisabled={false}
              />

              <LocationCard
                locationName='Barracks'
                goToLocation={goToLocation}
                isDisabled={false}
              />

              <LocationCard
                locationName='Main Deck'
                goToLocation={goToLocation}
                isDisabled={false}
              />
            </div>
            <div className={styles.location_group}>
              <LocationCard
                locationName='Hanger'
                goToLocation={goToLocation}
                isDisabled={true}
              />

              <LocationCard
                locationName='Engineering'
                goToLocation={goToLocation}
                isDisabled={true}
              />

              <LocationCard
                locationName='Lab'
                goToLocation={goToLocation}
                isDisabled={true}
              />
            </div>
          </div> : renderLocation()
        }</div>
    </main>
  )
}