import React, { useEffect, useState } from "react";
import photo from '../assets/cat.png';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";



const Home = () => {

   const appSetting = {
      databaseURL: 'https://add-to-cart-fee81-default-rtdb.europe-west1.firebasedatabase.app/',
   }

   const [app, setApp] = useState([]);

   useEffect(() => {
      setApp(initializeApp(appSetting));
   })
   // console.log(app);
   console.log(getDatabase())

   const [input, setInput] = useState('');

   const handleChange = (ev) => {
      setInput(ev.target.value);
   }

   const handleSubmit = () => {
      console.log(input);
      setInput('');
   };

   return (
      <main className="flex">
         <img src={photo} alt="my photo" />
         <input 
            type="text" 
            onChange={handleChange}
            value={input}
            name="cartValue"
            placeholder="Bread" />
         <button onClick={handleSubmit}>Add to Cart</button>
      </main>
   )
}

export default Home;