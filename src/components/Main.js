import React from 'react'
import logo from './img/1.jpg'
import logo2 from './img/2.jpg'
import logo3 from './img/3.jpg'

export const Main = () => {
  return (
    <div>
      <div className='main'>
        <div className='main__wrapper'>
          <div className='main__contents'>
            <div className='main__content'>
              <div className='content-imgs'>
                <img className='content-img' src={logo3} alt='logo' />
              </div>
              <p className='main__title'>Macbook 14</p>
              <div className='main__desc'>
                <p className='main__desc-full'>
                  System on Chip (SoC), Apple M1 Pro chip, Up to 10-core CPU
                  with 8 performance cores and 2 efficiency cores, Upto 16-core
                  GPU, 16-core
                </p>
              </div>
              <div className="main__price">price</div>
              <button className='main__button'>Buy</button>
            </div>
            <div className='main__content'>
              <div className='content-imgs'>
                <img className='content-img' src={logo3} alt='logo2' />
              </div>
            </div>
            <div className='main__content'>
              <div className='content-imgs'>
                <img className='content-img' src={logo3} alt='logo3' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
