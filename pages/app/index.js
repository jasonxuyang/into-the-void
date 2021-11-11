import { useState } from 'react'
import Location from './components/location';
import styles from './styles.module.scss'
import LocationCard from './components/home/locationCard';

export default function App() {
  const [suspects, setSuspects] = useState([]);
  const [turnsLeft, setTurnsLeft] = useState(24);
  const [location, setLocation] = useState('Home');

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
    return <>
      <Location
        locationName={location}
      />
      <a onClick={() => goToLocation('Home')}><p>Go Back</p></a>
    </>
  }

  return (
    <main id={styles.app_container}>
      {renderState()}
      <div className={styles.locations_container_wrapper}>
        {location == 'Home' ?
          <div className={styles.locations_container}>

            <div className={styles.location_group}>
              <LocationCard
                locationName='Hanger'
                goToLocation={goToLocation}
              />

              <LocationCard
                locationName='Engineering'
                goToLocation={goToLocation}
              />

              <LocationCard
                locationName='Lab'
                goToLocation={goToLocation}
              />
            </div>

            <div className={styles.location_group}>
              <LocationCard
                locationName='Main Frame'
                goToLocation={goToLocation}
              />

              <LocationCard
                locationName='Main Deck'
                goToLocation={goToLocation}
              />

              <LocationCard
                locationName='Main Deck'
                goToLocation={goToLocation}
              />
            </div>
          </div> : renderLocation()
        }</div>
    </main>
  )
}