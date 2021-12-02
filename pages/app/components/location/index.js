import styles from './styles.module.scss'
import { useEffect, useState } from 'react';

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
    setOutroEnabled
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
        return <>
            {people.map(person => {
                if (person.name == 'Cook') {
                    if (navigatorConfronted) {
                        return <a key={person.name} onClick={() => {
                            setCookConfronted(true);
                            setCurrentEntity(person);
                        }}>{person.name}</a>
                    } else {
                        return <a key={person.name} onClick={() => {
                            setVentsEnabled(true);
                            setCurrentEntity(person);
                        }}>{person.name}</a>
                    }
                } else if (person.name == 'Navigator' && bodyFound && datapadRead) {
                    return <a key={person.name} onClick={() => {
                        setNavigatorConfronted(true);
                        setCurrentEntity(person);
                    }}>{person.name}</a>
                } else if (person.name == 'Security Officer' && cookConfronted) {
                    return <a key={person.name} onClick={() => {
                        setOutroEnabled(true);
                        setCurrentEntity(person);
                    }}>{person.name}</a>
                } else {
                    return <a key={person.name} onClick={() => setCurrentEntity(person)}>{person.name}</a>
                }
            })}
        </>
    }

    const renderObjects = () => {
        return <>
            {objects.map(object => {
                if (object.name == 'Air Vent') {
                    if (!ventsEnabled)
                        return <a key={object.name} className={styles.disabled} onClick={() => setCurrentEntity(object)}><strike>{object.name}</strike></a>
                    else {
                        if (location == 'Engineering') {
                            return <a key={object.name} onClick={() => {
                                setBodyFound(true);
                                setCurrentEntity(object);
                            }}>{object.name}</a>
                        } else {
                            return <a key={object.name} onClick={() => setCurrentEntity(object)}>{object.name}</a>
                        }
                    }
                } else if (object.name == 'Datapad' && passwordFound) {
                    return <a key={object.name} onClick={() => {
                        setDatapadRead(true);
                        setCurrentEntity(object);
                    }}>{object.name}</a>
                } else if (object.name == 'Locker') {
                    return <a key={object.name} onClick={() => {
                        setPasswordFound(true);
                        setCurrentEntity(object);
                    }}>{object.name}</a>
                } else {
                    return <a key={object.name} onClick={() => setCurrentEntity(object)}>{object.name}</a>
                }
            })}
        </>
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
        <div className={styles.location_page_container}>
            {!currEntity ?
                <>
                    <div className={styles.location_instructions_container}>
                        <h4>{data.locationName}</h4>
                        <p>Choose an object or person to interact with:</p>
                    </div>
                    <div className={styles.location_interactions_container}>
                        {renderPeople()}
                        {renderObjects()}
                    </div>
                </> : renderPassage(currEntity)
            }
        </div>
    )
}