import React from 'react';
import SwitchRound from './SwitchRound';
import SwitchTheme from './SwitchTheme';
import ConvertNotation from './ConvertNotation';


const Settings = () => {
    return (
        <div className="setting">
            <ConvertNotation />
            <SwitchRound />
            {/* <SwitchTheme /> */}
        </div>
    )
}

export default Settings;
