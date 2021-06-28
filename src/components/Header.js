import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Header = () =>{
    let history = useHistory();
    
    return(
        <header id="head">
            <div id="heading"><h1>Julian's  Portfolio</h1></div>
            <div id="links">
                <div onClick={ e => history.push('/') }><NavLink activeClassName={"active"} to="/" exact={true}>Home</NavLink></div>
            </div>
        </header>
    )
}

export default Header