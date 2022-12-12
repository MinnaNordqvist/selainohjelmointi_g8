import React from 'react'

export const Transaction = ({transaction}) => {
  
    return (
    <li className="tankkaus">
        {transaction.id}. Auton nimi: {transaction.text}  Maksoi: {transaction.hinta}€ 
        Litrat: {transaction.litrat} Kilometrit: {transaction.km} 
        </li>
  )
}