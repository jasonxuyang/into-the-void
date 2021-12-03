import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const processLocationName = (str) => {
    if (str) {
        let strArr = str.split(' ');
        let finalStr = '';
        strArr.map((str, index) => {
            if (index == 0) {
                finalStr += str.toLowerCase();
            } else {
                finalStr += str;
            }
        });
        return finalStr;
    } else {
        return null;
    }
}

export default function Location({
    locationName,
    ventsEnabled,
    setVentsEnabled,
    passwordFound,
    setPasswordFound,
    datapadRead,
    setDatapadRead,
    bodyFound,
    setBodyFound,
    navigatorConfronted,
    setNavigatorConfronted,
    cookConfronted,
    setCookConfronted,
    outroEnabled,
    setOutroEnabled,
    setLog,
    setNotification,
    goToLocation,
    turnsLeft,
    setTurnsLeft
}) {
    const [currEntity, setCurrentEntity] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`../api/${processLocationName(locationName)}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            },
                (error) => {
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Failed to load</div>
    } else if (!data) {
        return <div>Loading...</div>
    }

    const people = data.people;
    const objects = data.objects;
    const location = data.locationName;

    const renderPeople = () => {
        return <div className={styles.person_container}>
            {people.map(person => {
                if (person.name == 'Cook') {
                    if (navigatorConfronted) {
                        return <div key={person.name} className={styles.person_card} onClick={() => {
                            setCookConfronted(true);
                            setNotification('You and the Navigator have the Cook, take him to the Hangar.');
                            setLog(log => log.concat(`Talked with ${person.name}.`));
                            setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                            setCurrentEntity(person);
                        }}>
                            <img src={person.imgUrl} alt={person.name} />
                            {person.name}
                        </div>
                    } else {
                        return <div key={person.name} className={styles.person_card} onClick={() => {
                            setVentsEnabled(true);
                            setLog(log => log.concat(`Talked with ${person.name}.`));
                            setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                            setCurrentEntity(person);
                        }}>
                            <img src={person.imgUrl} alt={person.name} />
                            {person.name}
                        </div>
                    }
                } else if (person.name == 'Navigator' && bodyFound && datapadRead) {
                    return <div key={person.name} className={styles.person_card} onClick={() => {
                        setNavigatorConfronted(true);
                        setNotification('Go to the Barrackss and confront the Cook.');
                        setLog(log => log.concat(`Talked with ${person.name}.`));
                        setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                        setCurrentEntity(person);
                    }}>
                        <img src={person.imgUrl} alt={person.name} />
                        {person.name}
                    </div>
                } else if (person.name == 'Security Officer' && cookConfronted) {
                    return <div key={person.name} className={styles.person_card} onClick={() => {
                        setOutroEnabled(true);
                        setLog(log => log.concat(`Talked with ${person.name}.`));
                        setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                        setCurrentEntity(person);
                    }}>
                        <img src={person.imgUrl} alt={person.name} />
                        {person.name}
                    </div>
                } else {
                    return <div key={person.name} className={styles.person_card} onClick={() => {
                        setLog(log => log.concat(`Talked with ${person.name}.`));
                        setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                        setCurrentEntity(person);
                    }}>
                        <img src={person.imgUrl} alt={person.name} />
                        {person.name}
                    </div>
                }
            })}
        </div>
    }

    const renderObjects = () => {
        return <div className={styles.object_container}>
            {objects.map(object => {
                if (object.name == 'Air Vent') {
                    if (!ventsEnabled)
                        return <div key={object.name} className={`${styles.object_card} ${styles.disabled}`} onClick={() => {
                            setLog(log => log.concat(`Interacted with ${object.name}.`));
                            setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                            setCurrentEntity(object);
                        }}><strike>{object.name}</strike></div>
                    else {
                        if (location == 'Engineering') {
                            return <div key={object.name} className={styles.object_card} onClick={() => {
                                setBodyFound(true);
                                setLog(log => log.concat(`Interacted with ${object.name}.`));
                                setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                                setCurrentEntity(object);
                            }}>{object.name}</div>
                        } else {
                            return <div key={object.name} className={styles.object_card} onClick={() => {
                                setLog(log => log.concat(`Interacted with ${object.name}.`));
                                setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                                setCurrentEntity(object);
                            }}>{object.name}</div>
                        }
                    }
                } else if (object.name == 'Datapad' && passwordFound) {
                    return <div key={object.name} className={styles.object_card} onClick={() => {
                        setDatapadRead(true);
                        setLog(log => log.concat(`Interacted with ${object.name}.`));
                        setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                        setCurrentEntity(object);
                    }}>{object.name}</div>
                } else if (object.name == 'Locker') {
                    return <div key={object.name} className={styles.object_card} onClick={() => {
                        setPasswordFound(true);
                        setNotification('I think this password can be typed in somewhere...');
                        setLog(log => log.concat(`Interacted with ${object.name}.`));
                        setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                        setCurrentEntity(object);
                    }}>{object.name}</div>
                } else {
                    return <div key={object.name} className={styles.object_card} onClick={() => {
                        setLog(log => log.concat(`Interacted with ${object.name}.`));
                        setTurnsLeft(location == 'Home' ? turnsLeft : turnsLeft - 0.5);
                        setCurrentEntity(object);
                    }}>{object.name}</div>
                }
            })}
        </div>
    }

    const renderPassage = (entity) => {
        if (entity.name == 'Datapad' && passwordFound) {
            return (
                <div className={styles.passage}>
                    {Array.isArray(entity.passages_unlocked.props.children) ?
                        entity.passages_unlocked.props.children.map((passage, index) => {
                            return <p key={`p ${index}`}>{passage.props.children}</p>
                        }) : <p>{entity.passages_unlocked.props.children}</p>
                    }
                </div>
            )
        } else if (entity.name == 'Engineer' && bodyFound) {
            return (
                <div className={styles.passage}>
                    {Array.isArray(entity.passages_unlocked.props.children) ?
                        entity.passages_unlocked.props.children.map((passage, index) => {
                            return <p key={`p ${index}`}>{passage.props.children}</p>
                        }) : <p>{entity.passages_unlocked.props.children}</p>
                    }
                </div>
            )
        } else if (entity.name == 'Navigator' && bodyFound && datapadRead) {
            return (
                <div className={styles.passage}>
                    {Array.isArray(entity.passages_unlocked.props.children) ?
                        entity.passages_unlocked.props.children.map((passage, index) => {
                            return <p key={`p ${index}`}>{passage.props.children}</p>
                        }) : <p>{entity.passages_unlocked.props.children}</p>
                    }
                </div>
            )
        } else if (entity.name == 'Cook' && navigatorConfronted) {
            return (
                <div className={styles.passage}>
                    {Array.isArray(entity.passages_unlocked.props.children) ?
                        entity.passages_unlocked.props.children.map((passage, index) => {
                            return <p key={`p ${index}`}>{passage.props.children}</p>
                        }) : <p>{entity.passages_unlocked.props.children}</p>
                    }
                </div>
            )
        } else if (entity.name == 'Security Officer' && cookConfronted) {
            return (
                <div className={styles.passage}>
                    {Array.isArray(entity.passages_unlocked.props.children) ?
                        entity.passages_unlocked.props.children.map((passage, index) => {
                            return <p key={`p ${index}`}>{passage.props.children}</p>
                        }) : <p>{entity.passages_unlocked.props.children}</p>
                    }
                </div>
            )
        } else {
            return (
                <div className={styles.passage}>
                    {Array.isArray(entity.passages.props.children) ?
                        entity.passages.props.children.map((passage, index) => {
                            return <p key={`p ${index}`}>{passage.props.children}</p>
                        }) : <p>{entity.passages.props.children}</p>
                    }
                </div>
            )
        }
    }

    return (
        <>
            {!currEntity ?
                <div className={styles.location_page_container}>
                    <div className={styles.location_instructions_container}>
                        <h4>{data.locationName}</h4>
                        <p>Choose a crew member or object to investigate:</p>
                    </div>
                    <div className={styles.location_interactions_container}>
                        {renderPeople()}
                        {renderObjects()}
                    </div>
                </div> : renderPassage(currEntity)
            }
            {
                !outroEnabled ?
                    currEntity ?
                        <div onClick={() => setCurrentEntity(null)} className={styles.back_button}><p>Back to {location}</p></div>
                        :
                        <div onClick={() => goToLocation('Home')} className={styles.back_button}><p>Go Home</p></div>
                    :
                    <Link href='/outro'>
                        <div className={`button ${styles.back_button}`}>Go To Main Deck</div>
                    </Link>
            }
        </>
    )
}