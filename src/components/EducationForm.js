import React from 'react';
import ReactDom from 'react-dom/client';
import Input from './Input';
export default function EducationForm(){
    
    return(
        <div className='educationForm'>
              <Input type = 'text' label = "Training Position" id = "training"/>
              <Input type = 'text' label = "Training Institution / corporation" id = "tInstitution"/>
              <Input type = 'date' label = "From" id = "dayStart"/>
              <Input type = 'date' label = "To" id = "dayEnd"/>
              
        </div>
    )
}
    