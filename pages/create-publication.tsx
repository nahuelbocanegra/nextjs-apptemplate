import React from 'react';
import Image from 'next/image';
import paraCuando from '../components/icons/paraCuando.png';
import subTitle from '../components/icons/subtitle.png';

export default function createPublication() {
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
        <a href="http://localhost:3000/">
          <button className="text-blue-800 pl-6 text-xl font-medium pt-8">
            Back
          </button>
        </a>
        <div className="relative progress-bar pt-8    ">
          <div className="progress-bar__one bg-gray-300"></div>
          <div className="progress-bar__two bg-blue-800"></div>
        </div>
        <div className="container-info__create">
          <h2 className=" h2-createPublication font-medium text-2xl">
            Publicación
          </h2>
          <p className="text-gray-600 pt-3 pb-3">Información basica</p>
          <form className="pt-6">
            <div className=" relative div-title__createPublication h-11 border-solid rounded-xl">
              <p className="p-title-createPublication absolute bg-white text-gray-600">
                Titulo de la publicación
              </p>
              <input
                className="input-title__createPublication h-8"
                type="text"
              />
            </div>

            <div className="container-typeAndCategory pt-7">
              <div className="  relative div-type__createPublication h-11 border-solid rounded-xl">
                <select className="w-11/12 select-createPublication bg-white text-gray-600">
                  <option selected value="4">
                    Tipo
                  </option>
                  <option value="5">Marcas y tiendas</option>
                  <option value="6">Artistas y conciertos</option>
                  <option value="7">Torneos</option>
                </select>
              </div>
              <div className=" relative div-category__createPublication h-11 border-solid rounded-xl">
                <select className=" select-createPublication bg-white text-gray-600">
                  <option selected value="4">
                    Categoria
                  </option>
                  <option value="5">Ropa y accesorios</option>
                  <option value="6">Deportes</option>
                  <option value="7">Conciertos</option>
                  <option value="8">Meet & Greet</option>
                  <option value="9">E-sport</option>
                  <option value="10">Pop-Rock</option>
                  <option value="11">Tecnología</option>
                  <option value="12">Hogar-Decoracion</option>
                  <option value="13">Abastecimiento</option>
                </select>
              </div>
            </div>
            <div className=" relative div-recomendacion__createPublication mt-7 border-solid rounded-xl">
              <p className="p-title-createPublication absolute bg-white text-gray-600">
                ¿Por qué lo recomiendas?
              </p>
              <textarea
                className="input-recomendation__createPublication m-auto h-4/5 w-11/12"
                maxLength={302}
              />
            </div>
            <div className=" relative div-title__createPublication mt-7 h-11 border-solid rounded-xl">
              <p className="p-title-createPublication absolute bg-white text-gray-600">
                Link de referencia
              </p>
              <input
                className="input-title__createPublication h-8"
                type="text"
              />
            </div>
          </form>
            <div className="button-siguiente__createPublication">
              <a
                className="m-auto h-full w-full"
                href="http://localhost:3000/post"
              >
                <button className=" text-white rou w-11 bg-blue-800 text-xl font-medium">
                  Siguiente
                </button>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
