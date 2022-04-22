import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-0">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center py-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to{' '}
          <a className="text-blue-400" href="#">
            Super Blog
          </a>
        </h1>

        </main>
    </div>
  )
}

export default Home
