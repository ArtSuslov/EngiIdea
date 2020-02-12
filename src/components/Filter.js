import React, { Component } from 'react';
import Checkbox from './Checkbox';

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
  
    render() {
      return (
        <div style={{ fontFamily: 'system-ui', 'width': '25%' }}>
            <Checkbox
                isChecked={this.state.label.isChecked}
                name='Label'
                onClick={this.handleCheckboxChange}
            />
            <Checkbox
                isChecked={this.state.label2.isChecked}
                name='Label2'
                onClick={this.handleCheckboxChange}
            />           
        </div>
      )
    }
}

export default Filter;