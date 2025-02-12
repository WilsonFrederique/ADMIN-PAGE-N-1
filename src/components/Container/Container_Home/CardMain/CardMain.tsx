import React from 'react'
import { FaHeart } from "react-icons/fa";

const CardMain = ({imgSrc, title, hearts}) => {
  return (
    <div className='card_main'>
        <img src={imgSrc} alt="" />
         
        <div className="card_main_name">
            <h2>{title}</h2>

            <div className="card_icon">
                <i>
                    {" "}
                    <FaHeart /> <span>{hearts}</span>
                    {" "}
                </i>
            </div>
        </div>

        <div className="stats">
            <p>Current Bid <span>1.2 ETH</span></p>
            <hr />
            <p>Ending in <span>1d:10h:30m</span></p>
        </div>

        <div className="card_button">
            <a href="#" className="button1 btn">Place a Bid</a>
            <a href="#" className="button2 btn">History</a>
        </div>
    </div>
  )
}

export default CardMain