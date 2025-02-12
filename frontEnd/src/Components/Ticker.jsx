export function Ticker({ticker}){ 

  return ( <div  className="d-flex flex-column align-items-center">
        <h2 >{ticker.name}</h2>
        <ul>
            <li>{ticker.symbol}</li>
            <li>{ticker.marketCap}</li>
            <li>{ticker.netchange}</li>
            <li>{ticker.pctchange}</li>
        </ul>
    </div>
    )
}