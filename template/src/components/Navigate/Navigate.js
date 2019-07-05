import React, { Component } from 'react';
import './Navigate.css';
class Navigate extends Component {
    render() {
        return (
            <div className="navigate-bar">
                <img className="logo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="LOREN"/>
                <ul>
                    <li><a href="#inicio">início</a></li>
                    <li><a href="#inicio">termos de uso</a></li>
                    <li><a href="#inicio">imprensa</a></li>
                </ul>
            </div>
        );
    }
}

export default Navigate;