import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import logo3 from './img/3.jpg'

export const Main = () => {
  const {title, price, desc, logo3 } = useSelector((state) => state.data)
  return (
    <div>
      <div className='main'>
        <div className='main__wrapper'>
          <div className='main__contents'>
            <div className='main__content'>
              <div className='content-imgs'>
                <img className='content-img' src={logo3} alt='logo' />
              </div>
              <p className='main__title'>{title}</p>
              <div className='main__desc'>
                <p className='main__desc-full'>
                 {desc}
                </p>
              </div>
              <div className='main__price'>
                <del>4000$</del> - {price}
              </div>
              <button className='main__button'>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
