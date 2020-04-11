import React from 'react';
import '../App.css';
import Logo from '../img/donutlogo.png';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <form className="menu">
             <img src={Logo} className="App-logo-small" />
        

        <div className="container-menu">
        <h3>Menu</h3>
            <input type="username" className="form-control" placeholder="Enter username" />
        </div>


        <div className="container-order">
        <h3>Menu</h3>
            <input type="username" className="form-control" placeholder="Enter username" />
        </div>



        
    </form>
    );
}

export default Menu;