import React, { useState } from 'react';
import { app } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {
   let auth = getAuth();
   const [userData, setUserData] = useState({
      userName: '',
      userEmail: '',
      password: '',
   });

   const handleChange = (ev) => {
      setUserData((prevData) => ({
         ...prevData,
         [ev.target.name] : ev.target.value,
      }));
   };

   const handleSubmit = (ev) => {
      ev.preventDefault();
      createUserWithEmailAndPassword(auth, userData.userEmail, userData.password)
         .then((resp) => console.log(resp))
         .catch(err => console.log('Something went wrong!'));
      setUserData({
         userEmail: '',
         userName: '',
         password: '',
      });
   }

   return (
      <React.Fragment>
         <h1 className='h1-login'>Login</h1>

         <div className='login-wrapper'>
            <form>
               <input 
                  type='text' 
                  placeholder='Type your name'
                  name='userName'
                  onChange={handleChange}
                  value={userData.userName} />

               <input 
                  type='email' 
                  placeholder='Type your Email'
                  name='userEmail'
                  onChange={handleChange}
                  value={userData.userEmail} />

               <input 
                  type='password' 
                  placeholder='Type your password'
                  name='password'
                  onChange={handleChange}
                  value={userData.password} />

               <button onClick={handleSubmit}>Register</button>
            </form>
         </div>
      </React.Fragment>
   );
};

export default LoginScreen;