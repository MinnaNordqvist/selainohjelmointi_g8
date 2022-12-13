import React from 'react'

export const Transaction = ({transaction}) => {
  var palauta = "";
  if(transaction.kwh === 0){
    palauta = <li className="tankkaus">
        {transaction.id}. ⛽Auton nimi: {transaction.text}⛽  Maksoi: {transaction.hinta}€ 
        Litrat: {transaction.litrat} Kilometrit: {transaction.km} 
    </li>;     
  } 
  if(transaction.litrat ===0){
    palauta = <li className="lataus">
    {transaction.id}.⚡Auton nimi: {transaction.text}⚡ Maksoi: {transaction.hinta}€ 
    kWh: {transaction.kwh} Kilometrit: {transaction.km} 
    </li>;   
  }   
  
  return (
   <>
   {palauta} 
   </> 
  )
}