import React from 'react'
import "./loader.css"

const Loader = () => {
  return (
    <div>
        <div class="container">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <h2 className='tech'>Loading...</h2>
        </div>  
    </div>
  )
}

export default Loader