import React, { useState } from 'react';

const LoginScreen = () => {

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

               <button>Register</button>
            </form>
         </div>
      </React.Fragment>
   );
};

export default LoginScreen;