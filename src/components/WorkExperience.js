import React from 'react';
import ReactDom from 'react-dom/client';
import Input from './Input';
export default function WorkExperience(){
    return(
        <div className='workExp'>
             <Input type = 'text' label = "Title of the occupation" id = "Title" />
             <Input type = 'text' label = "Employer" id = "Employer" />
             <Input type = 'date' label = "From" id = "workDayStart"/>
             <Input type = 'date' label = "To" id = "workDayEnd"/>   
             <Input type = 'text' label = "Main duties" id = "mainDuties"/>
        </div>
    )
}