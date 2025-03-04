import { useEffect, useState } from "react";
import { Ticker } from "./Ticker";

export const TopStocks = () => {

    const apiUrl = import.meta.env.VITE_API_URL
    const [topTickers, setTopTickers] = useState([]);
    const nTop = 5;

    useEffect(() => {
        fetch(`${apiUrl}/ticker/top/${nTop}`)
        .then(response => response.json())
        .then(data => {
            setTopTickers(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }
    , [])

    return (
            <div className="container text-center customContainer">
                <h2 className="title">Top {nTop} actions</h2>
            <div className="row topStockHead">
                <h3 className="col">#</h3>
                <h3 className="col-4">Nom</h3>
                <h3 className="col">Symbole</h3>
                <h3 className="col">Prix</h3>
            </div>
                {topTickers.map((ticker, index) => (
                    <Ticker ticker={ticker} index={index+1} key={index} />
                ))}
            </div>
    );
};