import React from 'react';
import Option from './Option';

const ConvertNotation = () => {
    return (
        <Option>
            <label className="vertical-align unselectable">Convert results to german notation</label>
            <button className="btn convert convert-dark" id="button-convert">
            <i className="fas fa-sync-alt" id="convert-symbol"></i>
            </button>
        </Option>
    )
}

export default ConvertNotation;
