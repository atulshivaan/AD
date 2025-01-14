import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 and above
  // Importing CSS styles
import App from './App'; 
import {configureStore} from "@reduxjs/toolkit"
import globalReducer from "./state/index.js";
import {Provider} from "react-redux"

 // Importing the main App component
  // For routing
const  store = configureStore({
  reducer :{
    global:globalReducer,
  },
})



// Create the root for React 18+ and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrapping App with BrowserRouter for routing functionality
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
    
    
  </React.StrictMode>
);
