import React from "react";

const Card = ({img, h, p, b}) => {
    return(
        <>
        <div className="card">
        <div className="img">
            <img src={img} alt="card" />
        </div>
        <div className="info">
            <p className="headtext">{h}</p>
            <p>{p}</p>
            <button>{b}</button>
        </div>
        </div>
        </>
    )
}
export default Card