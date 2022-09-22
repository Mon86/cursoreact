import React from 'react';
import Search from './search';
import Dropdown from './dropdown';
import Paginas from './paginas';
const Navbar = () => {
    const dropdown=["MUSCULO", "RUTINA", "EJERCICIO",];
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Paginas />
                            <Dropdown lista= {dropdown}/>
                        </ul>
                        <Search busqueda="buscar producto"/>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default Navbar;
