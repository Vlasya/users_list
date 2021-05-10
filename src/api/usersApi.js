import axios from "axios";
import {USERS_API} from "./constants";

export const getUsers = () => {
    return axios.get(USERS_API)

}

export const addUser = (user) => {
    return axios.post(USERS_API, user)
}
export const updateUser = (user) => {
    return axios.put(USERS_API + '/' + user.id, user)
}

export const removeUser = (user) => {
    return axios.delete(USERS_API + '/' + user.id)
}