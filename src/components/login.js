import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink,useNavigate } from 'react-router-dom';


// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import GoogleL from '../image/GoogleL.png'
const Loginform = () => {
  // const {
  //   register,
  //   formState: { errors }
  // } = useForm();
  // console.log(errors);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   
}
 
  return (
    <div className='cover'>
    <form onSubmit={onLogin} className='cover'>
    <h1>Login</h1>
        <input type= "text" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required = {true}/>
        <input type= "password" placeholder="password" name="password" value={password}onChange={(e) => setPassword(e.target.value)} required = {true}/>
        <button className ="login-btn" type="submit">login</button>

        {/* <div className='login-btn'>Login</div> */}
        {/* <p className="text">or login using</p> */}
        {/* <div className='alt-login'>
        <div className='google'>
          <img src= {GoogleL} alt="GoogleL"  style={{ width:'48px', height: '48px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}></img>
        </div>
        </div> */}
        <p>New User?<NavLink to="/">signin</NavLink> </p>
    </form> 
  
    </div>
  )
}

export default Loginform