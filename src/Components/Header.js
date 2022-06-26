import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from '../assets/satlog.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <div class="header">
                    <Navbar collapseOnSelect expand="sm">
                        <Container fluid>
                            <Navbar.Brand href="/SummerPractice">
                            <div ClassName="logoname">
                                <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inlone-block align-top"
                                alt="Logo"
                                />
                                <div className="name">ГРУППА КОМПАНИЙ <strong>СПЕЦМОНТАЖ</strong></div>
                            </div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav
                                    fill
                                    variant="tabs"
                                    defaultActiveKey="/home"
                                    className="mr-auto"
                                >
                                    <Nav.Link href="/SummerPractice/development"> Разработка </Nav.Link>
                                    <Nav.Link href="/SummerPractice/works"> Работы </Nav.Link>
                                    <Nav.Link href="/SummerPractice/history"> История </Nav.Link>
                                    <Nav.Link href="/SummerPractice/geography"> География </Nav.Link>
                                    <Nav.Link href="/SummerPractice/contacts"> Контакты </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}
