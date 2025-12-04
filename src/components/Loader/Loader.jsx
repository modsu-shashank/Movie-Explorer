import React from 'react';
import './Loader.css';

const Loader = ({ size = 'medium', fullScreen = false, text = 'Loading...' }) => {
    if (fullScreen) {
        return (
            <div className="loader-fullscreen">
                <div className={`loader loader-${size}`}>
                    <div className="loader-spinner"></div>
                </div>
                {text && <p className="loader-text">{text}</p>}
            </div>
        );
    }

    return (
        <div className="loader-container">
            <div className={`loader loader-${size}`}>
                <div className="loader-spinner"></div>
            </div>
            {text && <p className="loader-text">{text}</p>}
        </div>
    );
};

export default Loader;
