import React, { Component } from 'react';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';
import { getFilters, changeCheckbox } from '../actions/filterActions';

class Filter extends Component {
    handleCheckboxChange = event => {
        const { name: drink } = event.target;
        const { checkedFiltersList } = this.props.filters;
        this.props.changeCheckbox(drink, checkedFiltersList);
    }
        
    componentDidMount() {
        this.props.getFilters();
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
                        onClick={this.handleCheckboxChange}
                    />;
                })}
            </div>
        )
    }
    render() {
        const { isFetching } = this.props.filters;
        return (
            <div style={{ fontFamily: 'system-ui', 'width': '25%' }}>
                {isFetching  
                    ? <p>Fetching Data</p>
                    : this.renderFilters()
                }   
                <div> Apply </div>   
            </div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);