import React, {Component} from 'react'
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'
import ant from '../assets/vitinosh.jpg'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <img
                    className="d-block w-100"
                    class='back-photo-contacts'
                    src={ant}
                    alt="antennacont"
                />
                <div class='contacts-container'>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="kontakty">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column mt-2">
                                        <Nav.Item>
                                            <Nav.Link eventKey="kontakty" className="contacts-button">Контакты</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="rekvizity" className="contacts-button">Реквизиты</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>

                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="kontakty">
                                            <p><strong>Телефоны для123 связи:</strong></p>
                                            <p>+7(968) 667-40-31
                                            <br/>+7(496) 754-07-27
                                            <br/>_________________________________</p>
                                            <p><strong>E-mail:</strong></p>
                                            <p>smss93@mail.ru (отдел работ)
                                            <br/>smss15@mail.ru (отдел разработки)
                                            <br/>_________________________________</p> 
                                            <p><strong>Адрес:</strong></p>
                                            <p>142103 Россия, Московская обл.,
                                            <br/>г. Подольск, ул. Железнодорожная, д.1, стр. 1.</p>            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="rekvizity">
                                            <p>Общество с ограниченной ответственностью "Специальный монтаж средств связи"
                                            <br/>сокр. ООО "Спецмонтаж"</p>
                                            <p><strong>ИНН:</strong> 5036002057
                                            <br/><strong>КПП:</strong> 503601001
                                            <br/><strong>ОГРН:</strong> 1025004711016</p>
                                            <p><strong>р/с</strong> 40702810440330100127
                                            <br/>в ПАО СБЕРБАНК Г. МОСКВА
                                            <br/><strong>БИК:</strong> 044525225
                                            <br/>_________________________________</p>
                                            <p>Общество с ограниченной ответственностью "Центр Антенных Технологий Спецмонтаж"
                                            <br/>сокр. ООО "ЦАТ Спецмонтаж"</p>
                                            <p><strong>ИНН:</strong> 5036149980
                                            <br/><strong>КПП:</strong> 503601001
                                            <br/><strong>ОГРН:</strong> 1155074004414 </p>
                                            <p><strong>р/с</strong> 40702810140330003786
                                            <br/>в ПАО СБЕРБАНК Г. МОСКВА
                                            <br/><strong>БИК:</strong> 044525225</p>
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