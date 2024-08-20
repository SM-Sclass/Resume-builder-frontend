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
        <div className='scrumbar'>
          <img src="/menuBurger.svg" alt="menuBurgerSVG" />
        </div>
        <div className='searchLayout'>
          <form action="">
            <div className='searchInnerLayout'>
              <button>
                <img src="/search.svg" alt="searchSVG" />
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