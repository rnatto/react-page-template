import React, { Component } from 'react';
import './Presentation.css';
class Presentation extends Component {
    render() {
        return (
            <div className="Presentation">
                <div className="title">
                    <h1>Loren title Loren title Loren title
                    <span className="subTitle"> Loren Subtitle!</span>
                    </h1>
                </div>
                <img src="http://lorempixel.com/400/350/food/"/>

            </div>
        );
    }
}

export default Presentation;