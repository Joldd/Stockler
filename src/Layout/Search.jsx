import { useEffect, useState } from 'react';
import { SearchBar } from '../Components/SearchBar';
import { Stock } from '../Components/Stock';

export function Search() {
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState("");

    const onSearch = () => {
        fetch('https://yahoo-finance15.p.rapidapi.com/api/v1/markets/search?search='+search, 
            {headers: {
                'x-rapidapi-key': '0255f7a229msh343bc8bef4af683p1aeae4jsnad07d04adbeb',
                'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
                } 
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setStocks(data.body);
            })
            .catch(err => {
                console.error(err);
            })
    }

        const Stocks = [];
        for (let i = 0; i < stocks.length; i++) {
          Stocks.push(<Stock stock={stocks[i]} key={i} />);
        }

    return (
      <div >
        <SearchBar search={search} setSearch={setSearch} onSearch={onSearch}/>
        <div>{Stocks}</div>
      </div>
    );
}