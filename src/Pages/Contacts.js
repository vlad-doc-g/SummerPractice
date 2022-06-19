import React, {Component} from 'react'
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'
import ant from '../assets/vitino.jpg'

export default class Contacts extends Component {
    render() {
        return (
            <div class="back-photo-container">
                <img
                    className="d-block w-100"
                    class='back-photo'
                    src={ant}
                />
                <div class='contacts-container'>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column mt-2">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" className="contacts-button">Контакты</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="second" className="contacts-button">Реквизиты</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>

                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <p>Телефоны для связи:</p>
                                            <p>+7(968) 667-40-31
                                            <br/>+7(496) 754-07-27
                                            <br/>_________________________________</p>
                                            <p>E-mail:</p>
                                            <p>smss93@mail.ru (отдел работ)
                                            <br/>smss15@mail.ru (отдел разработки)
                                            <br/>_________________________________</p> 
                                            <p>Адрес:</p>
                                            <p>142103 Россия, Московская обл.,
                                            <br/>г. Подольск, ул. Железнодорожная, д.1, стр. 1.</p>            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p>Общество с ограниченной ответственностью "Специальный монтаж средств связи"
                                            <br/>сокр. ООО "Спецмонтаж"</p>
                                            <p>ИНН: 5036002057
                                            <br/>КПП: 503601001
                                            <br/>ОГРН: 1025004711016</p>
                                            <p>р/с 40702810440330100127
                                            <br/>в ПАО СБЕРБАНК Г. МОСКВА
                                            <br/>БИК: 044525225
                                            <br/>_________________________________</p>
                                            <p>Общество с ограниченной ответственностью "Центр Антенных Технологий Спецмонтаж"
                                            <br/>сокр. ООО "ЦАТ Спецмонтаж"</p>
                                            <p>ИНН: 5036149980
                                            <br/>КПП: 503601001
                                            <br/>ОГРН: 1155074004414 </p>
                                            <p>р/с 40702810140330003786
                                            <br/>в ПАО СБЕРБАНК Г. МОСКВА
                                            <br/>БИК: 044525225</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </div>
            </div>
        )
    }
}