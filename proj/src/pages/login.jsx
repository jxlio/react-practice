import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (


    <div className=' flex flex-col justify-center items-center h-screen'>
      
      <h1 className='font-bold'>Iniciar sesion</h1>

      <form className='mt-8 max-w-md'>
        <div>

        <input className='block relative appearance-none focus:outline-none border border-gray-600 w-full rounded-none' type="email" required />
        <input className='block appearance-none focus:outline-none border border-gray-600 w-full' type="password" required />
        </div>

        <div>
          <label htmlFor="recordar">Recuerdame</label>
          <input  type="checkbox" name='recordar'/>
          
        </div>
        
        <div>
        <Link to="/admin">
            <button type='submit ' className='mx-2 bg-indigo-500 p-2 text-white shadow-md rounded-lg hover:bg-indigo-900'>Ingresar</button>
          </Link>
        </div>
        
      </form>

    </div>

    
  )
}

export default Login