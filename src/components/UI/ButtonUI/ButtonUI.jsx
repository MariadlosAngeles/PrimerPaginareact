import React from 'react'

export const ButtonUI = ({style,event,textButton}) => {
  return (
    <button onClick={event} className={style}>{textButton}</button>
  )
}

//Se realiza un componente "ButtonUI" para reutilización de código 
//Se asignan unas propiedades