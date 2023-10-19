import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate }from 'react-router-dom';

function UserForm() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    // const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{username:"hussaina",email:"hussainaParveen3@gmail.com",designation:"intern"}});
    const[userList,setUserList]=useState([]);
    const navigate=useNavigate();
  
    function onSubmit(data){
      setUserList(userList.concat(data));
      localStorage.setItem("userdata",JSON.stringify(userList));
      // console.log("data",data);
      
      const info=JSON.parse(localStorage.getItem('userdata'))
      console.log("info",info);
      // navigate('/dataTable');
    }console.log("array",userList);
    return (
        <div className='page1'>
          {/* <img src='bg.webp' alt='bgimg' id='bgimg'/> */}
      <div className="App">
        <div>
        <img src='loginLogo.jfif' alt='loginLogo' className='loginLogo'/>
        <h2>WELCOME TO OUR NEW WEBSITE</h2>
        <p>this is a login page which uses useform hooks in react</p>
        <img className='loginLogo' src='insta.jfif' alt='insta'/>
        <img className='loginLogo' src='fb.png' alt='fb'/>
        <img className='loginLogo' src='git.png' alt='git'/>
        <p>UserForm.website</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>user data form</h1>
          <input className='input' type="text" placeholder='username' {...register("username",{required:"this is required",maxLength:{
            value:20,
            message:"username exceeds limit",
          },
          })}/>
          <p>{errors.username?.message}</p>
  
          <input className='input' type="text" placeholder='email' {...register('email', {
        required: 'Email is required',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        },
    })}/>
          <p>{errors.email?.message}</p>
  
          <input className='input' type="text" placeholder='designation' {...register("designation",{required:"this is required"})}/>
          <p>{errors.designation?.message}</p>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:'10px',width:'350px'}}>
          <div style={{display:"flex"}}>
         <input type='checkbox' {...register("remember me")}/><p>remember me</p>
         </div>
         <p>Forgot Password?</p>
         </div>
          <button className='button' type="submit">submit</button>
          <div style={{display:"flex",justifyContent:"space-between",width:'350px'}}>
            <p>Don't Have An account?</p>
            <p>Sign up</p>
            <button className='button' style={{width:'100px'}} onClick={()=>navigate('/Axios')}>AXIOS</button>
          </div>
        </form>
      </div>
      {/* <div className='App1'>
        <img id='img' src='login.jfif' alt='login'/>
      </div> */}
      </div>
    );
  }

export default UserForm;