import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({
    message = 'Something went wrong',
    onRetry = null,
    fullScreen = false
}) => {
    const containerClass = fullScreen ? 'error-fullscreen' : 'error-container';

    return (
        <div className={containerClass}>
            <div className="error-content">
                <div className="error-icon">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                </div>
                <h3 className="error-title">Oops!</h3>
                <p className="error-message">{message}</p>
                {onRetry && (
                    <button className="error-retry-btn" onClick={onRetry}>
                        Try Again
                    </button>
                )}
            </div>
        </div>
    );
};

export default ErrorMessage;
