import React from 'react'
import { Link } from 'react-router-dom'


export const NavigatorUI = () => {
  return (
    <nav>
      <Link className="title" to="/">Home</Link>
      <Link className="title" to="/aboutUS">AboutUS</Link>
      <Link className="title" to="/contactUS">ContactUS</Link>  
      <Link className="title" to="/contadorUS">ContadorUS</Link>
      
    </nav>
  )
}
