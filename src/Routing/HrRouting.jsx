import React from 'react'
import Signup from '../LoginAndSignupPages/Signup'
import Login from '../LoginAndSignupPages/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from '../Components/UserComponents/Header';
import UserHomePage from '../UserPages/UserHomePage';
import AppliedJobs from '../UserPages/AppliedJobs';
import Apply from '../UserPages/Apply';
import Profile from '../UserPages/Profile';
import DisplayJob from '../HRPages/DisplayJob';
import Updatejob from '../HRPages/Updatejob';
import AddJobs from '../HRPages/AddJobs';
import HrPrivateRoute from '../LoginAndSignupPages/HrPrivate';

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
        
       
        </Route>
        </Routes>
      </Router>
      
    </div>
  )
}