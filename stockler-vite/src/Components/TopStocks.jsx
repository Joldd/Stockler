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
            <div class="container text-center">
                <h2>Top {nTop} actions</h2>
            <div class="row topStockHead">
                <h3 class="col">#</h3>
                <h3 class="col-4">Nom</h3>
                <h3 class="col">Symbole</h3>
                <h3 class="col">Prix</h3>
            </div>
                {topTickers.map((ticker, index) => (
                    <Ticker ticker={ticker} index={index+1} key={index} />
                ))}
            </div>
    );
};