import React from 'react';

export default function ValueProposition(props) {

    const v = props.vp;

    let desc = v.Description;
    

    return (
        <div className="one-third column value">
            {v.Image && <img src={v.Image} ></img> }
            <h5 className="value-heading">{v.Title}</h5>
            <p className="value-description">{desc}</p>
        </div>
    );
}