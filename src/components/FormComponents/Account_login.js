import React from 'react';
import ReactDom from 'react-dom/client';
import LoginInput from './LoginInput';


export default function Account_logIn(props){

    const [logInData, setLogInData] = React.useState('');
    function updateData(event){
        const {name, value} = event.target;
        setLogInData(oldValue =>({   
            ...oldValue,
            [name]:value,
        }))
        console.log(logInData); //This data must be sent to the backend
    }


    return(
        <div className='Account_logIn'>
        <form action="#" onChange={updateData}>
            <h2>Login</h2>
                <LoginInput id = 'StudentID'
                type = 'text' label = "ID"
                />

                 <LoginInput id = 'login_password'
                type = 'password' label = "password"
                />
                <button>Log In</button>
                    <span title='Create a new Account?'
                    onClick={props.handleClick}>Don't have an account? Create a new One!</span>
         </form>      
            </div>
    )
}