import React from 'react';
import css from '../css/AnimatedComputer.module.css';

const _colorClassNames = ["yellow", "darkBlue", "white", "lightBlue", "white"];

function GetRandomColor(){
    
    if(getRndInteger(0,99)!== 0)
    {
    let clr = _colorClassNames[getRndInteger(0, _colorClassNames.length)];
    return clr;
    }
    else
    {
        return "red"
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

export default function AnimatedComputer(props) {


    const animationDuration = 4;
    const duration = animationDuration+"s";
    const lineSeparation = "400ms";
    const doubleLineSeparation = "800ms";

    return (
        <div className={css.animatedComputer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.58 117.5">
                <defs>
                    <style>
                        {`.cls-1{fill:#637582;}
                           .cls-2{fill:#455760;}
                           .cls-3{fill:#94a5af;}
                           .cls-4{fill:#ecebeb;}
                           .cls-5{fill:#3e3127;}
                           .cls-6{fill:#fff;}

                           .white-line,
                           .cls-7,
                           .cls-8
                           {fill:none;stroke-miterlimit:10;}
                           .cls-7,
                           .cls-8{stroke:#3e3127;}
                           .cls-7{stroke-width:5px;}

                           .white-line,
                           .cls-8
                           {stroke-width:3px;}

                           .white-line
                           {stroke-linecap:round;}

                           .white-line{stroke:#fff;}` }
                    </style>
                </defs>
                <title>Asset 35</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path className="cls-1" d="M13.37.93H158.75a8.51,8.51,0,0,1,8.51,8.51v95.22a8.51,8.51,0,0,1-8.51,8.51H6.26a1.4,1.4,0,0,1-1.4-1.4V9.44A8.51,8.51,0,0,1,13.37.93Z" transform="translate(0.1 -0.15) rotate(0.1)" />
                        <path className="cls-2" d="M165.63,15.78l-.14,88.47a11.89,11.89,0,0,1-11.92,11.87L74.2,116c26-30.53,38.27-85.38,42.93-112.17l36.63.06A11.87,11.87,0,0,1,165.63,15.78Z" />
                        <rect className="cls-3" x="4.27" y="18.52" width="5.12" height="93.95" transform="translate(0.11 -0.01) rotate(0.1)" />
                        <path className="cls-4" d="M164.51,9.59l0,9.71L2.08,19l0-9.69A5.39,5.39,0,0,1,7.7,4.19l151.23.26A5.38,5.38,0,0,1,164.51,9.59Z" />
                        <circle className="cls-5" cx="15.07" cy="11.26" r="1.63" />
                        <circle className="cls-5" cx="21.76" cy="11.27" r="1.63" />
                        <circle className="cls-5" cx="28.45" cy="11.28" r="1.63" />
                        <polygon className="cls-6" points="100.31 4.55 91.57 19.38 81.59 19.37 90.32 4.54 100.31 4.55" />
                        <polygon className="cls-6" points="123.67 4.59 114.94 19.42 104.93 19.41 113.67 4.58 123.67 4.59" />
                        <rect className="cls-7" x="2.58" y="2.63" width="162.41" height="112.24" rx="6" transform="translate(0.1 -0.14) rotate(0.1)" />
                        <line className="cls-8" x1="2.65" y1="18.65" x2="165.91" y2="18.92" />

                        <line id="line1" className={`${css.yellow} ${css.line}`} x1="20.46" y1="22" x2="90" y2="22" visibility="hidden">
                            <animate id="line1start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"0s;line19start.begin+" +doubleLineSeparation}
                                fill="freeze" />
                            <animate id="line1y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line1start.end"
                                fill="remove" />
                            <animate id="line1y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line1start.end"
                                fill="remove" />
                            <animate id="line1finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line1y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line2" className={`${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="60" y2="22" visibility="hidden">
                            <animate id="line2start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line1start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line2y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line2start.end"
                                fill="remove" />
                            <animate id="line2y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line2start.end"
                                fill="remove" />
                            <animate id="line2finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line2y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line2b" className={`${css.[GetRandomColor()]} ${css.line}`} x1="72" y1="22" x2="78" y2="22" visibility="hidden">
                            <animate id="line2bstart" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line1start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line2by1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line2bstart.end"
                                fill="remove" />
                            <animate id="line2by2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line2bstart.end"
                                fill="remove" />
                            <animate id="line2bfinish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line2by2.end" 
                                fill="freeze" /> 
                        </line>
						
                        <line id="line3" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="68.2" y2="22" visibility="hidden">
                            <animate id="line3start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line2start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line3y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line3start.end"
                                fill="remove" />
                            <animate id="line3y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line3start.end"
                                fill="remove" />
                            <animate id="line3finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line3y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line3b" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="79" y1="22" x2="90" y2="22" visibility="hidden">
                            <animate id="line3bstart" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line2start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line3by1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line3bstart.end"
                                fill="remove" />
                            <animate id="line3by2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line3bstart.end"
                                fill="remove" />
                            <animate id="line3bfinish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line3by2.end" 
                                fill="freeze" /> 
                        </line>
						
						<line id="line4" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="50" y2="22" visibility="hidden">
                            <animate id="line4start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line3start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line4y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line4start.end"
                                fill="remove" />
                            <animate id="line4y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line4start.end"
                                fill="remove" />
                            <animate id="line4finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line4y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line6" className={`${css.yellow} ${css.line}`} x1="20.46" y1="22" x2="94" y2="22" visibility="hidden">
                            <animate id="line6start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line4start.begin+" + doubleLineSeparation}
                                fill="freeze" />
                            <animate id="line6y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line6start.end"
                                fill="remove" />
                            <animate id="line6y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line6start.end"
                                fill="remove" />
                            <animate id="line6finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line6y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line7" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="73" y2="22" visibility="hidden">
                            <animate id="line7start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line6start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line7y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line7start.end"
                                fill="remove" />
                            <animate id="line7y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line7start.end"
                                fill="remove" />
                            <animate id="line7finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line7y2.end" 
                                fill="freeze" /> 
                        </line>

						<line id="line8" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="57" y2="22" visibility="hidden">
                            <animate id="line8start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line7start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line8y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line8start.end"
                                fill="remove" />
                            <animate id="line8y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line8start.end"
                                fill="remove" />
                            <animate id="line8finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line8y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line8b" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="67" y1="22" x2="81" y2="22" visibility="hidden">
                            <animate id="line8bstart" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line7start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line8by1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line8bstart.end"
                                fill="remove" />
                            <animate id="line8by2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line8bstart.end"
                                fill="remove" />
                            <animate id="line8bfinish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line8by2.end" 
                                fill="freeze" /> 
                        </line>
						
                        <line id="line9" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="61" y2="22" visibility="hidden">
                            <animate id="line9start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line8start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line9y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line9start.end"
                                fill="remove" />
                            <animate id="line9y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line9start.end"
                                fill="remove" />
                            <animate id="line9finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line9y2.end" 
                                fill="freeze" /> 
                        </line>
						
                        <line id="line10" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="65" y2="22" visibility="hidden">
                            <animate id="line10start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line9start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line10y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line10start.end"
                                fill="remove" />
                            <animate id="line10y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line10start.end"
                                fill="remove" />
                            <animate id="line10finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line10y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line10b" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="72" y1="22" x2="90" y2="22" visibility="hidden">
						<animate id="line10bstart" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line9start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line10by1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line10bstart.end"
                                fill="remove" />
                            <animate id="line10by2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line10bstart.end"
                                fill="remove" />
                            <animate id="line10bfinish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line10by2.end" 
                                fill="freeze" /> 
                        </line>
						
						<line id="line11" className={`${css.yellow} ${css.line}`} x1="20.46" y1="22" x2="99" y2="22" visibility="hidden">
                            <animate id="line11start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line10start.begin+" +doubleLineSeparation}
                                fill="freeze" />
                            <animate id="line11y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line11start.end"
                                fill="remove" />
                            <animate id="line11y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line11start.end"
                                fill="remove" />
                            <animate id="line11finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line11y2.end" 
                                fill="freeze" /> 
                        </line>
						
						<line id="line12" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="35" y2="22" visibility="hidden">
                            <animate id="line12start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line11start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line12y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line12start.end"
                                fill="remove" />
                            <animate id="line12y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line12start.end"
                                fill="remove" />
                            <animate id="line12finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line12y2.end" 
                                fill="freeze" /> 
                        </line>
						
						<line id="line13" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="46" y1="22" x2="72" y2="22" visibility="hidden">
                            <animate id="line13start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line11start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line13y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line13start.end"
                                fill="remove" />
                            <animate id="line13y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line13start.end"
                                fill="remove" />
                            <animate id="line13finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line13y2.end" 
                                fill="freeze" /> 
                        </line>
						
						<line id="line14" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="66" y2="22" visibility="hidden">
                            <animate id="line14start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line13start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line14y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line14start.end"
                                fill="remove" />
                            <animate id="line14y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line14start.end"
                                fill="remove" />
                            <animate id="line14finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line14y2.end" 
                                fill="freeze" /> 
                        </line>				
						
						<line id="line15" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="76" y1="22" x2="89" y2="22" visibility="hidden">
                            <animate id="line15start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line13start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line15y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line15start.end"
                                fill="remove" />
                            <animate id="line15y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line15start.end"
                                fill="remove" />
                            <animate id="line15finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line15y2.end" 
                                fill="freeze" /> 
                        </line>
						
						<line id="line16" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="71" y2="22" visibility="hidden">
                            <animate id="line16start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line15start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line16y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line16start.end"
                                fill="remove" />
                            <animate id="line16y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line16start.end"
                                fill="remove" />
                            <animate id="line16finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line16y2.end" 
                                fill="freeze" /> 
                        </line>
						
						<line id="line17" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="69" y2="22" visibility="hidden">
                            <animate id="line17start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line16start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line17y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line17start.end"
                                fill="remove" />
                            <animate id="line17y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line17start.end"
                                fill="remove" />
                            <animate id="line17finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line17y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line18" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="77" y2="22" visibility="hidden">
                            <animate id="line18start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line17start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line18y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line18start.end"
                                fill="remove" />
                            <animate id="line18y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line18start.end"
                                fill="remove" />
                            <animate id="line18finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line18y2.end" 
                                fill="freeze" /> 
                        </line>

                        <line id="line19" className={ `${css.[GetRandomColor()]} ${css.line}`} x1="20.46" y1="22" x2="28" y2="22" visibility="hidden">
                            <animate id="line19start" 
                                attributeName="visibility" 
                                from="hidden" 
                                to="visible"
                                dur="1ms"
                                begin={"line18start.begin+" +lineSeparation}
                                fill="freeze" />
                            <animate id="line19y1"
                                attributeName="y1"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line19start.end"
                                fill="remove" />
                            <animate id="line19y2"
                                attributeName="y2"
                                from="111"
                                to="22"
                                dur={duration}
                                begin="line19start.end"
                                fill="remove" />
                            <animate id="line19finish" 
                                attributeName="visibility" 
                                from="visible" 
                                to="hidden"
                                dur="1ms"
                                begin="line19y2.end" 
                                fill="freeze" /> 
                        </line>
						
                        
                    </g>
                </g>




            </svg>
        </div>
    );
}