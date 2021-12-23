import React from "react";

const Courses = ({id, img, title, name, price}) => {
    return (
        <>
        <div className="card">
            <div className="img">
                <img src={img} alt={id} />
            </div>
            <div className="info">
                <p>{title}</p>
                <p>{name}</p>
                <p>{price}</p>
                <p>Bestseller</p>
            </div>
        </div>
        </>
    );
}
export default Courses