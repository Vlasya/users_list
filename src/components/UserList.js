import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import {
    Button,
    Container,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {deleteUser, getUserList} from "../store/actions";
import {User} from "./User";

const useStyles=makeStyles({
    root:{
    backgroundColor:'#747474'
    },
    link:{
        marginBottom:'10px'
    }
})

const UserList=({users,getUserList,deleteUser})=> {
    const classes=useStyles()
    useEffect(()=>{
        getUserList()
    },[])

    const handlerDelete=(user)=>{
        deleteUser(user)
    }
    return (
        <Container maxWidth='md'>
            <Button className={classes.link} variant='contained'><Link to='/form'> Add new user</Link></Button>
            <TableContainer component={Paper} className={classes.root}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user,index)=>(
                            <User key={user.id} user={user} onDelete={handlerDelete} index={index+1}
                        />))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}


function mapStateToProps(state){
    return{
        users:state.users.userList
    }
}
const mapDispatchToProps={
    getUserList,
    deleteUser
}


export default connect(mapStateToProps,mapDispatchToProps)(UserList)
