import React, { useState, useEffect} from 'react'
import { Cards } from '../../UI/Cards/Cards';

export const Gifs = () => {
    const [inputCard,setInput]=useState(false)
    const [card,setCard]= useState ([])

    const URL="https://g.tenor.com/v1/";
    const search="search?";
    const trend="trending?key="
    const key="LIVDSRZULELA";
    // const query=`q=${inputTenor.value}`
    const limit="&limit=6";
    
    const getString=(e)=>{
      setInput(!inputCard)
    }

    useEffect(() => {
      let inputTe=document.querySelector('.inputTenor')
      let url=URL+search+`q=${inputTe.value}&key=${key}`+limit
      fetchCharacter(url)
      },[inputCard])

    useEffect(()=>{
    let url=URL+trend+key+limit;
      fetchCharacter(url)

    },[] )
    
    const fetchCharacter =(url)=>{
      fetch(url)
      .then(response=>response.json())
      .then(data=>setCard(data.results))
      } //creacion de las cards
   

  return (
    <div className='App'>
      <input onKeyUp={getString} className='inputTenor'type='text' id="input" />
      <div className="tarjeGifs" id='tarjeGifs'>
          <Cards arr={card}></Cards>
      </div>
</div>
  )
}
