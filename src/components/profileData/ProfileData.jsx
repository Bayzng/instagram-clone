import React from 'react'
import image1 from '../../assets/girl1.jpeg'
import image2 from '../../assets/girl2.webp'
import image3 from '../../assets/girl3.jpeg'
import image4 from '../../assets/girl4.jpeg'
import image5 from '../../assets/girl5.webp'
import './profileData.css'

const ProfileData = () => {
  
  return (
    <div className='--gallary-profileImage'>
      <div>
        <img src={image3} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
      <div>
        <img src={image1} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
      <div>
        <img style={{border: "3px solid red"}} src={image2} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
      <div>
        <img src={image5} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
      <div>
        <img style={{border: "3px solid red"}} src={image4} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
      <div>
        <img src={image2} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
      <div>
        <img src={image5} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
      <div>
        <img style={{border: "3px solid red"}} src={image3} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
      <div>
        <img src={image1} alt="" />
        <h4 style={{fontSize: '10px'}}>Adebayo</h4>
      </div>
    </div>
  )
}

export default ProfileData