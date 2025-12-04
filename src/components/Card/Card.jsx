import React from 'react';
import './Card.css';

const Card = ({
    children,
    className = '',
    hover = true,
    onClick = null,
    glass = false
}) => {
    const cardClasses = `
    card 
    ${hover ? 'card-hover' : ''} 
    ${glass ? 'glass-effect' : ''}
    ${onClick ? 'card-clickable' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    return (
        <div className={cardClasses} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;
