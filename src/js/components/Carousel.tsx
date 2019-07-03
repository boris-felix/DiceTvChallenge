import React from 'react';

export const Carousel = (props) => {

    return <article className='carousel'> {props.items.map( item => (
        <div class='carousel__col'>
            <h2>{item.name}</h2>

            <p>{item.description}</p>

            <img className='carousel__image' src={item.cover} />
        </div>)
    )}</article>;
}
