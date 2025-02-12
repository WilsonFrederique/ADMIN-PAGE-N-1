import React from 'react'

const MainRightTop = () => {
  return (
    <div className='topCard'>
        <div className="topCard_Name">
            <h2>Dtatistiques</h2>
            <a href="#">View More</a>
        </div>

        <div className="earning">
            <p>Artword Sold <span>187</span></p>
            <p>Artword Canceled <span>5</span></p>
            <p>Artword Pending <span>25</span></p>
            <p>Artword Delivered <span>200</span></p>
            <p>Artword Earnings <span>262 Eth</span></p>
        </div>
    </div>
  )
}

export default MainRightTop