import React from "react";
import "./App.css";
import Storepage from "./components/storepage/Storepage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/storepage/Home'
import About from './components/storepage/About'
import Musiclist from "./components/storepage/Musiclist";

const router =createBrowserRouter([
  {path:'/',element:<Storepage/>,children:[
    {path:'/',element:<Home/>},
    {path:'/store',element:<Musiclist/>},
    {path:'/about',element:<About/>}
  ]}
  
])
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
