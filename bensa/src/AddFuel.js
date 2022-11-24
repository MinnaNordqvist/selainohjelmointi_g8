import React, {useState, useContext} from 'react';
import { GlobalContext } from './GlobalState';


var num = 1;

export const AddFuel = () => {
  const [text, setText] = useState("");
  const[litrat, setLitra] = useState(0);
  const[hinta, setHinta] = useState(0);
  const[km, setKm] = useState(0);
  const{addTransaction} = useContext(GlobalContext);
  
  const onSubmit = e => {
    e.preventDefault();
    const uusiTankkaus = {
      id: num,
      text,
      litrat,
      hinta,
      km
    }
    addTransaction(uusiTankkaus);
    num = num +1;
  }
    return (
    <div>
    <h3>Tankkauskerta</h3>
    <form onSubmit={onSubmit}>
    <label htmlFor='litrat'>Kuinka monta litraa tankattiin?</label>
    <br />
    <input type="number" value={litrat} onChange={(e) => setLitra(e.target.value)} placeholder="litrat"/>
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
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="nimi"/>   
    <br />
    <button>Add Refueling Expense</button> 
    </form>   
   </div> 
  )
}
