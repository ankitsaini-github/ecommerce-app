import React from "react";
import "./App.css";
import Storepage from "./components/storepage/Storepage";
import ContextProvider from "./components/store/ContextProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="App">
          <Storepage/>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
