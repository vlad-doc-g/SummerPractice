import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ant from '../assets/ant.jpeg'

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ant}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>картинка</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}