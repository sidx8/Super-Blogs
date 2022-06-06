import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-600 flex-col items-center justify-center py-0">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center py-20 text-center">
        <h1 className="text-5xl text-gray-200 font-bold antialiased">
          Welcome to{' '}
          <Link href="/Login">
          <a className="text-red-200 subpixel-antialiased" href="#">
            Super Blog
          </a>
          </Link>
        </h1>
        </main>
    </div>
  )
}

export default Home
