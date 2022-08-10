import React from 'react';
import ReactDom from 'react-dom/client';

export default function LoginInput(props){
    
return(
    <div className='Login_input'>
    <label htmlFor={props.id}>{props.label}</label>
    <input type={props.type} id = {props.id} name = {props.id} required/>
    </div>
)
}