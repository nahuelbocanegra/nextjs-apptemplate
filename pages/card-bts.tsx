import Cards from '@/components/Cards'
import EventDetalle from '@/components/EventDetalle'
import Layout from '@/components/Layout'
import React from 'react'

export default function cardBts() {
  return (
    <Layout>
      <EventDetalle></EventDetalle>
      <section>
        <article>
          <div>
            <span>Artista / Pop / Rock</span>
            <h2>Concierto de Lady Gaga</h2>
            <p>El concierto con la temática de Lady gaga en Las Vegas. 
              El concierto con la temática de Lady gaga en Las Vegas.
              El concierto con la temática.
            </p>
            <a href="">ladygaga.com</a>
            <span><i className='bx bx-user text-lg'></i><p>90’800’756 votos</p></span>
          </div>
          <div>

          
          </div>
          <button>Votar</button>
        </article>
        <article className='article-intereses'>
          <h2 className='article-intereses-title'>¡Hagámoslo más personal!</h2>
          <p className='article-intereses-text'>Selecciona tus interes para brindarte sugerencia de acuerdo a tus gustos</p>
          <div className='intereses'>
            
            <span className='int-span'>Artistas mexicanos</span>
            <span className='int-span'>Tiendas de ropa</span>
            <span className='cont-int'>  <span className='int-span'>Rock </span> <span className='int-span restaurant'>Restaurantes</span></span>
            <span className='int-span rest'>Restaurantes</span>
          </div>
          <a href="" className='link-interses' >Ver todos los intereses</a>
        </article>
        <article>
          <h2></h2>
          <p></p>
          <Cards></Cards>
        </article>
      </section>
  </Layout>
  )
}
