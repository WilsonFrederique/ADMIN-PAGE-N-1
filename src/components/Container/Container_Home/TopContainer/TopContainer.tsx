import React from 'react';
import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";
import './Container.css';
import MonProfile from '../../../../assets/images/moi.png';

const TopContainer = () => {
  return (
    <div className='topContainner'>
        <div className="inputBox">
            <input type="text" placeholder='Rechercher' />
            <i><FaSearch /></i>
        </div>

        <div className="profileContainer">
            <i className='profileIcon'>
                <FaBell />
            </i>

            <div className="profileImage">
                <img src={MonProfile} alt="Mon Profile" />
            </div>

            <p className="profileName">Walle Fred</p>
            <i className="menuChevron" id='menuChevron'>
                <FaChevronDown />
            </i>

            
        </div>
    </div>
  )
}

export default TopContainer