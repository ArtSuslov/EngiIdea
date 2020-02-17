import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledContainter = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CategoryName = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    border-bottom: 1px solid #D0D0D0;
    color: #818181;
    padding-bottom: 10px;
    flex-basis: 100%;
`

const Category = props => (
    <StyledContainter>
        <CategoryName>{props.name}</CategoryName>
        {props.drinks.map((drink, idx) => (
            <Card
                key={idx}
                drink={drink}   
            />
        ))}
    </StyledContainter>
)

export default Category;