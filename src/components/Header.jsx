import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/Logo.png'
import { BsPersonCircle } from 'react-icons/bs'

import '../styles/style.css'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" id='navbar'>
        <Container fluid style={{ margin: '0 5%', }}>
          <Navbar.Brand className='navbar-brand'>
            <Link to='/'><img src={Logo} alt='' className='d-inline-block align-text-top' id='logo' /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' id='navbar-icon' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll id='nav-item'
            >
              <Nav.Link as={Link} id='nav-link' className='nav-link' to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} id='nav-link' className='nav-link' to='/sobre'>
                Sobre
              </Nav.Link>
              <Nav.Link as={Link} id='nav-link' className='nav-link' to='/contato'>
                Contato
              </Nav.Link>
            </Nav>
            <div className='User'>
              <Link to='/user' className='User-link' id='User-btn'>
                <BsPersonCircle />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default Header