/**
 * ReduxDemo home page.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class HomePage extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Main Page!</Text>
            </View>
        );
    }
}