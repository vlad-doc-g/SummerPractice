import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from '../assets/satlog.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <div class="header">
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
                                ГРУППА КОМПАНИЙ СПЕЦМОНТАЖ
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav
                                    fill
                                    variant="tabs"
                                    defaultActiveKey="/home"
                                    className="mr-auto"
                                >
                                    <Nav.Link href="/development"> Разработка </Nav.Link>
                                    <Nav.Link href="/works"> Работы </Nav.Link>
                                    <Nav.Link href="/history"> История </Nav.Link>
                                    <Nav.Link href="/geography"> География </Nav.Link>
                                    <Nav.Link href="/contacts"> Контакты </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}