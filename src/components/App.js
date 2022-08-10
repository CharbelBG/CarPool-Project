import React from 'react';
import ReactDom from 'react-dom/client';
import Input from './Input';
import EducationForm from './EducationForm';
import WorkExperience from './WorkExperience';
import PreviewCv from './PreviewCv';
/**
 * The goal:
 * 1st finish it in react, then play around with css.
 * create a Form in react that takes input and puts it inside boiler_plate cv
 * it must have a picture
 * also some text
 * some dates
 */
export default function App(){

    const [inputData, setInputData] = React.useState('');
    const [isPreview, setIspreview] = React.useState(false);
    // idea was to monitor the behavior of that object in html, and mock it here.
     
    function inputDataChange(event){
        setInputData(oldValue=>{
            const {name, value} = event.target;
            return{
                ...oldValue,
                [name]: value
            }
        })
    }


    
    function renderData(event){
        event.preventDefault();
        setIspreview(true);
        console.log(inputData);
        //when in preview mode the section that i used to create need to disappear.
    }
    
    return(
    <div>
        <div className='formInput'>
            <div className="header"><h1>CV Generator</h1>Make your CV!</div>
            <form action="#" onChange={inputDataChange} onSubmit = {renderData}>
                <h2>Personal Info</h2>
                <div className='personalInfo'>
                    <Input type = 'text' label = "Name" id = "name"/>
                    <Input type = 'text' label = "Last Name" id = "lname"/>
                    <Input type = 'date' label = "Date of birth" id = "bday"/>
                    <Input type = 'tel' label = "Phone number" id = "phoneNumber"/>
                </div>

              <h2>Education and Training</h2>
              <EducationForm />
              <h2>Work Experience</h2>
               <WorkExperience /> 
              <button className='previewButton'>Preview</button>
            </form>
            {isPreview && <PreviewCv data = {inputData}/>}
        </div>
        <PreviewCv />
    </div>    
    )
}