import React from "react";
import Courses from "./Courses";
import img1 from "../../images/statsImages/one.jpg";
import img2 from "../../images/statsImages/two.jpg";
import img3 from "../../images/statsImages/three.jpg";
import img4 from "../../images/statsImages/four.jpg";
import img5 from "../../images/statsImages/five.jpg";
import img6 from "../../images/statsImages/six.jpg";
import c1 from "../../images/statCategoryImages/design.jpg";
import c2 from "../../images/statCategoryImages/develp.jpg";
import c3 from "../../images/statCategoryImages/it.jpg";
import c4 from "../../images/statCategoryImages/per.jpg";
import c5 from "../../images/statCategoryImages/busi.jpg";
import c6 from "../../images/statCategoryImages/photo.jpg";
import c7 from "../../images/statCategoryImages/music.jpg";
import c8 from "../../images/statCategoryImages/mark.jpg";
const CoursesStats = () => {
const cards = [
    {   
        id: 0,
        img: img1,
        title: "Lorem, ipsum dolor.",
        name: "Dr. Angela u",
        price: "rs490"
    },
    {
        id: 1,
        img: img2,
        title: "Lorem, ipsum dolor.",
        name: "Dr. Angela u",
        price: "rs490"
    },
    {
        id: 2,
        img: img3,
        title: "Lorem, ipsum dolor.",
        name: "Dr. Angela u",
        price: "rs490"
    },
    {
        id: 3,
        img: img4,
        title: "Lorem, ipsum dolor.",
        name: "Dr. Angela u",
        price: "rs490"
    },
    {
        id: 4,
        img: img5,
        title: "Lorem, ipsum dolor.",
        name: "Dr. Angela u",
        price: "rs490"
    },
    {
        id: 5,
        img: img6,
        title: "Lorem, ipsum dolor.",
        name: "Dr. Angela u",
        price: "rs490"
    }
];
const descCat = [
    {
        id: 0,
        img: c1,
        title: "Design"
    },
    {
        id: 1,
        img: c2,
        title: "Development"
    },

    {
        id: 2,
        img: c3,
        title: "IT and Software"
    },
    {
        id: 3,
        img: c4,
        title: "Personal Development"
    },
    {
        id: 4,
        img: c5,
        title: "Business"
    },
    {
        id: 5,
        img: c6,
        title: "Photography"
    },
    {
        id: 6,
        img: c7,
        title: "Music"
    },
    {
        id: 7,
        img: c8,
        title: "Markating"
    },
]

const Categories = ["design", "development", "marketing", "IT and software", "personal development", "business", "photography", "music"];

    return(
        <>
        <section className="statsContainer">
            <h2>Students are viewing</h2>
            <div className="innerContainer">
            {cards.map((item) => (<Courses key={item.id} id={item.id} img={item.img} title={item.title} name={item.name} price={item.price} />
            ))}
            </div>
            <div className="topCategory">
                <h2>Top Categories</h2>
                <div className="buttons">
                    {Categories.map((item, index) => <button key={index}>{item}</button>)}
                </div>
                <div className="cCards">
                    <div className="inner">
                    {descCat.map((item) => (
                        <div key={item.id} className="cCard">
                            <div className="img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CoursesStats