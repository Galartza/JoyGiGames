import './navigation-style.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '../Navigation/navigation-style.css';


function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='nav navbar-expand-lg navbar-dark' fixed='top' {...args}>
        <NavbarBrand className='logo-nav' href="/">JoyGi<span className='span-logo'>Games</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' href="/">Home</NavLink>
            </NavItem>
            <NavItem className='nav-item'>

              <UncontrolledDropdown className='uncontrolled-dropdown' nav inNavbar>
              <DropdownToggle className='nav-toggle' nav caret>
                Collections
              </DropdownToggle>
              <DropdownMenu className='drop_down-menu' right>
                <DropdownItem className='drop-item'>Option 1</DropdownItem>
                <DropdownItem className='drop-item'>Option 2</DropdownItem>
                <DropdownItem className='drop-item'>Option 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' href="">
                Opinions
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' href="">
                Contact
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link sign-in' href="">
                Sign in
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link register' href="">
                Register
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Navigation;