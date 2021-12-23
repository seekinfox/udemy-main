import React from "react";
import { BiSearch } from "react-icons/bi";
import img1 from "../../images/hero.jpg"
import img2 from "../../images/hero1.jpg"
import { useState, useEffect } from "react";

const  state = {
    items: [
        {
            id:0,
            url: img1,
            h: "Learning that gets you",
            p: "Skills for your present (and your future). Get started."
        },
        {
            id: 1,
            url: img2,
            h: "Learn something new from rs.490",
            p: "With courses added regularly to our catalog, you always get the latest skills. Courses on sale through December 21."
        }
    ],
}
const delay = 9000;  

const Slider = () => {

const [index, setIndex] = useState(0);
const timeoutRef = React.useRef(null);
const {items} = state;
    
    // function resetTimeout() {
    //     if(timeoutRef.current) {
    //         clearTimeout(timeoutRef.current);
    //     }
    // }

    useEffect(() => {
        
       timeoutRef.current = setTimeout(()=>
            setIndex((prevIndex) => 
                prevIndex === 1 ? 0 : index + 1
            ),
            delay
        );
        return () => {
            
        };
    }, [index]);

        return(
            <>
            <div className="slideshow">
                <div className="slideshowSlider"
                style={{transform: `translate3d(${-index * 100}%, 0,0`}}
                >
                        {items.map(item => 
                            <div key={item.id} className="slide">
                                <div className="img">
                                <img src={item.url} alt={item.h} />
                                </div>
                                <div className="info">
                                    <p className="tagLine">{item.h}</p>
                                    <p className="text">{item.p}</p>
                                </div>
                                <div className="search">
                                    <div className="search-i">
                                    <input type="text" placeholder="What do you want to learn?"/>
                                    <BiSearch  className="i"/>
                                    </div>
                                </div>
                            </div>    
                        )}
                </div>
            </div>
            </>
        )
}
// {items.map(item => 
//     <div key={item.id} className="Slider">
//     <img src={item.src} alt={item.h} />
//     <div className="info">
//         <p className="tagLine">{item.h}</p>
//         <p className="text">{item.p}</p>
//     </div>
//     <div className="search">
//         <input type="text" />
//         <BiSearch  className="i"/>
//     </div>
//     </div>
// )}
export default Slider