import React from "react";
import ReactDOM from 'react-dom/client';

const App = () => {
   return (
      <React.Fragment>
         <h1>Add to Cart</h1>
         <button>Add</button>
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);