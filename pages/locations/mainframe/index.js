import Link from 'next/link'

export default function Mainframe() {
    return (
        <div>
            <main>
                <h1>
                    Mainframe
                </h1>
                <Link href='../home' ><a>
                    <p>Go Back</p>
                </a></Link>
            </main>
        </div>
    )
}