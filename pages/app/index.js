import { useState } from 'react'
import Location from './components/location';
import styles from './styles.module.scss'
import LocationCard from './components/home/locationCard';

export default function App() {
  const [log, setLog] = useState([]);
  const [showStatus, setShowStatus] = useState(false);
  const [turnsLeft, setTurnsLeft] = useState(12);
  const [location, setLocation] = useState('Home');
  const [ventsEnabled, setVentsEnabled] = useState(false);
  const [passwordFound, setPasswordFound] = useState(false);
  const [datapadRead, setDatapadRead] = useState(null);
  const [bodyFound, setBodyFound] = useState(false);
  const [navigatorConfronted, setNavigatorConfronted] = useState(false);
  const [cookConfronted, setCookConfronted] = useState(false);
  const [outroEnabled, setOutroEnabled] = useState(false);
  const [notfication, setNotification] = useState('Every action you take will be recorded as an entry here. You have 24 hours. Good luck!');

  const goToLocation = (locationName) => {
    setLocation(locationName);
    setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 1);
    if (location == 'Home') {
      setLog(log => log.concat(`Visited ${locationName}.`));
    }
  }

  const openStatus = () => {
    setShowStatus(true);
  }

  const closeStatus = () => {
    setShowStatus(false);
    if (notfication) {
      setNotification(null);
    }
  }

  const renderStatus = () => {
    return <div className={styles.status_container}>
      <div className={styles.status}>
        <p>Time until Destination: {turnsLeft} hours</p>
        {notfication ?
          <p className={styles.status_notification}>{notfication}</p>
          :
          null
        }
      </div>
      <div className={styles.status_log}>
        {log.length < 1 ?
          <p>No entries recorded.</p>
          :
          log.slice(0).reverse().map((entry, index) => {
            return <p key={index}>{entry}</p>
          })
        }
      </div>
    </div>
  }

  const renderRBN = () => {
    return <>
      {notfication ?
        <h1 className={styles.notification_icon}>!</h1>
        :
        null}
      <img src='/asset/rbn.png' alt='spaceship ai' className={styles.rbn}
        onClick={() => {
          if (showStatus)
            closeStatus();
          else
            openStatus();
        }} />
    </>
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
        outroEnabled={outroEnabled}
        setOutroEnabled={setOutroEnabled}
        setLog={setLog}
        setNotification={setNotification}
        goToLocation={goToLocation}
        turnsLeft={turnsLeft}
        setTurnsLeft={setTurnsLeft}
      />
    </div>
  }

  return (
    <main id={styles.app_container}>
      {renderRBN()}
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