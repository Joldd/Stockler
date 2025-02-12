export function Stock({stock}){ 

  return ( <div  className="d-flex flex-column align-items-center">
        <h2 >{stock.name}</h2>
        <ul>
            <li>{stock.symbol}</li>
            <li>{stock.type}</li>
            <li>{stock.typeDisp}</li>
            <li>{stock.exch}</li>
            <li>{stock.exchDisp}</li>
        </ul>
    </div>
    )
}