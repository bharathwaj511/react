import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignInSide from './project/Signinpage';
import VendorManagementSystem from './project/VendorManagementSystem';


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignInSide/>}/>
          <Route path='vendor' element={<VendorManagementSystem/>}/>
        </Routes>
      </Router>
    </div>
  );
}

