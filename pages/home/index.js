import Link from 'next/link'
import { useState } from 'react'
import Location from '../components/location';
import styles from './styles.module.scss'

export default function Home() {
  const [suspects, setSuspects] = useState([]);
  const [turnsLeft, setTurnsLeft] = useState(24);
  const [location, setLocation] = useState('home');

  const goToLocation = (locationName) => {
    setLocation(locationName);
    setTurnsLeft(location == 'home' ? turnsLeft : turnsLeft - 1);
  }

  const renderState = () => {
    return <>
      <h1>
        Into the Void
      </h1>
      <p>Time Left: {turnsLeft}</p>
      <p>Current Location: {location}</p>
    </>
  }

  const renderLocation = () => {
    return <>
      <Location
        locationName={location}
      />
      <a onClick={() => goToLocation('home')}><p>Go Back</p></a>
    </>
  }

  return (
    <div>
      <main>
        {renderState()}
        {location == 'home' ?
          <>
            <a onClick={() => goToLocation('Barracks')}><p>Barracks</p></a>
            <a onClick={() => goToLocation('Hanger')}><p>Hangar</p></a>
            <a onClick={() => goToLocation('Engineering')}><p>Engineering</p></a>
            <a onClick={() => goToLocation('Lab')}><p>Lab</p></a>
            <a onClick={() => goToLocation('Main Frame')}><p>Main Frame</p></a>
            <a onClick={() => goToLocation('Main Deck')}><p>Main Deck</p></a>
          </> : renderLocation()
        }
      </main>
    </div>
  )
}