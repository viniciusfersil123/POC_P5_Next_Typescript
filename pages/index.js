import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <Canvas />
        </h1> 
      </main>
    </div>
  )
}
