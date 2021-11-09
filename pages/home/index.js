import Link from 'next/link'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Into the Void
        </h1>

        <Link href='./locations/barracks' ><a>
          <p>Barracks</p>
        </a></Link>

        <Link href='./locations/engineering' ><a>
          <p>Engineering</p>
        </a></Link>

        <Link href='./locations/hangar' ><a>
          <p>Hangar</p>
        </a></Link>

        <Link href='./locations/lab' ><a>
          <p>Lab</p>
        </a></Link>

        <Link href='./locations/main-deck' ><a>
          <p>Main Deck</p>
        </a></Link>

        <Link href='./locations/mainframe' ><a>
          <p>Main Frame</p>
        </a></Link>

      </main>
    </div>
  )
}