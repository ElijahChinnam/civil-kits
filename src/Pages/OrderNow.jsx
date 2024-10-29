import React from 'react'
import products from '../Database/Products'
import Card from './Card'

export default function OrderNow() {
  return (
    <div className='flex justify-center align-center w-5/6 mx-auto'>
      {
        products.map((product)=>{
          return(
            <>
              <Card img={product.img} name={product.name} price={product.price}></Card>
            </>
          )
          console.log(product);
        })
      }
    </div>
  )
}
