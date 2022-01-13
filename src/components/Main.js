import React from 'react'
import { useSelector } from 'react-redux'
import logo3 from './img/3.jpg'

export const Main = () => {
  // const title = useSelector((state) => state.data.title)
  return (
    <div>
      <div className='main'>
        <div className='main__wrapper'>
          <div className='main__contents'>
            <div className='main__content'>
              <div className='content-imgs'>
                <img className='content-img' src={logo3} alt='logo' />
              </div>
              {/* <p className='main__title'>{title}</p> */}
              <div className='main__desc'>
                <p className='main__desc-full'>
                  System on Chip (SoC), Apple M1 Pro chip, Up to 10-core CPU
                  with 8 performance cores and 2 efficiency cores, Upto 16-core
                  GPU, 16-core
                </p>
              </div>
              <div className='main__price'>
                <del>4000$</del> - 3400$
              </div>
              <button className='main__button'>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
