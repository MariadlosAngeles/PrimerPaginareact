import React,{useEffect, useState} from 'react'
import { ButtonUI } from '../ButtonUI/ButtonUI'

export const ButtonFondoUI = () => {
    
  const [modeDark,stateDark] =useState(false)
  // const [title, setTitle]= useState(false)

  const backgroundDark =() =>{
    stateDark(!modeDark)
  }

  useEffect(()=>{
    if(modeDark){
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
      
    }else{
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
    }

  },[modeDark])

  return (
    <div>
        <ButtonUI
            style="btnFondo"
            event={backgroundDark}
            textButton="On"
        />
    </div>
  )


    
}
