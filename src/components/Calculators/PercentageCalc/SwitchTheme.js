import React from 'react'
import Option from "./Option";

export default function SwitchTheme() {
    
    return (
        <Option>
            <div className="" id="theme-symbol"></div>
            <label className="unselectable">Dark Mode</label>
            <div className="switch-align">
            <label className="switch">
                <input type="checkbox" id="switch-theme" defaultChecked />
                <div></div>
            </label>
            </div>
        </Option>
    )
}
