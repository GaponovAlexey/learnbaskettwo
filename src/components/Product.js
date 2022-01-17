import React from 'react'
import { useDispatch } from 'react-redux'
import logo3 from '../img/3.jpg'
import { ProductBasket } from '../store/reduser'

export const Product = ({ title, oldprice, price, desc } ) => {
  const dispatch = useDispatch()
  

  return (
    <div className='product'>
      <div className='main'>
        <div className='main__wrapper'>
          <div className='main__contents'>
            <div className='main__content'>
              <div className='content-imgs'>
                <img className='content-img' src={logo3} alt='logo' />
              </div>
              <p className='main__title'>{title}</p>
              <div className='main__desc'>
                <p className='main__desc-full'>{desc}</p>
              </div>
              <div className='main__price'>
                <del>{oldprice}</del> - {price}
              </div>
              <button onClick={() => dispatch(ProductBasket({desc, title,price }))}  className='main__button'>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
