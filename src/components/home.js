import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
 
const Home = () => {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <div>        
    <h1>Hii you are logged in</h1>

    {/* <Link to="/login">Login</Link>
    <br></br>
    <Link to="/signin">signin</Link> */}
    
    </div>
  )
}
 
export default Home