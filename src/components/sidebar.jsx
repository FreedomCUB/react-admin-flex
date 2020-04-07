import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChartLine, faBox, faFileAlt, faCalendarAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import userImg from '../img/usuario.svg'
import '../styles/sidebar.scss'
import Ul from './ulmenu'


const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="usuario">
                <img src={userImg} alt="" />
                <p>Bienvenid@: <span>Admin</span></p>
            </div>
            <div className="buscador">
                <input type="text" placeholder="Buscar..." />
            </div>
            <div className="menu-admin">
                <h2>Menú de Administración</h2>
                <ul className="menu">
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon={faAddressBook} />
                            Clientes
                        </a>
                        <Ul />
                    </li>
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon={faChartLine} />
                            Ventas
                        </a>
                        <Ul />
                    </li>
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon={faBox} />
                            Inventario
                        </a>
                        <Ul />
                    </li>
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon={faFileAlt} />
                            Facturas

                        </a>
                        <Ul />
                    </li>
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            Calendario

                        </a>
                        <Ul />
                    </li>
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon={faPencilAlt} />
                            Editar Perfil
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;