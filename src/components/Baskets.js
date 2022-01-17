import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import logo3 from '../img/3.jpg'
import { Basket } from './Basket'

export const Baskets = () => {
  const { isBasket } = useSelector((state) => state.data)
  const element = useSelector((state) => state.data.basket)
  return (
    <>
      <Basket {...element} isBasket={isBasket} />
    </>
  )
}
