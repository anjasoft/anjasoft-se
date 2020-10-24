import React from 'react';
import ValueProposition from './ValueProposition';

export default function ValuePropositionSection(props) {
    return (
        <div className="section values green-background">
            <div className="container">
                <div className="row">
                    {props.valuePropositions.map((vp) => <ValueProposition vp={vp} key={vp.Title} />) }
                </div>
            </div>
        </div>
    );
}