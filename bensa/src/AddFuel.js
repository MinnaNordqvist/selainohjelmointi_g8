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
    event.preventDefault();
    valitseTyyppi(event.target.value);
  };
  
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
    <h3>Tankkauskerta</h3>
    <form onSubmit={onSubmit}>
    <div className="radio">
    <label>Bensa vai sähkö?</label>
    <input type="radio" checked={tyyppi === "litrat"} value="litrat" label="litrat" onChange={choose}/>bensa 
    <input type="radio" checked={tyyppi === "kwh"} value="kwh" label="kwh" onChange={choose}/>sähkö
    </div>  
    <br/>
    {tyyppi === "litrat" && (
    <><label htmlFor='litrat'>Kuinka monta litraa tankattiin?</label><br /><input type="number" value={litrat} onChange={(e) => setLitra(e.target.value)} placeholder="litrat" /></>
    )}
    {tyyppi === "kwh" && (
    <><label htmlFor='kwh'>Kuinka monta kilowattituntia ladattiin?</label><br /><input type="number" value={kwh} onChange={(e) => setSahko(e.target.value)} placeholder="kwh" /></>
    )}
    <br />
    <label>Kuinka paljon maksoi?</label>
    <br />
    <input type="number" value={hinta} onChange={(e) => setHinta(e.target.value)} placeholder ="hinta"/>
    <br />
    <label>Ajetut kilometrit</label>
    <br />
    <input type="number" value={km} onChange={(e) => setKm(e.target.value)} placeholder="km" />
    <br />
    <label>Tankatun auton nimi</label>
    <br />
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nimi"/>   
    <br />
    <button>Add Refueling Expense</button> 
    </form>   
   </div> 
  )
}
