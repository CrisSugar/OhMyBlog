import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
/* import { Button } from 'react-bootstrap'; */

const NavBar = () => {
    return (
        <>
            <nav className='navbar navbar-dark bg-dark postNav'>
                <div className='container'>
                    <Link to={`/public`}> <a href='#!' className='navbar-brand' >Home</a></Link>
                    {/* <Link to={`/addPost`}><button class="btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary active">Añadir Entrada</label></button></Link> */}
                    <Link to={`/addPost`}> <a href='#!' className='navbar-brand' >Añadir Entrada</a></Link>
                </div>
            </nav>
        </>
    )
};

export default NavBar;