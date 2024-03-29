import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/Logo1.svg';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-14'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-3xl hover:text-accent-hover' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img className='w-[150px]' src={Logo} alt='' />
          </div>
          <p className='text-accent opacity-80 text-[20px]'>
            &copy; Sorrells Insurance Solutions. All rights reserved. 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
