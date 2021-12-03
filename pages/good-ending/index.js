import Link from 'next/link'
import { useState } from 'react';
import styles from './styles.module.scss'


export default function Outro() {

    return (
        <main className={styles.outro_container}>
            <p>This is the good ending.</p>
            <Link href='/app'>
                <div className={`button`}>Play Again</div>
            </Link>
        </main>
    )
}