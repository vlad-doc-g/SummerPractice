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
                                    <Nav variant="pills" className="flex-column mt-2" class="nav-link">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Контакты</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Реквизиты</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>

                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <p>Телефоны для связи:</p>
                                            <p>+7(968) 667-40-31</p>
                                            <p>+7(496) 754-07-27</p>
                                            <p>E-mail:</p>
                                            <p>smss93@mail.ru (отдел работ)</p>
                                            <p>smss15@mail.ru (отдел разработки)</p>    
                                            <p> Адрес: 142103 Россия, Московская обл., г. Подольск, ул. Железнодорожная, д.1, стр. 1.</p>            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p>Общество с ограниченной ответственностью "Специальный монтаж средств связи"</p>
                                            <p>сокр. ООО "Спецмонтаж"</p>
                                            <p>ИНН: 5036002057</p>
                                            <p>КПП: 503601001</p>
                                            <p>ОГРН: 1025004711016</p>
                                            <p>р/с 40702810440330100127</p>    
                                            <p>в ПАО СБЕРБАНК Г. МОСКВА</p>
                                            <p>БИК: 044525225</p>
                                            <p>---------------------------------</p>
                                            <p>Общество с ограниченной ответственностью "Специальный монтаж средств связи"</p>
                                            <p>сокр. ООО "Спецмонтаж"</p>
                                            <p>ИНН: 5036002057</p>
                                            <p>КПП: 503601001</p>
                                            <p>ОГРН: 1025004711016</p>
                                            <p>р/с 40702810440330100127</p>    
                                            <p>в ПАО СБЕРБАНК Г. МОСКВА</p>
                                            <p>БИК: 044525225</p>
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