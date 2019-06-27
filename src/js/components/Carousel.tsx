import React from 'react';

export const Carousel = ({ items }) => {
    return (
        <ul>
            {items.map((item, key) => (
                <li key={key} style={{ backgroundImage: `url(${item.cover})` }}>
                    <span className="item-name">{item.name}</span>
                </li>
             ))}
        </ul>
    );
};
