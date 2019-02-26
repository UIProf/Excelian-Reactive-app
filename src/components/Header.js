import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container-fluid">
                <Navbar color="faded" light>
                    <button className="ml-2 navbar-toggler">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <NavbarBrand href="/" className="ml-auto" color="white">
                        <i className="fa fa-address-card" aria-hidden="true"></i>
                    </NavbarBrand>
                </Navbar>
                </div>
            </div>
        );
    }
}

export default Header;