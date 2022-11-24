import React from "react";
import "./App.css"
import {AddFuel} from "./AddFuel"
import {Tankkaushistoria} from "./Tankkaushistoria"
import {GlobalProvider} from "./GlobalState";

function App() {
  return (
    <GlobalProvider>
    <h1>Car fuel expences</h1>
  
   <div className="container">
   <AddFuel />
   <Tankkaushistoria/>
   </div>
   
   
   
  </GlobalProvider>
  );
}

export default App;

