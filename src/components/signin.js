import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Registerform = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });
  };
  return (
    <div className='cover'>
    <h1>Signin</h1>
    <input type= "text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type= "text" placeholder="mail-id" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type= "password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button className ="login-btn" type="button"onClick={handleSubmit}>signin</button>
    <p>Already User?<Link to="/login">Login</Link></p>
    
</div>
  )
}

export default Registerform