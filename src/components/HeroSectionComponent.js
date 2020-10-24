import React from 'react';

export default function HeroSection(props) {
    return (
        <div className="section hero">
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <img className="hero-logo" src={props.logo}></img>
                        <h4 className="hero-heading">{props.greeting}</h4>
                    </div>
                    <div className="one-half column hero-image-container">
                        <img className="hero-image" src={props.heroImage}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}