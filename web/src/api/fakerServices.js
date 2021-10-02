import axios from 'axios';
import { FakerApiUrl } from '../config/config'

export const GetUsers = async () => {
    const URL = FakerApiUrl + 'GetUsers';
    try {
        const response = await axios.post(URL, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const InsertFakeData = async (jsonData) => {
    const URL = FakerApiUrl + 'InsertFakeData';
    try {
        const response = await axios.post(URL,jsonData, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const GetLastPosition = async () => {
    const URL = FakerApiUrl + 'GetLastPosition';
    try {
        const response = await axios(URL, {
            params: {
                url: FakerApiUrl
            },
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const DeleteAll = async () => {
    const URL = FakerApiUrl + 'DeleteAll';
    try {
        const response = await axios(URL, {
            params: {
                url: FakerApiUrl
            },
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (err) {
        throw err;
    }
};