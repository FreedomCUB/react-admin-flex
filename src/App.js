import React, { useRef } from 'react';
import Header from './components/header';
import Main from './components/main';


function App() {

  const asideRef = useRef();  
  return (
    <>
     <Header asideRef={asideRef}/>
     <Main ref={asideRef}/>
    </>
  );
}

export default App;
