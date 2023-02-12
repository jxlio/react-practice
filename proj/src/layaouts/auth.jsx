import React from 'react'

const Auth = ({children}) => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <main>
       <div className='flex w-full'>{children}</div> 
      </main>
    </div>
  )
}

export default Auth
