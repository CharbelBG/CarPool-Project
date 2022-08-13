import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './Header';
import Account_logIn from './FormComponents/Account_login';
import SingUp from './FormComponents/SignUp';
//creating he login.
export default function Login(){
    //create a state that will handle rendering the 2 sections
    //create the state that loads them here, the sign up and the login pages.
    const [hasAnAccount, setHasAnAcccount] = React.useState(true);
    function toogleSignIn(){
        console.log('changing window');
        setHasAnAcccount(oldValue => !oldValue);
    }

    return(
        <div className='login_section'>
            <Header />
            {!hasAnAccount && <SingUp handleClick = {toogleSignIn} />}
            {hasAnAccount && <Account_logIn handleClick = {toogleSignIn} />}
    </div>
    )
}