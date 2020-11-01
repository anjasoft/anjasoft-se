import React from 'react';
import css from './HeroSection.module.css';
import AnimatedComputer from '../AnimatedComputer/AnimatedComputer';

export default function HeroSection(props) {
    return (
        <div className="row">
           
         <div className={css.heroSection}> 

                <div className="six columns">
                    <div className={css.imageholder}>
                  <img id="heroLogo" className={css.heroLogo} src={props.logo} alt="Anjasoft" />  
                 
              
                    <h3 className={css.title}>{props.greeting}</h3> 
                    </div>
                </div>
                <div className="six columns">
                    <AnimatedComputer />
                </div>
                </div> 
        </div>
    );
}