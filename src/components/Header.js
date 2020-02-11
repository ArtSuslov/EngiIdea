import React from 'react';
import logo from '../images/cocktail.png';

const Header = () => {
    return (
        <header className='App-header'>
            <span>
                Cocktail DB
            </span>
            <img src={logo} className='App-logo' alt='logo' />
        </header>
    )
}

export default Header;