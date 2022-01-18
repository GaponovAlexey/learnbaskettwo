import React, { Component } from 'react'
import { useSelector } from 'react-redux'

import { Product } from './Product'

export const Main = () => {
  const element = useSelector((state) => state.data.element)
  return (
    <div>
      {element.map((el) => (
        <Product key={el.id} {...el} />
      ))}
    </div>
  )
}
