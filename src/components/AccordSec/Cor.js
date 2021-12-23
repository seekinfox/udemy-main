import React from "react";
import img0 from "../../images/python.jpg"
import img1 from "../../images/python1.jpg"
const Cor = () => {
    const card = [
        {
            id: 0,
            title: "python",
            img: img0,
            price: "Rs412"
        },
        {
            id: 1,
            title: "JavaScript",
            img: img1,
            price: "Rs543"
        }
    ]

    return(
        <>
        {card.map(item => 
            <div key={item.id} className="item">
                <div className="img">
                    <img src={item.img}  alt="course"/>
                </div>
                <div className="info">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            </div>    
        )}
        </>
    )
}
export default Cor