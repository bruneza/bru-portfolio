import React from 'react'
import './banner.css'

function banner() {
  return (
    <div className='banner-row'>
        <div className="banner-col-1">
            <div className="wrapper">
                <span className="bru-subtitle">Hello,</span>
                <h1>my Name is Bruce Mugwaneza</h1>
                <div className="banner-pos">
                    <div className="banner-pos-items">
                    <span>I'am </span>
                        <ul className="banner-pos-item-lis">
                            <li className="banner-pos-item">Web Developer</li>
                            <li className="banner-pos-item">Graphic Designer</li>
                            <li className="banner-pos-item">Social Media Manager</li>
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
        <div className="banner-col-2">col 2</div>
    </div>
  )
}

export default banner