import React, { useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'; //Se importa el componente Button para su uso


export const ContadorUS = () => {
    const [number, setCount] = useState(0);

    const handleAdd = ()=>{
        setCount(number+1)
    }
    const handleSubtract  = ()=>{
        setCount(number-1)
    }
    const handleReset = ()=>{
        setCount(0)
    }

    return (
        <div className='contadorUS'>
            <h3>{number}</h3>
            <hr/>
            <div className='buttons'>
                <ButtonUI
                    style="btnSumar"
                    event={handleAdd }
                    textButton="Sumar"
                />
                <ButtonUI
                    style="btnReset"
                    event={handleReset}
                    textButton="Reset"
                />
                <ButtonUI
                    style="btnRestar"
                    event={handleSubtract}
                    textButton="Restar"
                />
            </div>
            
        </div>
    );
}

