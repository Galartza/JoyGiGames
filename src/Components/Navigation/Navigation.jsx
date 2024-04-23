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
  DropdownItem,
  Modal,
  Button
} from 'reactstrap';
import Example from '../Modal/Modal';
import './navigation-style.css';

function Navigation(args) {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false); // Estado para el menú de navegación
  const [isOpenModal, setIsOpenModal] = useState(false); // Estado para el modal de inicio de sesión y registro

  const toggleNavbar = () => setIsOpenNavbar(!isOpenNavbar);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <div>
      <Navbar className='nav navbar-expand-lg navbar-dark' fixed='top' {...args}>
        <NavbarBrand className='logo-nav' href="/">JoyGi<span className='span-logo'>Games</span></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpenNavbar} navbar>
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
              <Button className='nav-link sign-in' onClick={toggleModal}>
                Sign in
              </Button>
            </NavItem>
            <NavItem className='nav-item'>
              <Button className='nav-link register' onClick={toggleModal}>
                Register
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {/* Aquí agregas el modal */}
      <Example isOpen={isOpenModal} toggle={toggleModal} />
    </div>
  );
}

export default Navigation;
