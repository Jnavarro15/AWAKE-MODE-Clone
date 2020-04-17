import React, { Component } from 'react'

export default class Nav extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 35;
      const nav = document.getElementById('nav')
      if (isTop) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled')
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }


  render() {



    return (
      <div>
        <span className='covid'>For the next 30 days, we are donating 10% of our sales to Glasdoor COVID-19 Emergency Appeal</span>
        <header id='nav' className='nav'>
          <MenuBtn />
          <Logo />
          <MenuRight />
        </header>
      </div>
    )
  }
}



const MenuBtn = () => (
  <div className='menu-btn'>
    <div className='btn-line'></div>
    <div className='btn-line'></div>
    <div className='btn-line'></div>
  </div>
)

const MenuRight = () => (
  <div className='menu-right'>
    <ul id='menu'>
      <li>LOGIN / REGISTER</li>
      <li> | </li>
      <li>MY BAG (0) <i class="fas fa-shopping-bag"></i></li>
    </ul>
  </div>
)

const Logo = () => (
  <div>
    <a href="#"><img className='logo' src="https://images.businessoffashion.com/filestack/NnqvtEZlRKyO4rhjFB6M_5f991f1c4c361d7d162c65bd1751c956.png?auto=format%2Ccompress&w=340" alt="logo" /></a>
  </div>
)

