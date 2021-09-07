import {GET_USERS} from '../constants/action-types';
import { axiosInstance } from '../../api/config/axiosInstance';
import { urls } from '../../api/endpoints';

export const setUsers = users => ({
    type: GET_USERS,
    users
});

export const getUsers = () => {
    return async (dispatch) => {

        try { 

            const response = await axiosInstance.get(`${urls.getUsers}`);

            const data = response.data.data;

            if (data.length !== 0) {
                dispatch(setUsers(data));
            } else {
                dispatch(setUsers([]));
            }

        } catch (err) {
            throw new Error(err)
        }

    }
}