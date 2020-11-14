import React from 'react'
import Header from '../components/Header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-200">
        <Header />
        <main className="flex-1 overflow-y-auto p-3 overflow-hidden" >
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
