import React from 'react'
import insta from '../../assets/Logo-instagram.png'
import { MdGridView } from 'react-icons/md'
import './leftside.css'
import { Link } from 'react-router-dom'

const Leftside = () => {
  return (
    <div className='--leftside'>
        <div className='--insta'>
            <img src={insta} alt="" />
        </div>

        <div className='--all-left-first'>
            <h3><MdGridView size={24} /></h3>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
                <h4 className='--text-weight'>Home</h4>
            </Link>
        </div>
        <div className='--all-left-first'>
            <h3><MdGridView size={24} /></h3>
            <h4 className='--text-weight'>Search</h4>
        </div>
        <div className='--all-left-first'>
            <h3><MdGridView size={24} /></h3>
            <h4 className='--text-weight'>Explore</h4>
        </div>
        <div className='--all-left-first'>
            <h3><MdGridView size={24} /></h3>
            <h4 className='--text-weight'>Reels</h4>
        </div>
        <div className='--all-left-first'>
            <h3><MdGridView size={24} /></h3>
            <h4 className='--text-weight'>Message</h4>
        </div>
        <div className='--all-left-first'>
            <h3><MdGridView size={24} /></h3>
            <h4 className='--text-weight'>Notifications</h4>
        </div>
        <div className='--all-left-first'>
            <h3><MdGridView size={24} /></h3>
            <h4 className='--text-weight'>Create</h4>
        </div>
        <div className='--all-left-first'>
            <h3><MdGridView size={24} /></h3>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/profile'>
                <h4 className='--text-weight'>Profile</h4>
            </Link>
        </div>
    </div>
  )
}

export default Leftside