import React from 'react'
import { Link } from 'react-router-dom'


export const NavigatorUI = () => {
  return (
    <nav>
      <Link className="title" to="/">Home</Link>
      <Link className="title" to="/aboutUS">RickAndMorty</Link>
      <Link className="title" to="/contactUS">Cactus</Link>  
      <Link className="title" to="/contadorUS">Contador</Link>
      <Link className="title" to="/mailer">Mailer</Link>
      <Link className="title" to="/gifs">Gifs</Link>

      
    </nav>
  )
}
