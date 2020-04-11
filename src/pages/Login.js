import React from 'react';
import '../App.css';
import Logo from '../img/donutlogo.png';
import { Link } from 'react-router-dom';

function Login(){
    return(
        
        <form className="container">
             <img src={Logo} className="App-logo-small" />
        <h3>Login</h3>

        <div className="form-group">
            <label>Username : </label>
            <input type="username" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
            <label>Password : </label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick="verify()">Login</button>
        
        <p className="forgot-password text-right">
            Create Your Account <li><Link to="/register">Register</Link></li>
        </p>
    
    </form>
    );
}

export default Login;

/* this verify function doesn't exist yet */