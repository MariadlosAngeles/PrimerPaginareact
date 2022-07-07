import React from 'react'

export const Cards = ({arr}) => {
  return (
    <>
        {
            arr.map((item)=>(
                <div id='cardTenor'>
                    <img src={item.media[0].mediumgif.url} className="imgCard"/>
                </div>
            ))
        }
    </>
  )
}
