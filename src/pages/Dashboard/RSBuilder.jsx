import { NavLink } from "react-router-dom"
import React from 'react'
import '../../../public/resume.svg'
const RSBuilder = () => {
  return (
    <div className='mainDashboardLayout'>
      <div className='usernameAndScratch'>
        <div className="userNameLayout">
          <h3>Hello, Sumit!</h3>
          <span>Create your creative</span>
        </div>
        <NavLink to="/ScratchRS" className="nav-link">
          <div className="scratchLinkLayout">
            <img src="public/resume1.svg" alt="Resume" />
            <div className="scratchLinkInnerLayout">
              <h5>Resume</h5>
              <span>Create from Scratch</span>
            </div>
          </div>
        </NavLink>
      </div>
      <div>

      </div>
    </div>
  )
}

export default RSBuilder