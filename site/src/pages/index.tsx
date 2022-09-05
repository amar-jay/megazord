import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="page">
      <Head>
        <title>Komrade Roadmap</title>
        <meta name="description" content="The Roadmap to building komrade the hub for enterpreneurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Komrade
        </h1>
        <ul className="todo-list">
          <li className='list-item'>Create A roadmap</li>
          <li className='list-item'>Make a business plan</li>
          <li className='list-item'>Write series of articles about what we do</li>
          <li className='list-item'>Make UI Designs</li>
          <li className='list-item text-secondary-washed-out list-none'>...</li>
        </ul>

      </main>

      <footer className="footer">
        The RoadMap from 2/9/2020 - 1/1/2024 <span className="pr-6 cursor-pointer"><a href="https://blog.komrade.themanan.me" className="text-secondary-washed-out decoration-none">Our Blog</a></span>
      </footer>
    </div>
  )
}

export default Home
