import { useState } from 'react'
import Location from './components/location';
import styles from './styles.module.scss'
import Link from 'next/link'
import LocationCard from './components/home/locationCard';

export default function App() {
  const [log, setLog] = useState([]);
  const [showStatus, setShowStatus] = useState(true);
  const [turnsLeft, setTurnsLeft] = useState(24);
  const [location, setLocation] = useState('Home');
  const [ventsEnabled, setVentsEnabled] = useState(false);
  const [passwordFound, setPasswordFound] = useState(false);
  const [datapadRead, setDatapadRead] = useState(null);
  const [bodyFound, setBodyFound] = useState(false);
  const [navigatorConfronted, setNavigatorConfronted] = useState(false);
  const [cookConfronted, setCookConfronted] = useState(false);
  const [outroEnabled, setOutroEnabled] = useState(false);

  const goToLocation = (locationName) => {
    setLocation(locationName);
    setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 1);
    if (location == 'Home') {
      setLog(log => log.concat(`Investigated ${locationName}.`));
    }
  }

  const renderStatus = () => {
    return <div className={styles.status_container}>
      <p>Time until Destination: {turnsLeft} hours</p>
      {
        log.map((entry, index) => {
          return <p key={index}>{entry}</p>
        })
      }
    </div>
  }

  const renderLocation = () => {
    return <div className={styles.location_page_container}>
      <Location
        locationName={location}
        ventsEnabled={ventsEnabled}
        setVentsEnabled={setVentsEnabled}
        passwordFound={passwordFound}
        setPasswordFound={setPasswordFound}
        datapadRead={datapadRead}
        setDatapadRead={setDatapadRead}
        bodyFound={bodyFound}
        setBodyFound={setBodyFound}
        navigatorConfronted={navigatorConfronted}
        setNavigatorConfronted={setNavigatorConfronted}
        cookConfronted={cookConfronted}
        setCookConfronted={setCookConfronted}
        setOutroEnabled={setOutroEnabled}
      />
      {
        !outroEnabled ?
          <div onClick={() => goToLocation('Home')} className={'button'}><p>Go Back</p></div>
          :
          <Link href='/outro'>
            <div className={`button`}>Go To Main Deck</div>
          </Link>
      }
    </div>
  }

  return (
    <main id={styles.app_container}>
      <img src='/asset/rbn.png' alt='spaceship ai' className={styles.rbn}
        onClick={() => {
          if (showStatus)
            setShowStatus(false)
          else
            setShowStatus(true)
        }} />
      {showStatus ? renderStatus() : null}
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
                locationName='Hangar'
                goToLocation={goToLocation}
                isDisabled={false}
              />

              <LocationCard
                locationName='Engineering'
                goToLocation={goToLocation}
                isDisabled={false}
              />

              <LocationCard
                locationName='Lab'
                goToLocation={goToLocation}
                isDisabled={false}
              />
            </div>
          </div> : renderLocation()
        }</div>
    </main>
  )
}