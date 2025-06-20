import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#003366' }} variant="dark">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand href="/">
            <img
              src="balls-sports.png"
              alt="logo"
              width={40}
              style={{ borderRadius: "50%" }}
            />
          </Navbar.Brand>

          {/* Home + Turbo-Fit name on the left */}
          <Nav>
            <Navbar.Text className="text-white fw-bold me-3">Turbo-Fit</Navbar.Text>
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item href="Shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="Tshirts">Tshirts</NavDropdown.Item>
              <NavDropdown.Item href="BasketBall-Jersey">BasketBall-Jersey</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Balls">Balls</NavDropdown.Item>
              <NavDropdown.Item href="Accessoires">Accessories</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right side */}
          <Nav className="ms-auto">
          
            
            {/* Register and Login links */}
            <Nav.Link href="/Register" className="text-white">Register</Nav.Link>
            <Nav.Link href="/Login" className="text-white">Login</Nav.Link>
             <Nav.Link href="/Profile" className="text-white">Profile</Nav.Link>
             <Nav.Link href="/my-orders" className="text-white">My Orders</Nav.Link> 
            {/* Shopping Cart */}
            <Nav.Link href="/cart" className="text-white d-flex align-items-center">
              <FaShoppingCart size={22} />
              {/* Optional badge for items count */}
              {/* <span className="badge bg-danger ms-1">3</span> */}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
