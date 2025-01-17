import { useEffect, useState } from 'react';
import { Ticker } from '../Components/Ticker';

export function Stocks() {

  const [tickers, setTickers] = useState([]);

    useEffect(() => {
      fetch("https://yahoo-finance15.p.rapidapi.com/api/v2/markets/tickers?page=1&type=STOCKS", 
      {headers: {
        'x-rapidapi-key': '0255f7a229msh343bc8bef4af683p1aeae4jsnad07d04adbeb',
        'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
        } 
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTickers(data.body);
      })
      .catch(err => {
        console.error(err);
      })
    }, []);

    useEffect(() => {
      fetch("https://yahoo-finance15.p.rapidapi.com/api/v1/markets/screener?list=day_gainers", 
      {headers: {
          'x-rapidapi-key': '0255f7a229msh343bc8bef4af683p1aeae4jsnad07d04adbeb',
          'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
        } 
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      })
    }, []);

    const Tickers = [];
    for (let i = 0; i < tickers.length; i++) {
      Tickers.push(<Ticker ticker={tickers[i]} key={i} />);
    }

    return (
      <div className="d-flex flex-column align-items-center">
        <h1>Stocks</h1>
        <div>{Tickers}</div>
      </div>
    );
}