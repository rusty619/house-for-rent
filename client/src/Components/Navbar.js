import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
    <div className='nav-menu'>
        <NavLink to="/">
            <div className="nav-home">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAayO5E7i8zdsHjkiU_hRPV-FQBhoISFteuQ&usqp=CAU"/>
               <span className="nav-fake-business">BlueCover</span>
            </div>
        </NavLink>
        <NavLink to="/user/bigpoppapump">
            <div className= "nav-user-scott">
                <p className="nav-user-scot-text-1">Holla </p>
                <p className="nav-user-scot-text-2">BigPoppaPump</p>
                <img className="nav-user-scot-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scottsteiner_full.jpg/256px-Scottsteiner_full.jpg" />
            </div>
        </NavLink>
        
    </div>)
}

export default Navbar