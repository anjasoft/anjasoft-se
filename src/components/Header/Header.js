import React from 'react';
import css from './Header.module.css';
import logo from '../../images/logo.svg';
import se from '../../images/se.svg';
import uk from '../../images/gb.svg';



export default function Header(props) {

    const onLanguageClick = (lang) => {
        if(lang!== props.activeLanguage){
            props.changeLanguage(lang);
        }  
    };

    return (
        <div className={css.headerWrapper} >
             <div className={css.header}>

                <img className={css.logo} src={logo} alt="Home" />  

            <div className={css.headerContainer}>
                <img className={`${css.flag} ${props.activeLanguage === "swe" ? css.active : null}`} src={se} alt="Swe" onClick={() => onLanguageClick("swe")}/>  
                <img className={`${css.flag} ${props.activeLanguage === "eng" ? css.active : null}`} src={uk} alt="Eng" onClick={() => onLanguageClick("eng")}/> 
            </div>
         

            </div>
        </div>);

}