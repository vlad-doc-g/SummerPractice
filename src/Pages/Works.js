import React, {Component} from 'react'
import workph from '../assets/workspageback.jpg'

export default class Development extends Component {
    render() {
        return (
            <>
                <div class="back-photo-container-razrabotka">
                    <img
                        className="d-block w-100"
                        class='back-photo-razrabotka'
                        src={workph}
                        alt="background of work page"
                    />
                </div>
                <div className='text-works'>
                Более чем за двадцать пять лет деятельности, Общество с ограниченной ответственностью «Специальный монтаж средств связи» (ООО «Спецмонтаж»), выполнило монтажные работы на антенных комплексах, диаметром зеркальной поверхности от 12 до 32 метров. Проведено множество работ по модернизации антенных систем ТНА-57 и ТНА-110, антенных систем с диаметром зеркальной поверхности 32 метра.<br/>
                <br/>Ежегодно на обслуживании находятся более 50 антенных комплексов, диаметром рефлектора от 3,5 до 64 метров. Выполняются работы по техническому обслуживанию антенно-приемных комплексов СВЧ-диапазона.<br/>
                <br/>ООО «Спецмонтаж» выполняет ремонт, модернизацию, монтаж, пуско-наладку, техническое (сервисное) обслуживание:<br/>
                <br/>• антенно-приемных комплексов (АПК) на базе зеркальных, многолучевых антенн, а также их составных частей, которые обеспечивают прием и обработку сигналов систем спутниковой связи СВЧ диапазона;
                <br/>• антенных систем и оборудования для приема и обработки телеметрической информации, а также для приема и передачи команд управления космическими аппаратами (КА) и ракетами- носителями (РН);
                <br/>• техники радиосвязи, в том числе переговорных устройств и техники служебной связи, средств связи в оптическом диапазоне;
                <br/>• металлических мачт, опор, антенных зеркал, пилонов крупноапертурных антенных систем, включая участие в разработке проектов и строительстве фундаментов, юстировке, антикоррозийной обработке и покраске.
                </div>
            </>
        )
    }
}