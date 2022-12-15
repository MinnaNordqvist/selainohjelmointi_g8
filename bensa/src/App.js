import React from "react";
import "./App.css"
import {AddFuel} from "./AddFuel"
import {Tankkaushistoria} from "./Tankkaushistoria"
import {GlobalProvider} from "./GlobalState";
import {EkaLasku} from "./EkaLasku";
import {TokaLasku} from "./TokaLasku";

function App() {
  return (
    <GlobalProvider>
    <h1>Car Fuel Expense Calculator</h1>
  
  <div className="container">
    <div className="content1" id="scrollableContent">
      <AddFuel/>
    </div>
    <div className="content2" id="scrollableContent">
      <EkaLasku />
    </div>
    <div className="content3" id="scrollableContent">
      <Tankkaushistoria/>
    </div>
    <div className="content4" id="scrollableContent">
      <TokaLasku/>
    </div>
  </div>
   
   
   
  </GlobalProvider>
  );
}

export default App;

