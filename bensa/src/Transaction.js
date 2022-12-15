import React from 'react'

export const Transaction = ({transaction}) => {
  var palauta = "";
  if(transaction.kwh === 0){
    palauta = <li className="minus">
        {transaction.id}. ⛽Car Name : {transaction.text}⛽  Refuel Cost: {transaction.hinta}€ 
        Liters: {transaction.litrat} Kilometers: {transaction.km} 
    </li>;     
  } 
  if(transaction.litrat ===0){
    palauta = <li className="minus">
    {transaction.id}.⚡Car Name: {transaction.text}⚡ Charging Cost: {transaction.hinta}€ 
    kWh: {transaction.kwh} Kilometers: {transaction.km} 
    </li>;   
  }   
  
  return (
   <>
   {palauta} 
   </> 
  )
}