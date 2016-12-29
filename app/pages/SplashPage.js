/**
 * ReduxDemo splash page.
 */

import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View
} from 'react-native';
import {connect} from 'react-redux';

import Home from '../containers/HomeContainer';
import Login from '../pages/LoginPage';

var {height, width} = Dimensions.get('window');

class SplashPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {navigator, isLoggedIn} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                const route = isLoggedIn ?
                    {component: Home, name: 'Home'}
                    : {component: Login, name: 'Login'};

                navigator.resetTo(route);
            });
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{flex: 1, width: width, height: height}}
                    source={require('../assets/home/splash_screen.jpg')}
                />
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        isLoggedIn: state.userReducer.isLoggedIn
    }
}

export default connect(mapStateToProps)(SplashPage);