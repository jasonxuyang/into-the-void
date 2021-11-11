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
                <>
                    <h1 className={styles.title}>Into the Void</h1>
                    <div className={styles.button} onClick={goToNextPassage}>Start</div>
                </>
            )
        } else if (currPassage > data.passages.length - 1) {
            return <Link href='/app'>
                <div className={styles.button}>Begin</div>
            </Link>
        } else {
            return (
                <>
                    {renderPassage()}
                    {
                        currPassage > data.passages.length - 2 ? <Link href='/app'>
                            <div className={styles.button}>Begin</div>
                        </Link> : <div className={styles.button} onClick={goToNextPassage}>Continue</div>
                    }
                </>
            )
        }
    }

    return (
        <main className={styles.intro_container}>
            {renderIntro()}
        </main>
    )
}