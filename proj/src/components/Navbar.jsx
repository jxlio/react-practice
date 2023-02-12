import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
  
      <nav>
        <ul className='flex w-screen justify-between my-3'>
          <li>Logo</li>
          <li>Info</li>
          <li>Contacto</li>
          <Link to={"/login"}>
          <button className=  'mx-2 bg-indigo-500 p-2 text-white shadow-md rounded-lg hover:bg-indigo-900' to= '/login'> Ingresar </button> 
          </Link>
      </ul>
    </nav>
 
  )
}

export default Navbar