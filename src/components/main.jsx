import React from 'react'

import '../styles/main.scss'
import Sidebar from './sidebar'
import Contenido from './contenido'


const Main = React.forwardRef((props, ref) => {

    return ( 
        <main className="cont-principal">
            <Sidebar ref={ref}/>
            <Contenido/>
        </main>
     );
})
 
export default Main;