import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const Layout = () => {
  return (
      <>
        <Navbar />
          <div className='container'>
            <Outlet />
          </div>
        <Footer />
      </>
    
  )
}

export default Layout