import React, {Component} from 'react'
import video from '../assets/antv.mp4'

export default class Home extends Component {
    render() {
        return (
            <div class="back-video-container">
                <video
                    controls 
                    autoPlay
                    loop
                    muted
                    class='back-video'
                >
                    <source src={video} type="video/mp4"/>
                </video>
                <div class='back-video-text-container'>
                    <div class="back-video-text">29 ЛЕТ УСПЕШНОЙ РАБОТЫ!</div>
                </div>
            </div>
        )
    }
}