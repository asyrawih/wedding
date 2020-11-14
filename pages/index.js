import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({response}) {
  console.log(response);
  return (
    <div className={styles.container}>
      <Head>
        <title>Wedding Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export async function getServerSideProps(ctx)
{
  const request = await fetch("http://localhost:3000/api/category/")
  const response = await request.json()
  return {
    props : {response}
  }
}

