import React from 'react'
import image2 from '../../assets/girl2.webp'
import image3 from '../../assets/girl3.jpeg'
import image4 from '../../assets/girl4.jpeg'
import image5 from '../../assets/girl5.webp'
import './right.css'


const Right = () => {
  return (
    <div className='--right-main-page'>
      <div className='--right-page'>
        <div className='--right-users'>
          <img src={image4} alt="" />
          <div>
            <h4 style={{fontSize: '10px', marginTop: '10px', fontWeight: '900'}}>Adebayo</h4>
            <h4 style={{fontSize: '10px', fontWeight: '300'}}>Popular</h4>
          </div>
        </div>
        <div>
          <h4 style={{marginTop: '10px', marginRight: '10px', color: 'blue'}}>Following</h4>
        </div>
      </div>

      <div className='--right-page'>
        <div className='--right-users'>
          <h4 style={{marginTop: '10px'}}>Suggested for you</h4>
        </div>
        <div>
          <h4 style={{marginTop: '10px', marginRight: '10px'}}>See all</h4>
        </div>
      </div>

      <div className='--right-page'>
        <div className='--right-users'>
          <img src={image5} alt="" />
          <div>
            <h4 style={{fontSize: '10px', marginTop: '10px', fontWeight: '900'}}>Adebayo</h4>
            <h4 style={{fontSize: '10px', fontWeight: '300'}}>Popular</h4>
          </div>
        </div>
        <div>
          <h4 style={{marginTop: '10px', marginRight: '10px', color: 'blue'}}>Follow</h4>
        </div>
      </div>
      
      <div className='--right-page'>
        <div className='--right-users'>
          <img src={image3} alt="" />
          <div>
            <h4 style={{fontSize: '10px', marginTop: '10px', fontWeight: '900'}}>Adebayo</h4>
            <h4 style={{fontSize: '10px', fontWeight: '300'}}>Popular</h4>
          </div>
        </div>
        <div>
          <h4 style={{marginTop: '10px', marginRight: '10px', color: 'blue'}}>Follow</h4>
        </div>
      </div>

      <div className='--right-page'>
        <div className='--right-users'>
          <img src={image2} alt="" />
          <div>
            <h4 style={{fontSize: '10px', marginTop: '10px', fontWeight: '900'}}>Adebayo</h4>
            <h4 style={{fontSize: '10px', fontWeight: '300'}}>Popular</h4>
          </div>
        </div>
        <div>
          <h4 style={{marginTop: '10px', marginRight: '10px', color: 'blue'}}>Follow</h4>
        </div>
      </div>

    </div>
  )
}

export default Right