import React from 'react';

export const Carousel = (props: any) => {
    return (
        <div className="carousel">
            {props.items.map((item, index) => {
                return (
                    <div className="container" key={index}>
                        <img className="carousel__image" src={item.cover}/>
                        <div className="carousel__content">
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
