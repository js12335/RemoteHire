import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
  Navigate,
} from "react-router-dom";
import DisplayJob from '../HRPages/DisplayJob';
import Updatejob from '../HRPages/Updatejob';
import AddJobs from '../HRPages/AddJobs';
import UserApplied from '../HRPages/UserApplied';
import Status from '../HRPages/Status';

export default function HrRouting() {
  const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
     
        <Routes>
          <Route>
        <Route path="/hr/addjob" exact element={<AddJobs />} />
        <Route path="/display" excat element={<DisplayJob/>}/>
        <Route path="display/:id/" excat element={<Updatejob/>}/>
        <Route path="/user/applied" exact element={<UserApplied/>}/>
        <Route path="/user/applied/:id/:emails/" exact element={<Status/>}/>
       
        </Route>
        </Routes>
      </Router>
      
    </div>
  )
}