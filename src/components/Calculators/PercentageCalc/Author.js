import React from 'react'

const Author = () => {
    return (
        <div className="author">
            <div className="spacing-left author-text unselectable">Made with</div>
            <a className="heart-anchor" href="https://github.com/SaschaWebDev">
                <div className="heart"></div>
            </a>
            <div className="author-text unselectable">by <a href="http://www.saschamajewsky.de">Sascha Majewsky</a></div>
        </div>
    )
}

export default Author;
