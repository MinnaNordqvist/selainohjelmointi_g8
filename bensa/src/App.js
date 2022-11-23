import React from "react";
import "./App.css"
import {AddFuel} from "./AddFuel"
import {Tankkaushistoria} from "./Tankkaushistoria"

function App() {
  return (
    <div>
      <h1>Car fuel expenses</h1>
    
     <div className="container">
     <AddFuel />
     </div>
     <div className="historia">
     <Tankkaushistoria />
     </div>
    </div>
  );
}

export default App;

