import React from 'react';
import Header from '@/components/Header';
import MisVotos from '@/components/MisVotos';
import Image from 'next/image';
import ImgPerfil from "../public/perfil/Ellipse 5.png"

export default function perfil() {
  return (
    <>
      <Header></Header>
      <section  className='perfil'>
        <article className='aticle-perfil'>
          <div className='perfil-cont'>
            <div className='content-perfil-blue' >
             
            </div>
            <Image className='img-perfil'
               src={ImgPerfil}
              alt="Imagen perfil"
             />
           
          </div>
          <div className='cont-button-perfil'>
              <button className='btn-perfil'>Mis votos</button>
              <button className='btn-perfil'>Mis publicaciones</button>
            </div>
        </article>
        <article className='p-5'>
                <MisVotos></MisVotos>
                <MisVotos></MisVotos>
                <MisVotos></MisVotos>
        </article>
        <article>
          <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          </div>
          <div>
            <button>Ver mas</button>
          </div>
        </article>
      </section>
      <div className="Footer">

      </div>
    </>
  );
}
