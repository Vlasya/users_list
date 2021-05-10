import {addUser, getUsers, updateUser,removeUser} from "../api/usersApi";
import {USER_ADD, USER_UPDATE, USERS_FETCH_START, USERS_FETCH_SUCCESS,USER_DELETE} from "./constants";


export const getUserList=()=>(dispatch)=>{
        dispatch(usersFetchStart());
        try{
            getUsers()
                .then(({data})=>dispatch(usersFetchSuccess(data)))
        }catch (error){
            dispatch(usersFetchFailure(error))
        }
}

export const controlUsers=(user)=>(dispatch)=>{
    dispatch(usersFetchStart());
    if(user.id){
        updateUser(user)
            .then(({data})=> dispatch(userUpdate(data)))
            .catch((error)=>dispatch(usersFetchFailure(error)))
    }else{
        addUser(user)
            .then(({data})=>dispatch(usersAdd(data)))
            .catch((error)=>usersFetchFailure(error))
    }
}
export const deleteUser=(user)=>(dispatch)=>{
    dispatch(usersFetchStart())
    removeUser(user)
        .then(({data})=>dispatch(userDelete(data)))
        .catch((error)=>dispatch(usersFetchFailure(error)))
}


export const usersFetchStart=()=>({type:USERS_FETCH_START});
export const usersFetchSuccess=(usersList)=>({type:USERS_FETCH_SUCCESS,payload:usersList});
export const usersFetchFailure=(error)=>({type:USERS_FETCH_SUCCESS,payload:error});
export const usersAdd=(user)=>({type:USER_ADD,payload:user});
export const userUpdate=(user)=>({type:USER_UPDATE,payload:user});
export const userDelete=(user)=>({type:USER_DELETE,payload:user});