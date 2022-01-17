import React from 'react'
import logo3 from '../img/3.jpg'

export const Basket = ({ title, desc, price, isBasket }) => {
  return isBasket ? (
    <div className='basket'>
      <div className='basket__element'>
        <div className='basket__logo'>
          <img src={logo3} alt='logo' className='basket__img' />
        </div>
        <div className='baslet__price'>
          <div className='basket__title'>{title}</div>
          <div className='basket__desc'>{desc}</div>
          <div className='prive_buy'>
            <span className='basket__price'>{price}</span>
            <span className='basket__bay'>
              <a href='#!' className='Buy'>
                buy
              </a>{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}
