import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Hidden from "@/components/Atoms/Hidden";


function Home() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", credentials);
    console.log(res);

    if (res.status === 200) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="container-login">
      <div className="div-login">
        <h1 className="h1-login bg-transparent" >Login</h1>
        <p className="bg-transparent">Inicie sesíon con los datos que ingreso durante su registro  </p>
          <h3 className="h3-login bg-transparent">Email</h3>
        <form className="bg-transparent form-login" onSubmit={handleSubmit}>
          <div className="div-input__login">
          <input
          className="input-login"
            type="email"
            placeholder="ejemplo@gmail.com"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                email: e.target.value,
              })
            }
          />
          </div>
          <h3 className="h3-login bg-transparent">Password</h3>
          <div className="div-input__login">
          <input
          className="input-login"
            type="password"
            placeholder="password"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
          />
          <Hidden/>
          </div>
          <div className="div-login__p bg-transparent mt-3 my-4">
            <p className="bg-transparent">¿Olvidaste tu contraseña?</p><button className="bg-transparent text-yellow-400 button-login__recuperar underline">Recupérala aquí</button>
          </div>
          <div className="bg-transparent my-5">
            <button className="button-login__iniciar text-center">Iniciar sesión</button> 
          </div>
          <div className="div-login__create bg-transparent">
          <button className="text-yellow-400 underline" >O crea una cuenta</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;