import React from 'react';
import './PriceCard.css'; // Importing CSS file

const PriceCard = ({ plan }) => {
    return (
        <div className="price-card">
            <h2 className="plan-name">{plan.name}</h2>
            <h3 className="plan-price">{plan.price}</h3>
            <hr className="divider"/>
            <ul className="features-list">
                {plan.features.map((feature, index) => (
                    <li key={index} className={feature.included ? 'included' : 'not-included'}>
                        {feature.name}
                    </li>
                ))}
            </ul>
            <button className="cta-button">{plan.buttonText}</button>
        </div>
    );
};

export default PriceCard;
