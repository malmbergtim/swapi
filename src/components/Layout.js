import { Outlet, Link} from 'react-router-dom'

import {Button, Navbar, NavItem, Nav, Container, NavDropdown} from 'react-bootstrap'
import starwars from '../images/Star_Wars_Logo.svg'



const Layout = () => {

const removeLinkStyling = {
  textDecoration: 'none',
  color: 'inherit'
}



    return (
        <>
        <Navbar bg="dark" variant="dark" expand="xl">
  <Container>
    <Navbar.Brand>  <img
        src={starwars}
        width="150"
        height="75"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link style={removeLinkStyling} to="/">Home</Link></Nav.Link>
        <Nav.Link><Link style={removeLinkStyling}to="about">About</Link></Nav.Link>
        <Nav.Link><Link style={removeLinkStyling} to="films">Films</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>

<Outlet/>
</>

    )
}


export default Layout;