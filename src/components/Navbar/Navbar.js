import React from 'react'
import './Navbar.css' 
import Button from "../Button/Button";

const Navbar =() => {
  return (
    <div id='nav-container'>
        <div>
            <h1>Bouvier</h1>
            <h6>Nature</h6>
        </div>
        <ul id='list'>
            <li>
                <a href="">Association</a>
            </li>
            <li>
                <a href="">Partners</a>
            </li>
            <li>
                <Button text={'Make a Donation'} />

            </li>
        </ul>
    </div>
  )
}

export default Navbar