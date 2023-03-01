import React from 'react'
import Layout from '@/components/Layout'
import Cards from '@/components/Cards'

export default function marcas() {
  return (
    <Layout>
    <section className='section-home'>
        <article className="article-home">
          
      <div className='flex flex-col gap-1'>
          <h2 className="text-title-card">Populares en Querétaro</h2>
          <p className="subtitle-card">Lo que las personas piden más</p>
      </div>
          <Cards></Cards>
        </article >
        <article className="article-home">
      <div className='flex flex-col gap-1'>
          <h2 className="text-title-card">Sugerencias para ti</h2>
          <p className="subtitle-card">Publicaciones que podrías colaborar</p>
      </div>
        <Cards></Cards>
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
        <article className="article-home">
      <div className='flex flex-col gap-1'>
          <h2 className="text-title-card">Recientes</h2>
          <p className="subtitle-card">Las personas ultimamente están hablando de esto</p>
      </div>
        <Cards></Cards>
        </article>
      </section>
   </Layout>
  )
}
