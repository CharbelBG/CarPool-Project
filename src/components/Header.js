import React from 'react';
import ReactDom from 'react-dom/client';

export default function Header(){
    return(
         <div className='header'>
            <div className='text'>
             <h1>Car Pool System</h1>
                <h5>Your transportation solution!</h5>
            </div>
             <img src={require('./img/logo.png')} alt="Logo" />

         </div>
)
}