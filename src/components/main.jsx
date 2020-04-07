import React from 'react'

import '../styles/main.scss'
import Sidebar from './sidebar'
import Contenido from './contenido'


const Main = () => {
    return ( 
        <main className="cont-principal">
            <Sidebar/>
            <Contenido/>
        </main>
     );
}
 
export default Main;