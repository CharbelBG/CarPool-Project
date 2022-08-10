import React from 'react';
import ReactDom from 'react-dom/client';

export default function PreviewCv(props){
    //we want to destructure the props state that is received.
        //also add a way to edit the data.
     //define how this will render
   
     let mockData = {
        Employer: "samira",
        Title: "stripper",
        bday: "2002-08-26",
        dayEnd: "123123-12-03",
        dayStart: "23123-12-31",
        lname: "niger",
        mainDuties: "123",
        name: "bouli",
        phoneNumber: "69 694201",
        tInstitution: "samiraClub",
        training: "on-the-pole",
        workDayEnd: "23123-12-31",
        workDayStart: "23123-12-31",
     }
    return(
        <div>
          <h1>Personal Info</h1>
          <hr width = "50%"/>
           <h2>{mockData.name} {mockData.lname}</h2> 
           <br />
            <h4>Born in {mockData.bday}</h4>
            <br />
            <h4>Tel : {mockData.phoneNumber}</h4><br /><br />

            <h1>Education</h1>
                <hr width = '50%'/>
            <h4>{mockData.training} at {mockData.tInstitution}</h4>
            <h4>{mockData.dayStart} till {mockData.dayEnd}</h4> 
            <br /><br />


            <h1>Work Experience</h1>
                <hr width = '50%' />
            <h4>Title: {mockData.Title}</h4>
        </div>

    )
}