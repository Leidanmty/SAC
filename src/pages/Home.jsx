import React from "react";

// esta es la pagina de Login
const Home = () => {
    return (
        <>
            <div className="containerPhater">
                <div className="containerLogin">
                    <h2>Sistema de Administracion de Clientes</h2>
                    <h2 className="title">SAC</h2>
                    <div className="datos">
                        <form action="" method="" >
                            <h3 className="dato1">Usuario: </h3>
                            <input type="text" placeholder="Nombre:" name="nombre" /*maxlength="2" */ />
                            <br />
                            <h3 className="dato1">Contraseña: </h3>
                            <input type="password" placeholder="****" name="contraseña" maxlength="8" />
                            <br />
                            <input type="submit" value="Iniciar sesion" className="enviar"></input>
                            <br />
                            <a href="#">Registrarse</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;