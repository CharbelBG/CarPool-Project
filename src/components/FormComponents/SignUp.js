import React from 'react';
import ReactDom from 'react-dom/client';
import LoginInput from './LoginInput';
export default function SingUp(props){
    const [signUpData, setSignUpData] = React.useState('');

    function updateData(event){
        const {name, value} = event.target;
        setSignUpData(oldValue =>({
            ...oldValue,
            [name]:value,
        }))
        console.log(signUpData); //data to be sent to the Backend
    }
        //validate the password
    return(
        <div className='Account_logIn'>
        <form action="#" onChange={updateData}>
            <h2>Sign Up</h2>
                <LoginInput id = 'studentID'
                type = 'text' label = "ID"
                />

                 <LoginInput id = 'password'
                type = 'password' label = "password"
                />
                   <LoginInput id = 'passwordRepeat'
                type = 'password' label = "Repeat password"
                />
                <LoginInput id = 'firstName'
                type = 'text' label = "First Name"
                />
                  <LoginInput id = 'lastName'
                type = 'text' label = "Last Name"
                />
                <LoginInput id = 'campusName'
                type = 'text' label = "Campus name"
                />
                 <LoginInput id = 'phoneNumber'
                type = 'tel' label = "PhoneNumber"
                />
                <button>Create Account</button>
                    <span title='Login' 
                    onClick={props.handleClick}>Already have an account? Login</span>
         </form>      
            </div>
    )
}