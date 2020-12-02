import React from "react";
import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Counter from "../learn-useState/Counter";
import Effect from "../learn-useEffect/Index";

const NavbarComponent = () => {
  return (
    <Router>
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
      <Navbar.Brand href="/">Toko Fajrul</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/state">React JS</Nav.Link>
          <Nav.Link href="/effect">Tim</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
      </div>
    </Navbar>
    <Switch>
      <Route path="/state" exact component={Counter} />
      <Route path="/effect" exact component={Effect} />
    </Switch>
    </Router>
  );
};

export default NavbarComponent;
