import React, { useState } from 'react';
import "../../styles/HeaderStyle.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'

export default function Header() {
 const [nav , setnav] = useState(false);
 //scroll navbar
 const changeValueOnScroll =()=>{
  const scrollValue = document?.documentElement?.scrollTop;
  scrollValue>100?setnav(true):setnav(false);
 }
window.addEventListener("scroll", changeValueOnScroll);


  return (
    <header>
      <Navbar className={`header-section ${nav === true ? 'sticky' : ''}`} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
            <Link to="/">
             <img  src={Logo} alt="logo" className='logo-img'/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">About</Nav.Link>
            <Nav.Link as={Link} to="/">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/">Shop</Nav.Link>
            <Nav.Link as={Link} to="/">Blog</Nav.Link>
            <Nav.Link as={Link} to="/">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
              <div className='cart'>
                <i className="bi bi-bag fs-5"></i>
                <em className='roundpoint'>2</em>
              </div>
            </Nav.Link>
          </Nav>
         </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  )
}
