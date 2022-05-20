import React, { useState } from 'react'

export const ContadorUS = () => {
    const [number, setCount] = useState(0);
    return (
        <div className='contadorUS'>
            <p>{number}</p>
            <div className='button'>
            <button  onClick={() => setCount(number + 1)}>(+)</button>
            <button  onClick={() => setCount(0)}>(Resert)</button>
            <button  onClick={() => setCount(number - 1)}>(-)</button>
            </div>
           
        </div>
    );
}

