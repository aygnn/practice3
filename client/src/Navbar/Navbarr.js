import React from 'react'
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import './Navbar.scss';


export default function Navbarr() {
  return (
    <div className='mainnav'>
      <div className='navbar'>
        <div>
          <img src='https://preview.colorlib.com/theme/aroma/img/logo.png.webp'/>
          </div>

        <div>
      <Link className='home' to={'/'}><RiShoppingCartLine/> Home</Link>
      <button className='add'> <Link to={'add'}>Add</Link></button>
      

        </div>
      </div>
    </div>
  )
}
