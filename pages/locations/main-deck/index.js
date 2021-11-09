import Link from 'next/link'

export default function MainDeck() {
    return (
        <div>
            <main>
                <h1>
                    Main Deck
                </h1>
                <Link href='../home' ><a>
                    <p>Go Back</p>
                </a></Link>
            </main>
        </div>
    )
}