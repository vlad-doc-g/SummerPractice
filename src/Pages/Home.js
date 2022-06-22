import React, {Component} from 'react'
import video from '../assets/antv.mp4'
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="back-video-container">
                <video
                    controls
                    autoPlay
                    loop
                    muted
                    class='back-video'
                >
                    <source src={video} type="video/mp4" />
                </video>
                <div className='back-video-text-container'>
                    <div className="back-video-text">29 ЛЕТ УСПЕШНОЙ РАБОТЫ!</div>
                </div>
            </div>
            <div className="home-textb">
                <p>Мы принимали участие в строительстве и модернизации таких объектов, как:</p>
            </div>
            <div>
                <CarouselBox />
            </div>
            </>
        )
    }
}