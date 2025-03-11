import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './styles/navigationHeader.css'
import IconButtons from './iconButtons'
import { GoBell, GoHeart, GoBookmark, GoSearch, GoPersonFill} from "react-icons/go";

const navigationHeader = () => {
  return (
    <div className='container'>
      <div className='header-top'>
        <div className="top-item-container">
          <h1>
            <Link to='/'>
              KIMMS
            </Link>
          </h1>
          <div className="search-bar">
            <input type="search" placeholder='Search for furnitures and exlusive product'/>
            <GoSearch className='search-icon'/>
          </div>
          <div className="button-left-container">
            <IconButtons icon={GoHeart}/>
            <IconButtons icon={GoBell}/>
            <IconButtons icon={GoBookmark}/>
          </div>
          <div className="button-right-container">
            <IconButtons icon={GoPersonFill}/>
          </div>
        </div>
      </div>
      <div className='header-bottom'>
        <div className="bottom-item-container">
          <button><Link to='/' className={location.pathname === "/" && "active-btn"}>Home</Link></button>
          <button><Link to='/products' className={location.pathname === "/products" && "active-btn"}>Products</Link></button>
          <button>Auction</button>
          <button>Ticket</button>
          <button>Contact</button>
          <button>About Us</button>
        </div>
      </div>
    </div>
  )
}

export default navigationHeader