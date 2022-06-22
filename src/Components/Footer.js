import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from '../assets/satlog.png'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div class="footer">
                    <Navbar collapseOnSelect>
                        <Container fluid>
                            <div className="devby">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inlone-block align-top"
                                    alt="Logo"
                                />
                                developed by vlad.doc
                            </div>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}