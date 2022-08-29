import type { NextPage } from 'next'
import Head from 'next/head'
import NewPagePanel from '../containers/home-container'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewPagePanel />
    </>
  )
}

export default Home