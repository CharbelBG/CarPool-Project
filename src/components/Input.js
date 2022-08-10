import React from 'react';
import ReactDom from 'react-dom/client';


//props will define the type of the input, placeholder value and all the details
export default function Input(props){

    return(
        <div className='inputContainer'>
            <label htmlFor={props.id}>{props.label}</label>
            <input  name = {props.id} type={props.type}  id = {props.id} required/>
        </div>
    )
}