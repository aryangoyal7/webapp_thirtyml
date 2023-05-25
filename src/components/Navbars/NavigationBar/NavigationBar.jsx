import { useState } from 'react';
import { Link } from 'react-router-dom'

import mobileHand from '/icons/smartphone.png'
import menuBar from '/icons/menu.png'

import css from './NavigationBar.module.css';

/*
loginbard component not working

*/

let NavigationBar = ({ toogleMenu, setToggleMenu, page }) => {
    let [menuDisplay, setMenuDisplay] = useState(false);
    let [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || false);
    let [auth, setAuth] = useState({
        closed: true,
        login: false,
        signup: false
    });

    const logoutHandler = () => {
        setLoggedIn(false);
        localStorage.removeItem("auth");
    }

    return <div className={css.navbar}>
        <img className={css.menuBar} src={menuBar} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
        <div className={css.navbarInner}>
            <div className={css.leftSide}>
                <img src={mobileHand} alt="mobile in hand icon" className={css.img} />
                <Link to='/get-the-app' className={css.appTxt}>Get The App</Link>
            </div>
            <div className={css.rightSide}>
                
               
                {page !== 'login-page' ? <Link to='/login-page' className={css.menuItem} >Login</Link> : ''}
                {page !== 'signup-page' ? <Link to='/signup-page' className={css.menuItem} >SignUp</Link> : ''}
                {page !== 'signup-page' ? <Link to='/user-bookings' className={css.menuItem} >My Bookings</Link> : ''}
            </div>
        </div>
        <div className={css.modals}>
          
           
            
        </div>
    </div>
}

export default NavigationBar;