import React from "react";
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import LoginScreen from './pages/LoginScreen';
import './index.css';

const App = () => {
   return (
      <React.Fragment>
         <LoginScreen />
         {/* <h1>Add to Cart</h1>
         <button>Add</button> */}
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);