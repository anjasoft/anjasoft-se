import React from 'react';

export default function SecondBannerContactSection(props) {
    return (
        <div className="section get-help">
            <div className="container">
                <h3 className="section-heading">{props.title}</h3>
                <p className="section-description">{props.text}</p>
                <a className="button button-primary">{props.buttonText}</a>
            </div>
        </div>
    );
}