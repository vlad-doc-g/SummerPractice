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
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inlone-block align-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>    
                            <div className="devby">
                                developed by vlad.doc
                            </div>
                            <div> Группа компаний "Спецмонтаж". Все права защищены.</div>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}