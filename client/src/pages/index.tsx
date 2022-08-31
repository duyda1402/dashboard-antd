import Head from 'next/head'
import HomeContainer from '../containers/home'
import DefaultLayout from '../layouts/default'
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer />
    </>
  )
}

HomePage.getLayout = (page: React.ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}
