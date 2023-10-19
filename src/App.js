// import logo from './logo.svg';
import React from 'react';
// import { useState } from 'react';
import './App.css';
// import { useForm } from 'react-hook-form';
import UserForm from './UserForm';
import { Route, Routes } from 'react-router-dom';
import DataTable from './DataTable';
import Axios from './Axios';

function App() {

  return (
    <Routes>
      <Route path='/' element={<UserForm/>}/>
      <Route path='/dataTable' element={<DataTable/>}/>
      <Route path='/Axios' element={<Axios/>}/>
    </Routes>
  );
}

export default App;
