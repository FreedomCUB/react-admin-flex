import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons'


const Ul = () => {
    return (
        <ul >
            <li><a href="/"><FontAwesomeIcon icon={faList} />Ver Todos</a></li>
            <li><a href="/"><FontAwesomeIcon icon={faPlus} />Agregar Nuevo</a></li>
        </ul>
    );
}

export default Ul;