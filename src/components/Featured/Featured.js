import React from "react";

const Featured = () => {
    const category = [
        {
            id:0,
            title: "Developement",
            lang: ["Python", "Web Development", "Machine Learning"],
            users: ["12,233,233 students", "45,423,233 students", "1,212,341 students"]
        },
        {
            id:1,
            title: "Business",
            lang: ["Financial Analysis", "SQL", "PMP"],
            users: ["12,233,233 students", "45,423,233 students", "1,212,341 students"]
        },
        {
            id:2,
            title: "IT and Software",
            lang: ["AWS Certification", "Ethical Hacking", "Cyber Security"],
            users: ["12,233,233 students", "45,423,233 students", "1,212,341 students"]
        },
        {
            id:3,
            title: "design",
            lang: ["Photoshop", "Graphic Design", "Drawing"],
            users: ["12,233,233 students", "45,423,233 students", "1,212,341 students"]
        },

    ];

    return(
    <>
        <section className="feature">
        <h2>Featured topics by category</h2>
        <div className="sections">
            {category.map(({id, title, lang, users}) => (
                <div key={id} className="section">
                <h3>{title}</h3>
                <ul>
                {lang.map(item => <li key={item}><a href="#">{item}</a> 
                </li>)}</ul>
            </div>
            ))}
        </div>
        <button>Explore more topics</button>
        </section>
    </>);
}
export default Featured