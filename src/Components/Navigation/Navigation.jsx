
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../Navigation/navigation-style.css';


function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='nav' fixed='top' {...args}>
        <NavbarBrand className='logo-nav' href="/">JoyGi<span className='span-logo'>Games</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' href="/components/">Home</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap">
                Collection
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap">
                Opinions
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Navigation;