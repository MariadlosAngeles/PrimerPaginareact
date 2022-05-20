import React from 'react'
import { ButtonFondoUI } from '../../UI/ButtonFondoUI/ButtonFondoUI'
import {Logo} from '../../UI/Logo/Logo'
import { NavigatorUI } from '../../UI/NavigatorUI/NavigatorUI'


export const Header = () => {
  return (
      <header>
        <Logo/>
        <NavigatorUI/>
        <ButtonFondoUI/>
      </header>
    )
  
}

