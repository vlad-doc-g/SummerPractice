import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tna1500mo from '../assets/tna1500mo.jpg'
import rt70 from '../assets/rt70.jpg'
import rtf32 from '../assets/rtf32.jpg'
import tna1500 from '../assets/tna1500s.jpg'
import bad1 from '../assets/badary-rt32-winter.jpg'
import bad2 from '../assets/badary2.jpg'
import p2500 from '../assets/p2500.jpg'

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item className="carousel-home">
                    <img 
                        className="d-block w-100"
                        src={tna1500mo}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>ТНА-1500 Медвежьи Озёра</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img 
                        className="d-block w-100"
                        src={rt70}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>РТ-70</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img 
                        className="d-block w-100"
                        src={rtf32}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>РТФ-32</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img 
                        className="d-block w-100"
                        src={tna1500}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>ТНА-1500 Калязин</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img 
                        className="d-block w-100"
                        src={bad1}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>РТ-32 Бадары</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img 
                        className="d-block w-100"
                        src={bad2}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>Комплекс Бадары</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img 
                        className="d-block w-100"
                        src={p2500}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>П-2500 Галёнки</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}