import React from 'react'
import { useSelector } from 'react-redux'
import { Basket } from './Basket'

export const Baskets = () => {
  const { isBasket } = useSelector((state) => state.data)
  const basket = useSelector((state) => state.data.basket)
  return (
    <div className='basket__main'>
      {basket.map((el) => {
        return <Basket key={el.title} {...el}  isBasket={isBasket} />
      })}
    </div>
  )
}
