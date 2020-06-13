import React from 'react';
import {Navbar,NavbarBrand,Nav, NavItem, NavLink} from 'reactstrap';

function HeaderComponent()
{
    return(
      <>
        <Navbar color="primary" light expand="md">
          <div className="container">
          <NavbarBrand href="/" className="nav1">Impulsive</NavbarBrand>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem>
                <NavLink href="/" active className="nav1"><span className="link1">Corona Virus Tracker</span></NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        </>
    )
}
export default HeaderComponent;