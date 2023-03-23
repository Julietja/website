import React from 'react'

function Header() {
  return (
    <header className='header'>
<h1 className='greeting'>Welcome to my website!</h1>
     <nav className='nav'>
       <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Services</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </nav>
    </header>
  )
}

export default Header