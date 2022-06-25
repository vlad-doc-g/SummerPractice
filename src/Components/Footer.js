import React, { Component } from 'react'
import {Navbar, Container } from 'react-bootstrap'
import logo from '../assets/satlog.png'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div class="footer">
                    <Navbar collapseOnSelect>
                        <Container fluid>
                            <Navbar.Brand href="/SummerPractice">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inlone-block align-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>    
                            <div className="devby">
                                <a href="https://vk.com/vladdoc1">developed by vlad.doc</a>
                            </div>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}