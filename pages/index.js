import Head from 'next/head'
import Banner from '../components/banner/Banner'
import Latest from '../components/latest/Latest'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>HB-STORE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Banner/>
      <Latest/>
    </div>
  )
}
