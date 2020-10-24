import React from 'react';
import placeholder from '../images/placeholder.png';

export default function StuffSection() {
    return (
        <div className="section categories green-background">
            <div className="container">
                <h3 className="section-heading">Responsive Images</h3>
                <p className="section-description">This right here is a bunch of pictures </p>
                <div className="row">
                    <div className="one-half column category">
                        <img className="u-max-full-width" src={placeholder}></img>
        </div>
                        <div className="one-half column category">
                            <img className="u-max-full-width" src={placeholder}></img>
        </div>
                        </div>
                    </div>
                </div>
    );
}