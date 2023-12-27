import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.png"
import menu from "../assets/images/menu.png"

export default function Header() {
  return (
    <header className="navbar">
  <div className="container mx-auto flex  p-5 flex-col md:flex-row items-center justify-between">
    <Link to="/" className="flex  title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0">
   <img src={Logo} alt="Logo"  className='w-10'/>
      <span className="ml-3 text-2xl uppercase font-black mt-2">Carbon Shredder</span>
    </Link>
  
    <button >
    <img src={menu} alt="" />
    </button>
  </div>
</header>

  )
}
