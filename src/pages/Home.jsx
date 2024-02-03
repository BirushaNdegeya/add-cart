import React, { useState } from "react";
import photo from '../assets/cat.png';
import { app } from '../firebaseConfig';
import { getDatabase, ref, push } from 'firebase/database';

const Home = () => {
   const database = getDatabase(app);
   const friendsInDB = ref(database, "MyFriends");
   const shoppingListInDB = ref(database, "ShoppingList");

   const [input, setInput] = useState('');   
   const handleChange = (ev) => {
      setInput(ev.target.value);
   }

   const handleSubmit = () => {
      push(shoppingListInDB, input);
      console.log(`${input} added to the real time database`);
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