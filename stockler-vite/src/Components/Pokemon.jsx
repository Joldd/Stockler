import { useEffect, useState } from 'react';

export function Pokemon({id}){ 
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+id
    )
      .then(response => response.json())
      .then(data => {
        setName(data.name);
      });

  }, [id]);

  const [img, setImg] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+id
    )
      .then(response => response.json())
      .then(data => {
        setImg(data.sprites.front_default);
      });

  }, [id]);

  return ( <div  className="d-flex flex-column align-items-center">
      <h2 >{name}</h2>
      <img src={img} alt={name} />
    </div>
)
}