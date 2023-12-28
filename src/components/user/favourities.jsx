import React from 'react'

const Favourities = ({cart,setCart}) => {
  return (
    <div>
        <h1>
            {
            cart.map((data)=>(

                <h1>{data.title}</h1>
            ))
            }
            </h1>
    </div>
  )
}

export default Favourities
