import React from 'react'
import '../styles/contenido.scss'

const Contenido = () => {
    return (
        <div className="contenido">
            <h2 className="encabezado">Administración de Clientes</h2>

            <form action="" className="formulario">

                <div className="campo">
                    <label htmlFor="nombre">Nombre Cliente</label>
                    <input type="text" id="nombre" />
                </div>
                <div className="campo">
                    <label htmlFor="nombre">Apellido Cliente</label>
                    <input type="text" id="apellido" />
                </div>
                <div className="campo">
                    <label htmlFor="nombre">Empresa</label>
                    <input type="text" id="empresa" />
                </div>
                <div className="campo">
                    <label htmlFor="nombre">Dirección</label>
                    <input type="text" id="direccion" />
                </div>
                <div className="campo expandir">
                    <label htmlFor="nombre">Otra Información</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="campo expandir">
                    <label>Membresia:</label>
                    <div className="opciones">
                        <input type="radio" id="normal"
                            name="contact" value="normal" />
                        <label htmlFor="normal">Normal</label>

                        <input type="radio" id="basico"
                            name="contact" value="basico" />
                        <label htmlFor="basico">Básico</label>

                        <input type="radio" id="premium"
                            name="contact" value="premium" />
                        <label htmlFor="premium">Premium</label>

                        <input type="radio" id="gold"
                            name="contact" value="gold" />
                        <label htmlFor="gold">Gold</label>
                    </div>
                </div>

                <div className="campo enviar expandir">
                    <input type="submit" className="boton" value="Enviar" />
                </div>
            </form>
        </div>

    );
}

export default Contenido;