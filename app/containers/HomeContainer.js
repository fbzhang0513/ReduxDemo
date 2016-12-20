/**
 * ReduxDemo home container.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import HomePage from '../pages/HomePage';

class HomeContainer extends Component {

    render() {
        return (
            <HomePage {...this.props} />
        );
    }
}

export default connect((state) => {
    return {homeBundlesReducer} = state;
})(HomeContainer);