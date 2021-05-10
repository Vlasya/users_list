import {
    USER_ADD,
    USER_DELETE,
    USER_UPDATE,
    USERS_FETCH_FAILURE,
    USERS_FETCH_START,
    USERS_FETCH_SUCCESS
} from "./constants";

const defaultSate = {
    userList: [],
    user: {},
    isFetching: false,
    error: ''
}

export function usersReducer(state = defaultSate, {type, payload}) {
    switch (type) {
        case USERS_FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case USERS_FETCH_SUCCESS:
            return {
                ...state,
                userList: payload,
                isFetching: false
            };
        case  USERS_FETCH_FAILURE:
            return {
                ...state,
                error: payload
            };
        case USER_ADD:
            return {
                ...state,
                userList: [...state.userList, payload],
                isFetching: false
            };
        case USER_UPDATE:
            return {
                ...state,
                userList: state.userList.map(user => user.id === payload.id ? payload : user),
                isFetching: false
            };
        case USER_DELETE:
            return {
                ...state,
                isFetching: false,
                userList: state.userList.filter(user => user.id !== payload.id)
            }

        default:
            return state
    }
}