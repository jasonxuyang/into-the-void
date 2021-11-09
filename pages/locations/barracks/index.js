import Link from 'next/link'

export default function Barracks() {
    return (
        <div>
            <main>
                <h1>
                    Barracks
                </h1>
                <Link href='../home' ><a>
                    <p>Go Back</p>
                </a></Link>
            </main>
        </div>
    )
}