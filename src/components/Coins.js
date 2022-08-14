import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'

export default function Coins(props) {
  return (
    <div className="container">
        <div>
            <div>
                <form className = "form">
                    <p>Show Top:</p>
                    <select value={props.amount} onChange={props.handleChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </form>
            </div>
            <div className="heading">
                <p>#</p>
                <p className="coin-name">Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volune</p>
                <p className='hide-mobile'>Mkt cap</p>
            </div>

{/* loop through all the props(the array containing the 10 coins) and then for each return <CoinItem> */}
            {props.coins.map(coins =>{
                
                return(
                    <Link to={`/coin/${coins.id}`} key={coins.id} element = {<Coin/>}>
                        <CoinItem coins={coins} />
                    </Link>
                )
            })}

       </div>
    </div>
  )
}
