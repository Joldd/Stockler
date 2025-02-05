import { Pokemon } from "../Components/Pokemon";


export function Home(){ 

  const Pokemons = [];
  for (let index = 1; index<= 10; index++) {
    Pokemons.push(<Pokemon id={index} key={index}/>)

}

  return ( <div className="d-flex flex-column align-items-center">
      <h1 >Home</h1>
      <div>{Pokemons}</div>



    </div>
)
}



