import { Market } from "../Components/Market";
import { TopStocks } from "../Components/TopStocks";

export function Home(){ 


  return ( <div className="d-flex flex-column align-items-center">
    <Market/>
    <TopStocks/>
  </div>
  )
}