import React, {useContext} from 'react'
import { GlobalContext } from './GlobalState'

export const EkaLasku = () => {
    const {tankkaukset} = useContext(GlobalContext);
    const id = tankkaukset.map(tankki => tankki.id);
    var nimi = tankkaukset.map(tankki => tankki.text);
    var litrat = tankkaukset.map(tankki => tankki.litrat);
    var summaLitrat = litrat.reduce((acc, item) => (acc += item), 0);
    var km = tankkaukset.map(tankki =>tankki.km);
    var summaKm = km.reduce((acc, item) => (acc += item), 0); 
    var hinnat = tankkaukset.map(tankki => tankki.hinta);
    var summaEurot = hinnat.reduce((acc, item) => (acc += item), 0);
    var litratPerKm = (100 * summaLitrat/summaKm).toFixed(2);  
    
   
    return ( 
    <div>
    <h3>Total refueling expenses over all cars</h3>    
       Total sum: {summaEurot} € <br/>
       Total consumption {summaLitrat} litres <br/>
       Total distance {summaKm} kilometres <br />
       Average expenses {} € per 100km  <br />
       Average consumption {litratPerKm} litres per 100km
    </div>
  )
}