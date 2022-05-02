import React from 'react';
import Users from './components/Users';
import {
  BrowserRouter, 
  Route,
  Routes,
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/users/cool" element = {<Users/>}>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
