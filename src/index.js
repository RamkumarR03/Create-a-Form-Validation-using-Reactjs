import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeForm from './form';
import './index.css';


function Formvalidation(){
  return(
  <div>
    <EmployeeForm/>
  </div>
  )
}
ReactDOM.render(<Formvalidation/>,document.getElementById("root"));
