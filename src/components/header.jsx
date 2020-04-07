import React, { useState } from 'react'
import '../styles/header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCommentAlt, faBell } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    const [visible, setVisible] = useState(true)

    const menuOnClick = () => {
        setVisible(!visible)
       const menu = document.querySelector('.sidebar')
        if (visible) {
            menu.classList.add('no-menu')            
        }else{
            menu.classList.remove('no-menu')
        }

    }

    return (
        <header className="header">
            <div className="nombre-sitio">
                <h1 className="escritorio">AdminFlex</h1>
                <h1 className="movil">AF</h1>
            </div>
            <div className="barra">
                <div className="menu-izq"  >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={visible ? 'izq': 'oculto'}
                        onClick={menuOnClick}
                        />
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className={!visible ? 'derch': 'oculto'}
                        onClick={menuOnClick}
                    />


                </div>
                    <div className="menu-derch">
                        <div className="mensaje caja">
                            <a href="/">
                                <FontAwesomeIcon icon={faCommentAlt} />
                                <p>Mensajes</p>
                                <span>20</span>
                            </a>
                        </div>
                        <div className="alertas caja">
                            <a href="/">
                                <FontAwesomeIcon icon={faBell} />
                                <p>Alertas</p>
                                <span>10</span>
                            </a>
                        </div>
                        <div className="cerrar caja">
                            <a href="/">
                                <p>Cerrar Sesión</p>
                            </a>
                        </div>
                    </div>

                </div>
        </header>
    );
}

export default Header;