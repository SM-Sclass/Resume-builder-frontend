import React, { useState } from 'react'
import "../../App.css";
import Darkmode from './Darkmode';
import DropdownUser from './DropdownUser';


function Header({ sidebarOpen, setSidebarOpen }) {
  const [search, setSearch] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
  }
  return (
    <header className='header'>
      <div className="headerOuterLayout">
        <div className='scrumbar'><svg width="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_429_11066)">
            <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_429_11066">
              <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)" />
            </clipPath>
          </defs>
        </svg></div>
        <div className='searchLayout'>
          <form action="">
            <div className='searchInnerLayout'>
              <button>
                <img src="public/search.svg" alt="searchSVG" />
              </button>
              <input type="text" name='search' placeholder='Search' value={search} onChange={handleChange} />
            </div>
          </form>
        </div>
        <div className='profileLayout'>
          <ul className='profileInnerLayout'>
            <li><Darkmode /></li>
            <li><DropdownUser /></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header