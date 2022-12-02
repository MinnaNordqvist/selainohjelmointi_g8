import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from './GlobalState'


export const TokaLasku = () => {
    const {tankkaukset} = useContext(GlobalContext);
    const merkit = groupBy(tankkaukset,"text");
   
    var avaimet = Object.keys(merkit);
    var arvot = Object.values(merkit);
    var ret = [];

   function lasketaan(avaimet, arvot){
    var litratPerKm = 0;
    var eurotPerLitra = 0;
    var eurotPerKm = 0;
    for(var i = 0; i < avaimet.length; i++){
           var nimet = (avaimet[i]); 
           var hinnat =(arvot[i].map(arvo =>arvo.hinta).reduce((acc,item)=>(acc+=item),0));
           var km = (arvot[i].map(arvo =>arvo.km).reduce((acc, item)=>(acc+=item),0));
           var l =(arvot[i].map(arvo=>arvo.litrat).reduce((acc, item)=>(acc+=item),0));
           litratPerKm = (100 * l/km).toFixed(2);
           eurotPerLitra = (hinnat/l).toFixed(2);
           eurotPerKm = (litratPerKm * eurotPerLitra).toFixed(2); 
           ret.push(<li className='Summaus' key={nimet}>
            <b>{nimet}</b> Total Sum: {hinnat} €, Total distance: {km} km, <br/> 
            Total consumption: {l} litres, Average expences {eurotPerKm} € per 100km, <br/>
            Average consumption {litratPerKm} litres per 100km</li>); 
      }
      return ret;
    };

    var palauta = lasketaan(avaimet, arvot);
    console.log(palauta);
    
    return (
    <div>
     <h3>Total refueling expenses by cars</h3>
       <ul>
       {palauta}
       </ul> 
    </div>
  )
}

const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
    if (!result[currentValue[key]]) {
        result[currentValue[key]] = [];
    }
    result[currentValue[key]].push(currentValue);
    
    return result;
    }, {});
};