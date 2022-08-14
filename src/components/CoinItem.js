import React from 'react'
import './Coins.css'

export default function CoinItem(props) {
  return (
    //the data which is passed in from props is then used to create an output for each coin in the list

    // .toUpperCase() - makes the entire string uppercase
    // .toFixed() - converts number to string, rounds string to specified number of decimals
    // .toLocaleString() - adds commas to the string based on settngs of computer

    
    <div className = "coin-row">
        <p>{props.coins.market_cap_rank}</p>
        <div className="img-symbol">
            <img src={props.coins.image} alt="" />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p >${props.coins.current_price.toLocaleString()}</p>
        <p >{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className="hide-mobile">${props.coins.total_volume.toLocaleString()}</p>
        <p className="hide-mobile">${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}
