import React from "react";

interface CardProps {
    title: string,
    desc: string,
    img: HTMLImageElement,
}

const Card: React.FC<CardProps> = ({title, img, desc}) => {
    return (
        <div id="card">
            <img src={img} />
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}
export default Card;