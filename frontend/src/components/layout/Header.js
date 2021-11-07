import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect variant='dark' bg='info' expand='md'>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='ms-auto'>
            <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link href='/dashboard'>Tickets</Nav.Link>
            <Nav.Link href='/dashboard'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
