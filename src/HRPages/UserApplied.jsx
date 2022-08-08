import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import "./UserHomePage.css";

import {
  BrowserRouter as Router,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
const heading={
    color: "#a40865",fontStyle: "bold", fontWeight: "bold",fontSize: "larger"
}


function UserApplied() {
  

  const [data,setData]=useState([]);
  const[status,setstatus]=useState('');
  function apply(jobid,email){
const user={status}
    fetch("http://localhost:8096/hr/submitstatus/"+`${jobid}/`+`${email}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }).then(() => {
              console.log(user);
            console.log("saved");
            //window.location.href = "/hr/hrhome";
          });
    
        }
        const applys=()=>{
            console.log("print");
        }
  useEffect(()=>{
   getadmission();
  },[]);
  function getadmission(){
    fetch("http://localhost:8096/")
    .then((response)=>response.json())
    .then((p) => setData(p)
         
    );
  }





  return (
    
    <div>
         <center> <h1 style={heading}>APPLIED JOBS </h1> <br></br></center>
<table className=" zindex table table-striped table-bordered">
        <thead>
          <tr>
            <th>EmployeeEmail</th>
            <th>JobId</th>
            <th>Resume</th>
            <th>Actions</th>
            <th>Status</th>
            
            
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr 
            key={datas.jobid}
            >
              <td>
                {datas.email}
               
                </td>
              
              <td>{datas.jobid}</td>
              <td>{datas.description}</td>
              
              
              
              <td>
              <Link to={`${datas.jobid}/${datas.email}`}>Status</Link>
                </td>
                <td>
                    status
                </td>
            </tr>

         ))} 

         

       

       

          
        </tbody>
      </table>
      <div className="btnadd">
        {/* <Link
          to="/admin/AddUser"
          style={{ color: "white", textDecoration: "none" }}
        > */}
       
        {/* </Link> */}
      </div>
      {/* <Outlet /> */}

    </div>
  )
}

export default UserApplied;