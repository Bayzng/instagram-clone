import React from 'react'
import Leftside from '../left/Leftside'
import './home.css'
import Galery from '../galary/Gallery'
import Right from '../right/Right'

const Home = () => {
  return (
    <div className='usersPage'>
        <div id='sectionOne'>
            <Leftside/>
        </div>

        <div id='sectionTwo'>
            <Galery/>
        </div>

        <div id='sectionThree'>
            <Right/>
        </div>
    </div>
  )
}

export default Home