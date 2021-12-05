import type { NextPage } from 'next'
import Head from 'next/head'
import DropArea from '../components/DropArea'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Upload File</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Upload File to Web3.Storage
        </h1>
        <DropArea/>
      </main>
    </div>
  )
}

export default Home