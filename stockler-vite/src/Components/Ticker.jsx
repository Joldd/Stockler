export function Ticker({ticker, index}){ 

  return ( <div className="row topStock">
        <div className="col">
            {index}
        </div>
        <div className="col-4">
            {ticker.overview["Name"]}
        </div>
        <div className="col">
            {ticker.name}
        </div>
        <div className="col">
            {ticker.data[0]["Close"]} €
        </div>
    </div>
    )
}