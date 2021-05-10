import React, {useEffect, useState} from 'react';
import {Button, Container, Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import {useHistory, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {controlUsers} from "../store/actions";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        border: '2px solid #14A76C',
        height: '40%'
    },
    item: {
        margin: '10px',
        background: '#747474',
        border: '2px solid #14A76C',
    },
    input: {
        width: '500px',
    },
    buttonGroup: {
        width: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonWrapper: {
        padding: '5px 0',
        background: '#282828',

    }


})

const emptyUser = {
    name: '',
    phone: '',
    email: ''
}
const Form = ({controlUsers}) => {
    const history = useHistory()
    const classes = useStyles()
    const [user, setUser] = useState(emptyUser);
    const location = useLocation()
    useEffect(()=>{
        if(location?.state?.user){
            setUser(location?.state?.user)
        }
    },[location?.state?.user])
    const handlerChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        controlUsers(user)
        setUser(emptyUser)
        history.push('/users')
    }
    const handlerBack = () => {
        history.push('/users')
    }
    return (
        <Container className={classes.root} maxWidth='md'>
            <form onSubmit={handleSubmit}>
                <Grid spacing={3} direction='column' container justify='center' alignItems='center'>
                    <Paper className={classes.item}>
                        <Grid item md>
                            <TextField
                                onChange={handlerChange}
                                name='name'
                                value={user.name}
                                className={classes.input}
                                label="Name"
                                type="text"
                                variant="outlined"
                            />
                        </Grid>
                    </Paper>
                    <Paper className={classes.item}>
                        <Grid item md>
                            <TextField
                                onChange={handlerChange}
                                name='phone'
                                value={user.phone}
                                className={classes.input}
                                label="Phone"
                                type="text"
                                variant="outlined"
                            />
                        </Grid>
                    </Paper>
                    <Paper className={classes.item}>
                        <Grid item md>
                            <TextField
                                onChange={handlerChange}
                                name='email'
                                value={user.email}
                                className={classes.input}
                                label="Email"
                                type="text"
                                variant="outlined"
                            />
                        </Grid>
                    </Paper>
                    <Paper className={classes.buttonWrapper} elevation={0}>
                        <Grid item md className={classes.buttonGroup}>
                            <Button
                                type='submit'
                                color='primary'
                                size="large"
                                variant="outlined">Save</Button>
                            <Button
                                onClick={handlerBack}
                                color='primary'
                                size="large"
                                variant="outlined">Cancel</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </form>
        </Container>
    );
}

const mapDispatchToProps = {
    controlUsers
}

export default connect(null, mapDispatchToProps)(Form)