/**
 * ReduxDemo App
 */

import React, {Component} from 'react';
import {
    Navigator,
    View,
    StatusBar,
} from 'react-native';

import Home from './containers/HomeContainer';

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    translucent={true}
                />
                <Navigator
                    initialRoute={{name: 'Home', component: Home}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator={navigator} route={route} {...route.passProps} />
                        );
                    }}
                />
            </View>
        );
    }
}