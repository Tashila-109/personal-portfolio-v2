/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { handleDropdown, handleMobileDropdown } from '@common/navbar';

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav ref={nr} className={`navbar navbar-expand-lg change ${theme === 'themeL' ? 'light' : ''}`}>
      <div className='container'>
        <Link href='/'>
          <a className='logo'>Tashila</a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          onClick={handleMobileDropdown}
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='icon-bar'>
            <i className='fas fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item' onClick={handleDropdown}>
              <Link href={`/`}>
                <a className='nav-link'>Home</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href={`/about`}>
                <a className='nav-link'>About</a>
              </Link>
            </li>
            <li className='nav-item' onClick={handleDropdown}>
              <Link href={`/portfolio`}>
                <a className='nav-link'>Portfolio</a>
              </Link>
            </li>
            <li className='nav-item' onClick={handleDropdown}>
              <Link href={`/library`}>
                <a className='nav-link'>Library</a>
              </Link>
            </li>
            <li className='nav-item' onClick={handleDropdown}>
              <Link href={`/blog`}>
                <a className='nav-link'>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
