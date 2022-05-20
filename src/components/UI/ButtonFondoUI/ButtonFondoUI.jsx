import React from 'react'
import { ButtonUI } from '../ButtonUI/ButtonUI'

export const ButtonFondoUI = () => {
    
    const fondo =()=>{
        const body=document.body
        body.classList.toggle("dark")
    }
  return (
    <div>
        <ButtonUI
            style="btnFondo"
            event={fondo}
            textButton="Fondo"
        />
    </div>
  )
}
