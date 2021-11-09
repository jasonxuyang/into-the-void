import Link from 'next/link'

export default function Hangar() {
    return (
        <div>
            <main>
                <h1>
                    Hangar
                </h1>
                <Link href='../home' ><a>
                    <p>Go Back</p>
                </a></Link>
            </main>
        </div>
    )
}