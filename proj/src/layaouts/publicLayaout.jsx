import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 

const PublicLayaout = ({children}) => {
  return (
    <div className='flex flex-col justify-between h-screen' >
        <Navbar/>
        <main className='h-full overflow-y-scroll bg-gray-900'>{children}</main>
        <Footer/>    
        
    </div>
  )
}

export default PublicLayaout