import React from 'react'

const Card = () => {
    const products = [
        {name:"laptop", price:15000, Photo:"Images/laptop.jpg", Rating : {rate: 4.3, count:4300}},
        {name:"mobile", price:15000, Photo:"Images/mobile.jpg", Rating : {rate: 4.6, count:4300}}
    ]
  return (
    <div className='container-fluid'>
        <h2>Cards</h2>
        <div>
           
        </div>
      
    </div>
  )
}

export default Card
