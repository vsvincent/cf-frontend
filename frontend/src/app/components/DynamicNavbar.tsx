import React from 'react';
import { Navbar, NavbarContent, NavbarBrand, NavbarItem, Link } from '@nextui-org/react'; // Replace with the actual library you are using
import PropTypes from 'prop-types';

interface DynamicNavbarProps {
    activeNavItem: string;
  }
  
  const DynamicNavbar: React.FC<DynamicNavbarProps> = ({ activeNavItem }) => {
    const underlineLink = (navItem: string) => {
        return navItem === activeNavItem ? 'always' : 'none'
    }
    return (
      <Navbar className="navbar">
        <NavbarContent justify="start">
          <div>
            <NavbarBrand>
              <img src="https://vectorified.com/image/pot-vector-3.png" width="50px" alt="Logo" />
            </NavbarBrand>
          </div>
          <p className="text-inherit hidden sm:flex navbar-content">Cooking for Friends</p>
        </NavbarContent>
  
        <NavbarContent className="sm:flex gap-4 ml-auto" justify="end">
          <NavbarItem isActive={(activeNavItem === 'home')??true}>
            <Link underline={underlineLink('home')} href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeNavItem === 'about'}>
            <Link underline={underlineLink('about')} href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeNavItem === 'events'}>
            <Link underline={underlineLink('events')} href="/events">
              Events
            </Link>
          </NavbarItem>
          <NavbarItem isActive={activeNavItem === 'services'}>
            <Link underline={underlineLink('services')} href="/services">
              Services
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  };
  
  DynamicNavbar.propTypes = {
    activeNavItem: PropTypes.string.isRequired, // Adjust the PropTypes or remove if not needed
  };
  
  export default DynamicNavbar;