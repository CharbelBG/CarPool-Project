import React from 'react';
import ReactDom from 'react-dom/client';

import { useFormik } from 'formik';
import { loginSchema } from './validationSchemas/index';

function onSubmit(){
    console.log('submitted'); //send values to the backend
}

export default function Account_logIn(props){

    const { values,errors,touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues:{
            studentID:'',
            login_password:'',
        },
        validationSchema:loginSchema,
        onSubmit,
    })
    return(
        <div className='Account_logIn'>

        <form action="#" onSubmit={handleSubmit} autoComplete = "off">
            <h2>Login</h2>
            <div className='Login_input'>
                <label htmlFor="studentID">ID</label>
                <input className={errors.studentID && touched.studentID ? 'invalid':''}
                type="text" 
                name = "studentID" 
                id = "studentID"
                maxLength='8'
                onBlur={handleBlur}
                onChange={handleChange}/>
            </div>    
                {errors.studentID && touched.studentID && <p>{errors.studentID}</p>}

            <div className='Login_input'>
                <label htmlFor="login_password">Password</label>
                <input className={errors.login_password && touched.login_password ? 'invalid':''}
                type="password" 
                name = "login_password" 
                id = "login_password"
                onBlur={handleBlur}
                onChange={handleChange}/>
            </div>
                {errors.login_password && touched.login_password && <p>{errors.login_password}</p>}

                <button type = "submit">Log In</button>

                    <span title='Create a new Account?'
                    onClick={props.handleClick}>Don't have an account? Create a new One!</span>
         </form>      
            </div>
    )
}