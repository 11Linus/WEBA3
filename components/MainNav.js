import { Container } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Link from "next/link"

export default function MainNav() {
    return(
<>
      <Navbar className="fixed-top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Kin Lok Chan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
                <Link href="/" passHref><Nav.Link>Movies</Nav.Link></Link>
                <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
    );
}