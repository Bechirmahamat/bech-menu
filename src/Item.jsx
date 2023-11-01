import React from "react";

const Item = ({ img, title, price, desc }) => {
    return (
        <div className="item">
            <div className="image-container">
                <img src={img} alt={title} />
            </div>
            <div className="px-2">
                <div className="title">
                    <h4>{title}</h4>
                    <span className="bg-blue-marin">${price}</span>
                </div>
                <p className="desc">{desc}</p>
            </div>
        </div>
    );
};

export default Item;
