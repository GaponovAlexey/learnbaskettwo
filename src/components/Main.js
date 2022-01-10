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
                <img className='content-img' src={logo} alt='logo' />
              </div>
            </div>
            <div className='main__content'>
              <div className='content-imgs'>
                <img className='content-img' src={logo2} alt='logo2' />
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
