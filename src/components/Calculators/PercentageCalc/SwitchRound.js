import React from 'react';
import Option from './Option';

const SwitchRound = () => {
    return (
        <Option>
            <label className="unselectable">Round to second decimal place</label>
            <div className="switch-align">
            <label className="switch">
                <input type="checkbox" id="switch-rounding" defaultChecked />
                <div></div>
            </label>
            </div>
        </Option>
    )
}

export default SwitchRound;
