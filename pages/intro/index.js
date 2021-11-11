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

    const goToNextPassage = () => {
        setCurrPassage(currPassage + 1);
    }

    const renderIntro = () => {
        if (currPassage < 0) {
            return (
                <>
                    <h1>Into the Void</h1>
                    <div className={styles.button} onClick={goToNextPassage}>Start</div>
                </>
            )
        } else if (currPassage == data.passages.length - 2) {
            return <Link href='/app'>
                <div className={styles.button}>Begin</div>
            </Link>
        } else {
            return (
                <>
                    <p className={styles.passage}>{data.passages[currPassage]}</p>
                    <div className={styles.button} onClick={goToNextPassage}>Continue</div>
                </>
            )
        }
    }

    return (
        <main className={styles.container}>
            {renderIntro()}
        </main>
    )
}