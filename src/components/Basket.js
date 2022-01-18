import React from 'react'
import { useDispatch } from 'react-redux'
import logo3 from '../img/3.jpg'
import { decrement, increment } from '../store/reduser'

export const Basket = ({ title, price, isBasket, count }) => {
  const dispatch = useDispatch()
  return isBasket ? (
    <div className='basket'>
      <div className='basket__element'>
        <div className='basket__logo'>
          <img src={logo3} alt='logo' className='basket__img' />
        </div>
        <div className='baslet__price'>
          <div className='basket__title'>{title}</div>
          {/* <div className='basket__desc'>{desc}</div> */}
          <div className='prive_buy'>
            <div className='button__element'>
              <button onClick={() => dispatch(increment())}  className='button__inc'>+</button>
              <span className='basket__count'>{count}</span>
              <button onClick={() => dispatch(decrement())} className='button__dec'>-</button>
            </div>
            <span className='basket__price'>{price}</span>
            <span className='basket__bay'>
              <a href='#!' className='Buy'>
                buy
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}
