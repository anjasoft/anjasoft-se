import React from 'react';
import AnimatedComputer from './AnimatedComputerComponent';

export default function HeroSection(props) {
    return (
        <div className="section hero">
            <div className="container">
                <div className="row">
                    <div className="one-half column ">
                        <img className="hero-logo" src={props.logo}></img>
                        <h4 className="hero-heading">{props.greeting}</h4>
                        
                    </div>
                    <div className="one-half column hero-image-container">
                        <AnimatedComputer cssClasses="hero-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}