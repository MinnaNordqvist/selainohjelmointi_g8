import React, {useContext} from 'react'
import { GlobalContext } from './GlobalState'

export const EkaLasku = () => {
    var litratPerKm = 0;  
    var eurotPerLitra = 0;
    var eurotPerKm = 0;
    const {tankkaukset} = useContext(GlobalContext);
    var litrat = tankkaukset.map(tankki => tankki.litrat);
    var summaLitrat = litrat.reduce((acc, item) => (acc += item), 0);
    var km = tankkaukset.map(tankki =>tankki.km);
    var summaKm = km.reduce((acc, item) => (acc += item), 0); 
    var hinnat = tankkaukset.map(tankki => tankki.hinta);
    var summaEurot = hinnat.reduce((acc, item) => (acc += item), 0);
    litratPerKm = (100 * summaLitrat/summaKm).toFixed(2);  
    eurotPerLitra = (summaEurot/summaLitrat).toFixed(2);
    eurotPerKm = (litratPerKm * eurotPerLitra).toFixed(2);
   
    return ( 
    <div>
    <h3>Total refueling expenses over all cars</h3>    
       Total sum: {summaEurot} € <br/>
       Total consumption {summaLitrat} litres <br/>
       Total distance {summaKm} kilometres <br />
       Average expenses {eurotPerKm} € per 100km  <br />
       Average consumption {litratPerKm} litres per 100km
    </div>
  )
}