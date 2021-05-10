import axios from "axios";
import {USERS_API} from "./constants";

export default axios.create({
    baseURL: USERS_API,
    headers: {
        'Content-Type': 'application/json'
    }
})