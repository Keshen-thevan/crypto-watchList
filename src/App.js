import axios from "axios";
import React, {useState, useEffect} from "react"
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Navbar from "./components/Navbar";
import Coin from './routes/Coin'


function App() {
  const [coins, setCoins] = useState([]);
  // const [amount, setAmount] = useState("10");
  // const [order, setOrder] = useState("market_cap_desc");
  const[amount, setAmount] = useState("10")
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_dsc&per_page=${amount}&page=1&sparkline=false`

  

  useEffect(() => {
    //get the url and then take the response from the get method and then pass it into the setCoins, thus
    //setting the coins to equal the data being called from the api
    axios.get(url).then((response) => {
      setCoins(response.data)

    }).catch((error) =>{
      console.log(error)
    })

  },[amount])

  const handleChange = (event) => {
    setAmount(event.target.value)
  }

  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element = {<Coins coins={coins} amount={amount} handleChange={handleChange}/>} />
        <Route path='/coin' element = {<Coin/>}>
          <Route path=':coinId' element={<Coin/>} />
        </Route>
      </Routes>
      
    </>
    
  );
}

export default App;
