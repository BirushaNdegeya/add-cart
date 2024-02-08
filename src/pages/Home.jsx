import React, { useState } from "react";
import photo from '../assets/cat.png';
import { app } from '../firebaseConfig';
import { getDatabase, ref, push, onValue } from 'firebase/database';

const Home = () => {
   const database = getDatabase(app);
   const friendsInDB = ref(database, "MyFriends");
   const shoppingListInDB = ref(database, "ShoppingList");
   const bookInDB = ref(database, "Books");

   onValue(bookInDB, (snapshot) => {
      let bookArr = Object.values(snapshot.val());
      bookArr.forEach((book) => console.log(book));
   });

   const [input, setInput] = useState('');  
   const [myList, setMyList] = useState(["oranges", "apples"]); 
   const handleChange = (ev) => {
      setInput(ev.target.value);
   }

   const handleSubmit = () => {
      setMyList((prevMyList) => ([
         ...prevMyList,
         input,
      ]))
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
         <ul>
            {
               myList.map((list) => <li>{list}</li>)
            }
         </ul>
      </main>
   );
};

export default Home;