import React from "react";
import  './App.css'
import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
    return (
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/users'/>
                </Route>
                <Route path='/users' component={UserList}/>
                <Route path='/form' component={Form}/>
                <Route path='/form/:userId' component={Form}/>
            </Switch>
    )
}



export default App;
