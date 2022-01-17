import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isBaskets } from '../store/reduser'
import { Baskets } from './Baskets'

export const Header = () => {
  const dispatch = useDispatch()
  
  return (
    <div>
      <div className='header'>
        <h3 className='logo'>logo</h3>
        <div onClick={() => dispatch(isBaskets())} className='header__basket'>
          basket
        </div>
      </div>
      <Baskets />
    </div>
  )
}
