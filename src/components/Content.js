import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import styled from 'styled-components';

const Container = styled.div`
    overflow-y: auto;
    height: 100vh;
    font-family: Roboto;
    flex-basis: calc(96% - 201px);
    padding-left: 2%;
    padding-right: 2%;

`
class Content extends Component {
    renderContent () {
        const { categoriesList, isFetching } = this.props.content;
        return (
            <Container>
                {isFetching
                    ? <p>Fetching Data</p>
                    : categoriesList.map((category, idx) => <Category 
                                                            key={idx}
                                                            name={category.name}
                                                            drinks={category.drinks}
                                                        />)}
            </Container>
        )
    }
    render(){
        return (
            <Fragment>
                {this.renderContent()}
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        content: state.content,
    }
}
export default connect(mapStateToProps)(Content);