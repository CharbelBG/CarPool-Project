import React from 'react';
import ReactDom from 'react-dom/client';
import Login from './Login';
/**
 * #ffb019 yellow color
 * #0c2542 blue color
 * we need a login page, includes a sign in, and a create new account. this requires forms
 */ 
//create a navBar that is the same in all the apps.
export default function App(){
    return(
        <>
        <Login />
        </>
    )
}