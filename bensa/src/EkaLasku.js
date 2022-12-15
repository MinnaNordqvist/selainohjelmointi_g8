import React, {useContext} from 'react'
import { GlobalContext } from './GlobalState'

export const EkaLasku = () => {
  const {tankkaukset} = useContext(GlobalContext);
  var eurotPerKm = 0;
  var litratPerKm = 0;
  var euroPerLitra = 0;
  var sahkoEuroPerKm = 0;
  var kwhPerKm = 0;
  var euroPerkwh = 0;
  var summaLitrat = tankkaukset.map(tankki => tankki.litrat).reduce((acc, item) => (acc += item), 0);
  var summaKm = tankkaukset.map(tankki =>tankki.km).reduce((acc, item) => (acc += item), 0);  
  var summaEurot = tankkaukset.map(tankki => tankki.hinta).reduce((acc, item) => (acc += item), 0);
  var kilowattitunnit = tankkaukset.map(tankki =>tankki.kwh).reduce((acc, item) =>(acc += item), 0);
  
  var summaKmBensa = tankkaukset.filter(tankki =>tankki.kwh===0).map(tankki =>tankki.km).reduce((acc, item) => (acc += item), 0);
  var summaEurotBensa =  tankkaukset.filter(tankki=>tankki.kwh===0).map(tankki => tankki.hinta).reduce((acc, item) => (acc += item), 0);
  litratPerKm = (100 * summaLitrat/summaKmBensa).toFixed(2);  
  euroPerLitra = (summaEurotBensa/summaLitrat).toFixed(2);
  eurotPerKm = (litratPerKm * euroPerLitra).toFixed(2);   

  var summaKmSahko = tankkaukset.filter(tankki =>tankki.litrat===0).map(tankki =>tankki.km).reduce((acc, item) => (acc += item), 0);
  var summaEurotSahko = tankkaukset.filter(tankki =>tankki.litrat===0).map(tankki => tankki.hinta).reduce((acc, item) => (acc += item), 0);
  kwhPerKm = (100 * kilowattitunnit/summaKmSahko).toFixed(2);
  euroPerkwh = (summaEurotSahko/kilowattitunnit).toFixed(2);
  sahkoEuroPerKm = (kwhPerKm*euroPerkwh).toFixed(2);
   
    return ( 
    <div>
      <h3>Total refueling expenses over all cars</h3>    
      <p id="testi"><b>Total sum: {summaEurot} € </b> <br /> 
      <b>Total distance {summaKm} kilometers</b> <br />
      ⛽Total sum: {summaEurotBensa} € <br/>
      ⛽Total distance {summaKmBensa} kilometers <br/>
      ⛽Total consumption {summaLitrat} liters <br/>
      ⛽Average consumption {litratPerKm} liters per 100km <br/>
      ⛽Average expenses {eurotPerKm} € per 100km <br/>
      ⚡Total sum: {summaEurotSahko} € <br />
      ⚡Total distance {summaKmSahko} kilometers <br />
      ⚡Total consumption {kilowattitunnit} kWh <br/>
      ⚡Average consumption {kwhPerKm} kWh per 100km <br/>  
      ⚡Average expenses {sahkoEuroPerKm} € per 100km  </p>   
    </div>
  )
}