import Link from 'next/link'
import { useState } from 'react';
import styles from './styles.module.scss'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Outro() {
    const { data, error } = useSWR('../api/outro', fetcher);
    const [currPassage, setCurrPassage] = useState(0);
    const [action, setAction] = useState(null);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const goToPreviousPassage = () => {
        setCurrPassage(currPassage - 1);
    }

    const goToNextPassage = () => {
        setCurrPassage(currPassage + 1);
    }

    const renderPassage = () => {
        return (
            <div className={styles.passage}>
                {Array.isArray(data.passages[currPassage].props.children) ?
                    data.passages[currPassage].props.children.map((passage, index) => {
                        return <p key={`${currPassage} ${index}`}>{passage.props.children}</p>
                    }) : <p>{data.passages[currPassage].props.children}</p>
                }
            </div>
        )
    }

    const renderEnding = num => {
        if (num == 1) {
            return <div className={styles.ending}>
                <p>You kill him.</p>
                <p>The End.</p>
                <Link href='/app'>
                    <div className={`button`}>Play Again</div>
                </Link>
            </div>
        } else if (num == 2) {
            return <div className={styles.ending}>
                <p>Goodbye Cook.</p>
                <p>The End.</p>
                <Link href='/app'>
                    <div className={`button`}>Play Again</div>
                </Link>
            </div>
        } else if (num == 3) {
            return <div className={styles.ending}>
                <p>Goodbye Cook hehe.</p>
                <p>The End.</p>
                <Link href='/app'>
                    <div className={`button`}>Play Again</div>
                </Link>
            </div>
        }
    }

    const renderOutro = () => {
        return (
            <div className={styles.passage_container}>
                {
                    action ? renderEnding(action) :
                        currPassage > data.passages.length - 2 ?
                            <>
                                <div className={styles.decision_container}>
                                    <p>*The Navigator looks to you</p>
                                    <p>Navigator: You put this all together… what should we do with him?</p>
                                    <div className={styles.decision_actions_container}>
                                        <div className={styles.action} onClick={() => setAction(1)}>Kill him</div>
                                        <div className={styles.action} onClick={() => setAction(2)}>Send him aimlessly  into space in a LifeBoat</div>
                                        <div className={styles.action} onClick={() => setAction(3)}>Plug the Beacon’s coordinates into the LifeBoat and send him to his doom</div>
                                    </div>
                                </div>
                            </> :
                            <>
                                {renderPassage()}
                                {currPassage > 0 ? <div className={`button ${styles.back}`} onClick={goToPreviousPassage}>Back</div> : null}
                                <div className={`button ${styles.continue}`} onClick={goToNextPassage}>Continue</div>
                            </>
                }
            </div>
        )
    }

    return (
        <main className={styles.outro_container}>
            {renderOutro()}
        </main>
    )
}