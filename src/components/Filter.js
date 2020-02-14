import React, { Component } from 'react';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';
import { getFilters } from '../actions/filterActions';

class Filter extends Component {
    constructor(props){
        super(props);

        this.state = { 
            label: {isChecked: false},
            label2: {isChecked: true} 
        };
    }

    handleCheckboxChange = event => {
        console.log(event.target);
    }
    
    componentDidMount() {
        this.props.getFilters();
    }
    renderFilters() {
        const { filterList } = this.props.filters;
        return (
            <div>
                {filterList.map((item, idx) => {
                    const filterItem = item.strCategory;
                    return <Checkbox
                        key = {idx}
                        isChecked={this.state.label.isChecked}
                        name={filterItem}
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
        getFilters: () => dispatch(getFilters()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);