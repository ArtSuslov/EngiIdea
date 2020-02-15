import React, { Component } from 'react';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';
import { getFilters } from '../actions/filterActions';

class Filter extends Component {
    constructor(props){
        super(props);

        this.state = { 
            checkedItems: [],
        };
    }

    handleCheckboxChange = event => {
        const newArr = [...this.state.checkedItems];
        if (newArr.includes(event.target.name)) {
            this.setState({checkedItems: newArr.filter(drink => drink !== event.target.name)});
        } else {
            newArr.push(event.target.name);
            this.setState({checkedItems: newArr});
        }
    }
    
    componentDidMount() {
        this.props.getFilters();
    }

    renderFilters() {
        const { filterList } = this.props.filters;
        const { checkedItems } = this.state;
        return (
            <div>
                {filterList.map((item, idx) => {
                    return <Checkbox
                        key = {idx}
                        isChecked={checkedItems.includes(item)}
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
        getFilters: () => dispatch(getFilters()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);