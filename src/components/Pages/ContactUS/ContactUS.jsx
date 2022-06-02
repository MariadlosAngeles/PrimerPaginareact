import React,{useEffect, useState} from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
// import { ImagenUI } from '../../UI/ImagenUI/ImagenUI';
import imagencita from '../../../images/cactus.jpg'

export const ContactUS = () => {
 
  const [number, setCount] = useState(0);

    const handleAdd = ()=>{
        setCount(number+10)
    }
    useEffect(()=>{
        const img= document.querySelector('.imgCactus');

        if(number>=100){
          img.classList.remove('nosex')
          img.classList.add('nose')    
        }else{
            img.classList.remove('nose')
            img.classList.add('nosex')       
        }
    
      },[number])
    
    const handleSubtract  = ()=>{
        setCount(number-10)
    }
    const handleReset = ()=>{
        setCount(0)
    }

  return (
    <div className='contadorUS'>
        <h3>{number}</h3>
        <div className='imageCactus'>
        <img className="imgCactus" src={imagencita} />
        {/* <ImagenUI></ImagenUI> */}
        </div>
        
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
