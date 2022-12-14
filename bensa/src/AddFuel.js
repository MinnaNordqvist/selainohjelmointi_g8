import React, {useState, useContext} from 'react';
import { GlobalContext } from './GlobalState';

var num = 1;

export const AddFuel = () => {
  var [text, setText] = useState("");
  var[litrat, setLitra] = useState(0);
  var[hinta, setHinta] = useState(0);
  var[km, setKm] = useState(0);
  var[kwh, setSahko] = useState(0);
  var[tyyppi, valitseTyyppi] = useState("litrat");
  const{addTransaction} = useContext(GlobalContext);

  const choose = (event) =>{
    valitseTyyppi(event.target.value);
  };
  const [validated, setValidated] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const uusiTankkaus = {
      id: num,
      text,
      litrat: +litrat,
      kwh: +kwh,
      hinta: +hinta,
      km: +km
    }
    addTransaction(uusiTankkaus);
    num = num +1;
    setText("");
    setLitra(0);
    setHinta(0);
    setKm(0);
    setSahko(0);
  }
    return (
    <div>
    <h3>Refuel/Charging Session</h3>
    <form onSubmit={onSubmit}>
    <div className="radio">
    <label>Petrol or Electric?</label>
    
    <input type="radio" checked={tyyppi === "litrat"} value="litrat" label="litrat" onChange={choose}/>Petrol
    <input type="radio" checked={tyyppi === "kwh"} value="kwh" label="kwh" onChange={choose}/>Electric
    </div>  
    <br/>
    {tyyppi === "litrat" && (
    <><label htmlFor='litrat'>Amount of Fuel in Liters</label><br 
    /><input type="number" required min = "1" value={litrat} onChange={(e) => setLitra(e.target.value)} placeholder="Liters" /></>
    )}
    {tyyppi === "kwh" && (
    <><label htmlFor='kwh'>Kilowatt-hours Charged</label>
    <br />
    <input type="number" required min = "1" value={kwh} onChange={(e) => setSahko(e.target.value)} placeholder="kWh" /></>
    )}
    <br />
    <label>Cost</label>
    <br />
    <input type="number" required min = "1" value={hinta} onChange={(e) => setHinta(e.target.value)} placeholder ="Cost in €"/>
    <br />
    <label>Distance Driven in Kilometers</label>
    <br />
    <input type="number" required min = "1" value={km} onChange={(e) => setKm(e.target.value)} placeholder="KM" />
    <br />
    <label>Car Name</label>
    <br />
    <input type="text"  value={text} onChange={(e) => setText(e.target.value)} placeholder="Name"/>   
    <br />
    <button>Add Refueling Expense</button> 
    </form>   
   </div> 
  )
}
