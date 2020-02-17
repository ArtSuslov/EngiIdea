import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1 20%;
    margin-bottom: 1em;
    @media (max-width: 1024px){
        flex: 1 21%;
    }
    @media (max-width: 768px){
        flex: 1 33%;
    }
`

const Drink = styled.p`
    margin-top: 1em;
    font-size: 18px;
`

const Image = styled.img`
    width: 150px;
    height: 150px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

const Card = props => {
    const {strDrink: name, strDrinkThumb: src} = props.drink;
    return (
        <Wrapper>
            <Image src={src} alt={name} />
            <Drink>{name}</Drink>
        </Wrapper>
)}

export default Card;