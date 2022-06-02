import React,{useEffect, useState} from 'react'

export const AboutUS = () => {
  const url="https://rickandmortyapi.com/api/character/?name=";
  const [character, setCharacter] = useState('');
 
  const fetchCharacter =()=>{
    fetch(url+character)
    .then(response => response.json())
    .then(data => {
      console.log(data)
       data.results.forEach(elemento=>{
          tarjetas(elemento.name,elemento.image)
         console.log(elemento)
        })
    })
  }
  useEffect(() => {

    if(character.length>0){
      fetchCharacter()
    }
    
  },[character])

  function handleInput (event){
    console.log(document.getElementById('input').value)
    if(document.getElementById('input').value.length==''){
      const tarjetas=document.getElementById('tarjetas')
      while(tarjetas.firstChild){
        tarjetas.removeChild(tarjetas.firstChild)
      }
    }

    if(event.key=='Enter'){

      setCharacter(document.getElementById('input').value)
    }
    
  }

  function tarjetas(nombre,image){
    const container= document.getElementById('tarjetas')
    
    const card=document.createElement('div');
    card.classList='card';

    const name=document.createElement('h2');
    name.textContent=nombre;
    
    name.classList='tits';
    card.appendChild(name);

    const images=document.createElement('img');
    images.setAttribute('src',image);
    images.textContent=image;

    images.classList='img';
    card.appendChild(images);

    // const values=document.createElement('div');
    // values.textContent=values;

    // values.classList='values';
    // card.appendChild(values);

    container.appendChild(card);
}

  
  return(
    <div className='App'>
          <input onKeyUp={handleInput} type='text' id="input" />
        <div className="tarjetas" id='tarjetas'>
        </div>
    </div>
  )
}

 