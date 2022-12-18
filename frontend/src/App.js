import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AuthUser from "./components/AuthUser";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const { token, getToken, logout } = AuthUser();
  const logoutUser = () => {
    if (token !== undefined) {
      logout();
    }
  };
  return (
    <>
      {getToken() && (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Create />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#"></Nav.Link>
              </Nav>
              <Nav>
                <Navbar.Brand href="/dashboard">
                  <span className="span">Dashboard</span>
                </Navbar.Brand>
                <Navbar.Brand href="/" onClick={logoutUser}>
                  <span className="span">Logout</span>
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
