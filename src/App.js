import logo from './logo.svg';
import profile from './ig/profile.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


function App() {
  return (
    <Navbar className="navbarlight" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>

        {/* Navbar Logo */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className>
            <InputGroup>
              <InputGroup.Text className="search-form-addon" id="search-addon"><i class="bi bi-search"></i></InputGroup.Text>
              <FormControl
                className="search-form"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </InputGroup>
          </Nav>

          <Nav className="mx-auto menu-nav" activeKey="/home">
            <Nav.Item className='menu-nav-item'>
              <Nav.Link href="/home" className="menuIcon"><i className="bi bi-house-door"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item className='menu-nav-item'>
              <Nav.Link eventKey="link-1" className="menuIcon"><i className='bi bi-play-circle'></i></Nav.Link>
            </Nav.Item>
            <Nav.Item className='menu-nav-item'>
              <Nav.Link eventKey="link-2" className="menuIcon"><i className='bi bi-people'></i></Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav>
            <Nav.Link href="#deets" >
              <img
                src={profile}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
                style={{ marginRight: '5px' }}
              />John Doe</Nav.Link>
            <NavDropdown className='test' align='end' title="">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default App;
