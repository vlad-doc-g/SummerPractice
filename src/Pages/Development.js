import React, {Component} from 'react'
import bckgr from '../assets/kalyaz-fon.jpg'
import {Col} from 'react-bootstrap'

export default class Development extends Component {
    render() {
        return (
            <>
                <div class="back-photo-container-razrabotka">
                    <img
                        className="d-block w-100"
                        class='back-photo-razrabotka'
                        src={bckgr}
                    />
                </div>
                <div className='text-razrab'>
                    <Col sm={6}>
                        <div>Тут планируется картинка
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div>С 2015 года в Группе компаний Спецмонтаж
                        <br/>отдельно выделено направление по разработке, 
                        <br/>проектированию и изготовлению системы 
                        <br/>управления антенной системы.
                        <p/>В настоящее время Общество с ограниченной ответственностью 
                        <br/>«Центр антенных технологий «Спецмонтаж» (ООО «ЦАТ Спецмонтаж»)
                        <br/>разработан абсолютно универсальный многодвигательный привод
                        <br/>с возможностью выбора люфта.
                        <p/>Основные преимущества:</div>          
                    </Col>
                </div>
            </>
        )
    }
}