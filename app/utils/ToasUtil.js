/**
 * Created by zfb on 2016/12/29.
 */

import Toast from 'react-native-root-toast';

let toast;

/**
 * 弹出一个较短时间的Toast
 * @param content
 */
const showShort = (content) => {
    if (toast !== undefined) {
        Toast.hide(toast);
    }
    toast = Toast.show(content.toString(), {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0
    });
};

/**
 * 弹出一个较长时间的Toast
 * @param content
 */
const showLong = (content) => {
    if (toast !== undefined) {
        Toast.hide(toast);
    }
    toast = Toast.show(content.toString(), {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0
    });
};

export default ToastUtil = {
    showShort,
    showLong,
}