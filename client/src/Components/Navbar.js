import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
    <div className='nav-menu'>
        <NavLink to="/">
            <div className="nav-home">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAayO5E7i8zdsHjkiU_hRPV-FQBhoISFteuQ&usqp=CAU"/>
               <span className="nav-fake-business">Vacation Spot</span>
            </div>
        </NavLink>
        
    </div>)
}

export default Navbar