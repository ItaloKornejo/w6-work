import React from 'react'
import './styles/header.css'
import{Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='header__red'>
          <Link to='/'><img className='pokedex__header-img' src='/images/home/pokedex_logo.png' alt='' /> </Link>
          <div className='header__black'></div>
          <div className='header__circle'>
            <div className='header__circle-int'></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header