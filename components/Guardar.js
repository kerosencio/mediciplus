import AsyncStorage from 'react-native';

export default {
    async setItem(key, value) {
        try {
            return await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // console.error('AsyncStorage#setItem error: ' + error.message);
        }
    },
    async getItem(key) {
        return await AsyncStorage.getItem(key)
            .then((result) => {
                if (result) {
                    try {
                        result = JSON.parse(result);
                    } catch (e) {
                        // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                    }
                }
                return result;
            });
    },
    async removeItem(key) {
        return await AsyncStorage.removeItem(key);
    }
}
//---- Pref.js ---->
/*import { AsyncStorage, Alert } from "react-native"

export const kUserName = 'user_name';
export const kUserID = 'user_id';


export const setData = async (strKey, item) => {
    let value = JSON.stringify(item)
    if (value) {
        AsyncStorage.setItem(strKey, value);
    }
}

export const getData = (strKey, callback = (response1) => { }) => {
    AsyncStorage.getItem(strKey).then((value) => {
        callback(value)
    });
}*/