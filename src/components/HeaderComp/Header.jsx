import React ,{useState} from 'react'
import "../../App.css";
import Darkmode from './Darkmode';
import DropdownUser from './DropdownUser';


function Header( {sidebarOpen, setSidebarOpen}) {
  const [search, setSearch] = useState();
  const handleChange= (e)=>{
    e.preventDefault();
    const value  = e.target.value;
    setSearch(value);
  }
  return (
    <header className='header'>
      <div className="headerOuterLayout">
        <div className='scrumbar'>Scrum</div>
        <div className='searchLayout'>
          <form action="">
            <div className='searchInnerLayout'>
              <button></button>
              <input type="text" name='search'  value={search} onChange={handleChange}/>             
            </div>
          </form>
        </div>
        <div className='profileLayout'>
          <ul className='profileInnerLayout'>
            <Darkmode/>
            <DropdownUser/>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header