import React from 'react';
import ReactDom from 'react-dom/client';
import { useFormik } from 'formik';
import { signupSchema } from './validationSchemas/index'
export default function SingUp(props){

    let CampusOptions = ['Akkar','Beirut', 'Bekaa',
    'Mount Lebanon', 'Nabatiyeh', 'Rayak','Saida', 'Tripoli', 'Tyre'];
    let renderOptions = [];
    for(let i = 0; i<=8; i++){
        renderOptions[i] =  <option key ={i} value={CampusOptions[i]}>{CampusOptions[i]}</option>
    }
   
    function onSubmit(){
        console.log('Submitted'); //send data to the backend
    }

    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            studentID:'',
            password:'',
            passwordRepeat:'',
            campusSite:'',
            phoneNumber:'', 
        },
        validationSchema:signupSchema,
        onSubmit,
    })
      console.log(values);

    return(
        <div className='Account_logIn'>
        <form action="#" onSubmit={handleSubmit} autoComplete = "off">
            <h2>Sign Up</h2>
            
            <div className='Login_input'>
                <label htmlFor="firstName">First Name</label>
                <input className={errors.firstName && touched.firstName ? 'invalid':''}
                type="text" 
                maxLength='8'
                name = "firstName" 
                id = "firstName"
                onBlur={handleBlur}
                onChange={handleChange}/>
            </div>    
                {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
                    
            <div className='Login_input'>
                <label htmlFor="lastName">Last Name</label>
                <input className={errors.lastName && touched.lastName ? 'invalid':''}
                type="text" 
                name = "lastName" 
                id = "lastName"
                onBlur={handleBlur}
                onChange={handleChange}/>
            </div>    
                {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}

            <div className='Login_input'>
                <label htmlFor="password">Password</label>
                <input className={errors.password && touched.password ? 'invalid':''}
                type="text" 
                name = "password" 
                id = "password"
                onBlur={handleBlur}
                onChange={handleChange}/>
            </div>    
              {errors.password && touched.password && <p>{errors.password}</p>}

            <div className='Login_input'>
                <label htmlFor="passwordRepeat">Repeat Password</label>
                <input className={errors.passwordRepeat && touched.passwordRepeat ? 'invalid':''}
                type="text" 
                name = "passwordRepeat" 
                id = "passwordRepeat"
                onBlur={handleBlur}
                onChange={handleChange}/>
            </div>    
                {errors.passwordRepeat && touched.passwordRepeat && <p>{errors.passwordRepeat}</p>}

            <div className='Login_input'>
                <label htmlFor='campusSite'>Campus Site</label>
                <select name='campusSite' id='campusSite' onChange={handleChange}>
                    {renderOptions}
                </select>
             </div>


             <div className='Login_input'>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input className={errors.phoneNumber && touched.phoneNumber ? 'invalid':''}
                type="text" 
                name = "phoneNumber" 
                maxLength='8'
                id = "phoneNumber"
                onBlur={handleBlur}
                onChange={handleChange}/>
            </div>
            {errors.phoneNumber && touched.phoneNumber && <p>{errors.phoneNumber}</p>}

                <button>Create Account</button>
                    <span title='Login' 
                    onClick={props.handleClick}>Already have an account? Login</span>
         </form>      
            </div>
    )
}