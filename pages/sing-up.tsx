import Error from '@/components/Atoms/Error';
import Hidden from '@/components/Atoms/Hidden';
import React from 'react';

export default function singUp() {
  return (<div className="container-login">
      <div className="div-login">
        <h1 className="h1-login bg-transparent" >Sing Up</h1>
        <p className="bg-transparent">Registrate para ingresar</p>
          <h3 className="h3-login bg-transparent">Email</h3>
        <form className="bg-transparent form-login">
          <div className="div-input__login">
          <input
            className="input-login"
            type="email"
            placeholder='ejemplo@gmail.com'
          />
          </div>
          <h3 className="h3-login bg-transparent">Password</h3>
          <div className="div-input__login">
          <input
          className="input-login"
            type="password"
            placeholder="password"
            
          />
          <Hidden/>
          <Error/>
          </div>
          <div className="div-login__p bg-transparent mt-3 my-4">
            <p className="bg-transparent text-sm">*La contraseña debe contener mayúsculas, minusculas y números</p>
          </div>
          <div className="bg-transparent my-5">
            <button className="button-login__iniciar text-center">Crea una cuenta</button>
          </div>
          <div className="div-login__create bg-transparent">
          <button className="text-yellow-400  underline" >O inicia secion</button>
          </div>
        </form>
      </div>
    </div>)
  
}
