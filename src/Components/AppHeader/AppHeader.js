import React, { useContext, useState } from 'react';
import classes from './AppHeader.module.css';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../Utils/UserContext';
import { useSelector } from 'react-redux';

const AppHeader = () => {
    const [islogged, setlogIn] = useState("LogIn");
    const navigate = useNavigate();
    var data = useContext(UserContext); // context hook
    var CartData = useSelector((store)=>{
        return store.cart.items
    }); // redux hook
    console.log(CartData);
    function loginHandler(){
        //islogged==="LogIn"?setlogIn("LogOut"):setlogIn("LogIn");
        navigate("/Login");
    }
  return (
    <div className={classes.header}>
        <img className= {classes.logo} src="https://seeklogo.com/images/F/foodx-online-food-ordering-system-logo-145CB16578-seeklogo.com.png" alt="Italian Trulli"></img>
        <div className={classes.subMenu}>
            <div className={classes.nav_items}>
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/AddToCart">{CartData.length > 0? "Cart"+CartData.length:"Add to Cart"}</Link></li>
                    <li>{data.logInUser}</li>
                </ul>
            </div>
        <button className={classes.login} onClick={loginHandler}>{islogged}</button>
        </div>
    </div>
  )
}

export default AppHeader