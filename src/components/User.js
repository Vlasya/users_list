import React from 'react';
import {Link} from 'react-router-dom'
import {IconButton, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

export const User=({user,index,onDelete})=> {
    const handlerClick=()=>{
        onDelete(user)
    }
    return (
     <TableRow >
            <TableCell>{index}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
                <Link to={{pathname:`/form/${user.id}`,state:{user}}} >Edit</Link>
                <IconButton onClick={handlerClick}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>


    );
}

