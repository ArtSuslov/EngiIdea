import React, { Component } from 'react';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';
import { getFilters, changeCheckbox } from '../actions/filterActions';
import { getDrinksByList } from '../actions/contentActions';
import styled from 'styled-components';

const Container = styled.div`
    font-family: Roboto;
    flex-basis: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.div`
    margin-top: 1.5em;
    width: 80%;
    height: 40px;
    line-height: 40px;
    background: #4E4E4E;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    color: #FFF;
`

class Filter extends Component {
    handleCheckboxChange = event => {
        const { name: drink } = event.target;
        const { checkedFiltersList } = this.props.filters;
        this.props.changeCheckbox(drink, checkedFiltersList);
    }
        
    componentDidMount() {
        this.props.getFilters();
    }

    handleButtonClick = () => {
        const {checkedFiltersList} = this.props.filters;
        this.props.getContent(checkedFiltersList);
    }

    renderFilters() {
        const { filterList, checkedFiltersList } = this.props.filters;
        return (
            <div>
                {filterList.map((item, idx) => {
                    return <Checkbox
                        key = {idx}
                        isChecked={checkedFiltersList.includes(item)}
                        name={item}
                        onChange={this.handleCheckboxChange}
                    />;
                })}
            </div>
        )
    }
    render() {
        const { isFetching } = this.props.filters;
        return (
            <Container>
                {isFetching  
                    ? <p>Fetching Data</p>
                    : this.renderFilters()
                }   
                <Button onClick={this.handleButtonClick}> APPLY </Button>   
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCheckbox: (drink, checkboxList) => dispatch(changeCheckbox(drink, checkboxList)),
        getFilters: () => dispatch(getFilters()),
        getContent: list => dispatch(getDrinksByList(list)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);