import React from 'react';
import Navbar  from "./Components/Navbar" ;
import Search from './Components/search';
import Dropdown from './Components/dropdown';
import search from './Components/search';

const App = () => {
  return (
    
      <>
      
      <Navbar />
      <Search busqueda= "buscar usuario" />
      </>
    
  );
}

export default App;
