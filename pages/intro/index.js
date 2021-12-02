import Link from 'next/link'
import { useState } from 'react';
import styles from './styles.module.scss'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Intro() {
    const { data, error } = useSWR('../api/intro', fetcher);
    const [currPassage, setCurrPassage] = useState(-1);

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

    const renderIntro = () => {
        if (currPassage < 0) {
            return (
                <div className={styles.title_container}>
                    <div className={styles.title_info_container}>
                        <h1 className={styles.title}>Into the Void</h1>
                        <p>Made for Georgia Tech&apos;s LMC 2410 - Intro to Game Studies Class</p>
                        <div className={'button'} onClick={goToNextPassage}>Start</div>
                    </div>
                    <img src='/asset/title-screen.png' alt='pixel art spaceship' className={styles.title_image} />
                </div>
            )
        } else {
            return (
                <div className={styles.passage_container}>
                    {renderPassage()}
                    {
                        currPassage > data.passages.length - 2 ? <Link href='/app'>
                            <div className={`button ${styles.continue}`}>Begin</div>
                        </Link> : <div className={`button ${styles.continue}`} onClick={goToNextPassage}>Continue</div>
                    }
                    <div className={`button ${styles.back}`} onClick={goToPreviousPassage}>Back</div>
                </div>
            )
        }
    }

    return (
        <main className={styles.intro_container}>
            {renderIntro()}
        </main>
    )
}