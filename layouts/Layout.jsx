import React from 'react'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MobileNavbar from '../components/MobileNavbar/MobileNavbar'

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-200">
        <Header />
        <main className="flex-1 overflow-y-auto p-3 overflow-hidden" >
          {children}
          <Footer />
        </main>
        <MobileNavbar />
      </div>
    </>
  )
}

export default Layout
