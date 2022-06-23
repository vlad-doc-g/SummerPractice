import React, {Component} from 'react'
import backrights from '../assets/backrights.jpg'

export default class Development extends Component {
    render() {
        return (
            <>
                <div class="back-photo-container-razrabotka">
                    <img
                        className="d-block w-100"
                        class='back-photo-rights'
                        src={backrights}
                        alt="background of rights page"
                    />
                    <img
                        className="d-block w-100"
                        class='back-photo-rights'
                        src={backrights}
                        alt="background of rights page"
                    />
                </div>
                <div className='text-rights'>
                    Политика обработки персональных данных<br/>
                    <br/>1. Общие положения<br/>
                    <br/>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152 -ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных Общество с ограниченной ответственностью «Специальный монтаж средств связи» ОГРН: 1025004711016 ИНН: 5036002057 (далее Оператор).<br/>
                    <br/>1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.<br/>
                    <br/>2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта<br/>

                </div>
            </>
        )
    }
}