/**
 * ReduxDemo login page.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
import {connect} from 'react-redux';

import {userLogin, userLoginSkip} from '../actions/userActions';
import Home from '../containers/HomeContainer'
// import Loading from '../components/Loading';
import Toast from '../utils/ToasUtil';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
        };
    }

    _toHomePage() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: 'Home',
                component: Home,
            })
        });
    }

    render() {
        const {userReducer} = this.props;
        if (userReducer.isLoggedIn) {
            this._toHomePage();
        }

        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image source={require('../assets/user/ic_account.png')}
                           style={styles.loginIcon}/>
                    <TextInput
                        ref="login_account"
                        placeholder='请输入帐号'
                        style={styles.loginInput}
                        onChangeText={this.onChangeAccount.bind(this)}/>
                </View>
                <View style={styles.loginContainer}>
                    <Image source={require('../assets/user/ic_password.png')}
                           style={styles.loginIcon}/>
                    <TextInput
                        ref="login_password"
                        style={styles.loginInput}
                        secureTextEntry={true}
                        placeholder='请输入密码'
                        onChangeText={this.onChangePassword.bind(this)}/>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={this._login.bind(this)}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginSkip} onPress={this._loginSkip.bind(this)}>
                    <Text style={styles.loginSkipText}>跳过登录</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _loginSkip() {
        this._toHomePage();
    }

    _login() {
        let {account, password} = this.state;

        if (!account.length) {
            Toast.showShort('请输入正确的帐号');
            return;
        }
        if (!password.length) {
            Toast.showShort('请输入密码');
            return;
        }

        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            dispatch(userLogin(account, password));
        });
    }

    onChangeAccount(text) {
        this.state.account = text;
    }

    onChangePassword(text) {
        this.state.password = text;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },

    loginContainer: {
        flexDirection: 'row',
        height: 60,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#dbdada',
    },
    loginIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    loginInput: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
        fontSize: 16,
    },

    loginBtn: {
        backgroundColor: '#ff6836',
        padding: 10,
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 3,
    },
    loginText: {
        color: '#ffffff',
        fontSize: 17,
    },

    loginSkip: {
        alignItems: 'flex-end',
        marginRight: 10,

    },
    loginSkipText: {
        color: '#62a2e0',
    },

    forgetContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 10,
    },
});

export default connect((state) => {
    const {userReducer} = state;
    return {
        userReducer
    }
})(LoginPage);
