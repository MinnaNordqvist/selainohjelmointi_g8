import React, {useContext} from 'react'
import { GlobalContext } from './GlobalState'
import {Transaction} from "./Transaction"


export function Tankkaushistoria()  {
  const {tankkaukset} = useContext(GlobalContext);
 
  return (
    <>
      <h3>Refueling history</h3>   
      <ul id="list" className="list">
    {[...tankkaukset].reverse().map(tankkaus =>(<Transaction key={tankkaus.id} transaction={tankkaus}/>))} 
  </ul>
</>
)
}