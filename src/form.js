// import React, { useState } from 'react';
import './form.css';


function EmployeeForm() {
  return (
    <div className='container'>
       <h1>Employee Form</h1>
      <form>
        <div className='row'>
         
          <div className='lrow'>
            <label>FirstName</label><br></br>
            <input type='text' id="fname" placeholder='Enter your First Name'></input>
          </div>
          <div className='lrow'>
            <label>MiddleName</label><br></br>
            <input type='text' id="fname" placeholder='Enter your Middle Name'></input>
          </div>
          <div className='lrow'>
            <label>LastName</label><br></br>
            <input type='text' id="lname" placeholder='Enter your Last Name'></input>
          </div>
        </div>
        <div className='row'>
          <div className='lrow'>
            <label>Birth Date</label><br></br>
            <input type='date' id="dob" placeholder='Enter your DOB'></input>
          </div>
          <div className='lrow'>
            <label>Email</label><br></br>
            <input type='email' id="email" placeholder='Enter your email'></input>
          </div>
          <div className='lrow'>
            <label>Phone Number</label><br></br>
            <input type='number' id="phone" placeholder='Enter your Phone number'></input>
          </div>
        </div>
        <div className='row'>
          <div className='lrow'>
            <label>Select Gender</label><br></br>
            <select>
              <option>Male</option>
              <option>Femaleale</option>
              <option>Others</option>
            </select>
          </div>
          <div className='lrow'>
            <label>startTime</label><br></br>
            <input type='time' id="stime" ></input>
          </div>
          <div className='lrow'>
            <label>Endtime</label><br></br>
            <input type='time' id="etime" ></input>
          </div>
        </div>
        <div className='row'>
          <div className='lrow'>
            <label>Job Position</label><br></br>
            <input type='text' id='job' placeholder='Enter the job position'></input>
          </div>
          <div className='lrow'>
            <label>Select teams</label><br></br>
           <select>
            <option value=''>Select</option>
           </select>
          </div>
          <div className='lrow'>
            <label>Select Designation</label><br></br>
            <input type='text' id="design" placeholder='select_ _ _'></input>
          </div>
        </div>
        <div className='row'>
          <div className='lrow'>
            <label>Billable Hours</label><br></br>
            <input type='text' id='billable' placeholder='Enter your Billable Hours'></input>
            </div>
            <div>
            <label>Is Billable</label>
            <input type='checkbox' ></input>
            </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>

    </div>
  )
}
export default EmployeeForm;
