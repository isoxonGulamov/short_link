import React from 'react'
import { Outlet } from 'react-router-dom'
import {Footer} from '../components/footer/footer.jsx'
import {Header} from '../components/header/header-one.jsx'

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet/>
      </main>

      <footer >
        <Footer />
      </footer>
    </>
  )
}

