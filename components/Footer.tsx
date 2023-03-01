import React from 'react'


export default function Footer() {
  return (
    <div className='Footer'>
  
      <span className='Input-footer flex justify-between items-center' >
        <input  id="footer" placeholder='¿Qué quieres ver en tu ciudad?' type="text" /> 
        <label htmlFor="footer"><i className='bx bx-search text-xl'></i></label>
      </span>

    </div>
  )
}
