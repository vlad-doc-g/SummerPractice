import React, {Component} from 'react'
import video from '../assets/antv.mp4'
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
    render() {
        return (
            <>
                <div class="absolute">
                    <div class="home-text">
                        Группа компаний СПЕЦМОНТАЖ
                        <br/>Успешно выполняем работы с 1993 года!
                    </div>
                    <div class="back-video-container">
                        <video
                            autoPlay
                            loop
                            muted
                            playsinline
                            class='back-video'
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className='back-video-text-container'>
                            <div className="back-video-text">29 ЛЕТ УСПЕШНОЙ РАБОТЫ!</div>
                        </div>
                    </div>
                    <div class="home-textb">
                        <p>Мы принимали участие в строительстве и модернизации таких объектов, как:</p>
                    </div>
                    <div>
                        <CarouselBox />
                    </div>
                </div>
            </>
        )
    }
}
