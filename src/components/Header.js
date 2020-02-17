import React from 'react';
import logo from '../images/cocktail.png';
import styled from 'styled-components';

const DivideLine = styled.div`
    position: absolute;
    width: 0px;
    height: 100vh;
    left: 200px;
    top: 70px;
    border: 1px solid #D0D0D0;
`

const Header = () => {
    return (
        <header className='App-header'>
            <DivideLine />
            <div>
                Cocktail DB
            </div>
            <img src={logo} className='App-logo' alt='logo' />
        </header>
    )
}

export default Header;