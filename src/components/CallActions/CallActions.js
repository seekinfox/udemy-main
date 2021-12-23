import React from "react";
import sv1 from "../../images/CallActionImgs/nasdaq-dark.svg";
import sv2 from "../../images/CallActionImgs/volkswagen-dark.svg";
import sv3 from "../../images/CallActionImgs/box-dark.svg";
import sv4 from "../../images/CallActionImgs/eventbrite-dark.svg";
import sv44 from "../../images/CallActionImgs/netflix-dark.svg"
import sv5 from "../../images/CallActionImgs/logo-ub.svg"
import img1 from "../../images/CallActionImgs/instructor-mobile.jpg"
import img2 from "../../images/CallActionImgs/ub-mobile-v3.jpg"
import img3 from "../../images/CallActionImgs/transform-mobile-v3.jpg"
import Card from "./Card";

const CallAction = () => {

 const cardData = [
    {
        id: 0,
        img: img1,
        h: "Become an Intructor",
        p: "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love",
        button: "Start teaching today"
    },
    {

        id: 1,
        img: img2,
        h: sv5,
        p: "Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more. ",
        button: "Get Udemy Business"
    },
    {
        id: 2,
        h: "Trusted by companies of all sizes ",
        img: [sv1, sv2, sv3, sv44, sv4],

    },
    {
        id:3,
        img: img3,
        h: "Transform your life through education",
        p: "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
        button: "Find out how"
    }
 ]


    return(
        <>
        <section className="callAction">
        <Card img={cardData[0].img} h={cardData[0].h} p={cardData[0].p} b={cardData[0].button} />

        <div className="partners">
            <p>{cardData[2].h}</p>
            <div className="logos">
                {cardData[2].img.map(item => <img src={item} alt="logo"/>)
                }
            </div>
        </div>
        <div className="card card1">
            <div className="img">
                <img src={cardData[1].img} alt="img" />
            </div>
            <div className="info">
            <img className="heading" src={cardData[1].h} alt="headtext" />
            <p>{cardData[1].p}</p>
            <button>{cardData[1].button}</button>
            </div>
        </div>
        <Card img={cardData[3].img} h={cardData[3].h} p={cardData[3].p} b={cardData[3].button} />

        </section>
        </>
    );
}
 export default CallAction