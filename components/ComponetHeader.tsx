import React from 'react'

export default function ComponetHeader() {
  return (
    <div className='component-header'>
      <div className='logo'>
      
      </div>
      <span className='header-input'>
        <input id="input-header" type="text" placeholder='¿Qué quieres ver en tu ciudad?' />
        <label htmlFor="input-header"><i className='bx bx-search text-xl'></i></label>
      </span>
      <div className='category'>
        <button className='btn'>Marcas y tiendas</button>
        <button className='btn'>Artistas y conciertos</button>
        <button className='btn'>Torneos</button>
      </div>
    </div>
  )
}
