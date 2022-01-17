import React from 'react'

const MethodsForm = () => {
    return (
        <div className="methods-wrapper">
            <div className="method-container percent-from">
                <div className="left-elements mobile-column">
                <div>
                    <span className="unselectable">What is</span>
                    <input className="modern percent mobile-align" onKeyDown={(event) => event.keyCode!=188} type="number"
                    id="from-first-input"></input>
                    <span className="unselectable">%</span>
                </div>
                <div>
                    <span className="unselectable"><span className="spacing-desktop"></span>of</span>
                    <input className="modern long-input mobile-align mobile-from" type="number"
                    onKeyDown={(event) => event.keyCode!=188} id="from-second-input"></input>
                    <span className="unselectable">?<span className="mobile-from-label"></span></span>
                </div>
                </div>
                <div className="right-elements">
                <span className="result-text unselectable">=</span>
                <input className="modern result resultmouse margin-right" readOnly id="from-result-input"></input>
                </div>
            </div>
            <div className="method-container percent-of">
                <div className="left-elements mobile-column">
                <div>
                    <input className="modern long-input no-margin-left mobile-align" type="number"
                    onKeyDown={(event) => event.keyCode!=188} id="of-first-input"></input>
                    <span className="unselectable">is what % </span>
                </div>
                <div>
                    <span className="unselectable"><span className="spacing-desktop"></span>of</span>
                    <input className="modern long-input mobile-align mobile-of" type="number"
                    onKeyDown={(event) => event.keyCode!=188} id="of-second-input"></input>
                    <span className="unselectable">?</span>
                </div>
                </div>
                <div className="right-elements">
                <span className="result-text unselectable mobile-of-label">=</span>
                <input className="modern percent resultmouse mobile-result-of" readOnly id="of-result-input"></input>
                <span className="unselectable">%</span>
                </div>
            </div>
            <div className="method-container percent-increase">
                <div className="left-elements mobile-column tablet-column">
                <div>
                    <span className="unselectable">In<span className="mobile-expand"></span>/<span
                        className="mobile-expand-second"></span>Decrease <span className="mobile-expand-third"></span>%</span>
                </div>
                <div>
                    <span className="unselectable"><span className="spacing-desktop"></span>from</span>
                    <input className="modern long-input mobile-align mobile-increase-first" onKeyDown={(event) => event.keyCode!=188}
                    type="number" id="increase-first-input"></input>
                </div>
                <div>
                    <span className="unselectable">to</span>
                    <input className="modern long-input mobile-align mobile-increase-second"
                    onKeyDown={(event) => event.keyCode!=188} type="number" id="increase-second-input"></input>
                    <span className="unselectable">?</span>
                </div>
                </div>
                <div className="right-elements">
                <span className="result-text unselectable mobile-increase-label">=</span>
                <input className="modern percent resultmouse mobile-result-increase" readOnly id="increase-result-input"></input>
                <span className="unselectable">%</span>
                </div>
            </div>
        </div>
    )
}

export default MethodsForm;
