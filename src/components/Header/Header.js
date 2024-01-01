import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(()=>{
        alert('User logOut Successfully')
    })
    .catch(error =>{
        console.log(error.message)
    })
  }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
               { user ?  <Link><button className='logOut-btn' onClick={handleLogOut}>Sign Out</button></Link>
                :<Link to="/login">Login</Link>
            }
                
            </div>
        </nav>
    );
};

export default Header;