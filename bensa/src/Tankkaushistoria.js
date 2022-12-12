import React, {useContext} from 'react'
import { GlobalContext } from './GlobalState'
import {Transaction} from "./Transaction"


export function Tankkaushistoria()  {
  const {tankkaukset} = useContext(GlobalContext);
 
  return (
    <div>
     <h3>Refueling history</h3>   
        <ul>
         {[...tankkaukset].reverse().map(tankkaus =>(<Transaction key={tankkaus.id} transaction={tankkaus}/>))} 
        
        </ul>
    </div>
  )
}