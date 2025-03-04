export function Ticker({ticker, index}){ 

  return ( <div class="row topStock">
        <div class="col">
            {index}
        </div>
        <div class="col-4">
            {ticker.overview["Name"]}
        </div>
        <div class="col">
            {ticker.name}
        </div>
        <div class="col">
            {ticker.data[0]["Close"]} €
        </div>
    </div>
    )
}