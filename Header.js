import React from 'react';
// import { useEffect, useState } from 'react'; //

// import components
import Logo from '../assets/img/Logo1.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

// Navbar hide on scroll effect //
/*
const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  */

  const Header = () => { 
    return (
    <header
      className={`${
        'bg-tertiary h-20'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img className='w-[153px] h-[172px] pt-[50px]' src={Logo} alt='' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
