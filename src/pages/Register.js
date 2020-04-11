import React from 'react';
import '../App.css';
import Logo from '../img/donutlogo.png';
import { Link } from 'react-router-dom';


function Register(){
    return(
        <form className="container">
            <img src={Logo} className="App-logo-small" />
        <h3>Register</h3>

        <div className="form-group">
            <label>Username : </label>
            <input type="username" className="form-control" placeholder="Enter username" />
        </div>

        
        <div className="form-group">
            <label>Password : </label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
            <label>Email address : </label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>


        <button type="submit" className="btn btn-primary btn-block">Register</button>
        <p className="forgot-password text-right">
            Already registered? <li><Link to="/login">Login</Link></li>
        </p>
    </form>
    );
}

export default Register;