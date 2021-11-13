import styles from './styles.module.scss'
import useSWR from 'swr'
import { useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json())

const processLocationName = (str) => {
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
}

export default function Location({
    locationName,
    ventsEnabled,
    setVentsEnabled
}) {
    const [currEntity, setCurrentEntity] = useState(null);
    const { data, error } = useSWR(`../api/${processLocationName(locationName)}`, fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const people = data.people;
    const objects = data.objects;

    const renderPeople = () => {
        return <>
            {people.map(person => {
                if (person.name == 'Cook') {
                    return <a key={person.name} onClick={() => {
                        setVentsEnabled(true);
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
                    else
                        return <a key={object.name} onClick={() => setCurrentEntity(object)}>{object.name}</a>
                } else {
                    return <a key={object.name} onClick={() => setCurrentEntity(object)}>{object.name}</a>
                }
            })}
        </>
    }

    const renderPassage = (entity) => {
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

    return (
        <div className={styles.location_page_container}>
            {!currEntity ?
                <>
                    <div className={styles.location_instructions_container}>
                        <h4>{data.locationName}</h4>
                        <p>Choose an object or person to interact with:</p>
                    </div>
                    <div>
                        {renderPeople()}
                        {renderObjects()}
                    </div>
                </> : renderPassage(currEntity)
            }
        </div>
    )
}