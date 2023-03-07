import React from 'react';
import Image from 'next/image';
import paraCuando from '../components/icons/paraCuando.png';
import subTitle from '../components/icons/subtitle.png';

export default function Post() {
  return (
    <div className="container-createPublication bg-transparent">
      <div className="div-createPublication__one bg-blue-800">
        <Image
          className="bg-transparent m-auto pt-16"
          src={paraCuando}
          alt="para cuando"
        />
        <Image
          className="bg-transparent m-auto"
          src={subTitle}
          alt="marcas, artista y torneos"
        />
        <h1 className="bg-transparent text-yellow-500 text-xl pt-14 pl-8 font-medium">
          ¡Bienvenido, <br /> creador!
        </h1>
        <br />
        <p className="bg-transparent text-white text-base pl-8 pr-6">
          A continuación puedes completar la info de la marca, artista o torneo
          que quieres cerca.
        </p>
        <button className="text-white text-base font-light pl-8 button-createPublication">
          Ayuda
        </button>
      </div>
      <div className="div-createPublication__two">
        <a href="http://localhost:3000/create-publication">
          <button className="text-blue-800 pl-12 text-xl font-medium pt-8">
            Back
          </button>
        </a>
        <div className="relative progress-bar pt-9">
          <div className="progress-bar__tree bg-blue-800"></div>
        </div>
        <div className='div-fotos'>
          <div className="container-info__create">
            <h2 className="pt-10 text-2xl font-medium ">Fotos</h2>
            <p className="text-gray-600 pt-3 pb-3">
              Selecciona máximo tres fotos para crear una galeria
            </p>
            <div className="container-pics mt-14">
              <div>
                <button className='text-blue-900'>+</button>
              </div>
              <div>
                <button className='text-blue-900'>+</button>
              </div>
              <div>
                <button className='text-blue-900'>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="button-siguiente__createPublication">
              <a
                className="m-auto h-full w-full"
                href=""
              >
                <button className=" text-white rou w-11 bg-blue-800 text-xl font-medium">
                  Publicar
                </button>
              </a>
            </div>
      </div>
    </div>
  );
}
