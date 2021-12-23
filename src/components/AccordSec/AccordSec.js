import React from 'react';
import Cor from './Cor';
import Item from './Items';
const AccordSec = () => {
    const accordionData = [
        {
          title: 'Python',
        },
        {
          title: 'Exel',
        },
        {
          title: 'JavaScript',
        },
        {
            title: 'Data Science',
        },

      ];


  return (
    <section className='acc'>
      <div className="accordion">
        {accordionData.map(({ title }) => (
          <Item key={title} title={title} />
        ))}
      </div>
      <div className='desktop'>
        <h1>A broad selection of courses</h1>
        <p>Choose from 183,000 online video courses with new additions published every month</p>
        <div className="courses">
          <div className='buttons'>
            {accordionData.map((item) => 
              <button>{item.title}</button>
            )}
            </div>

            <div className='coursesSection'>
              <h2>Expand your career opportunities with Python</h2>
              <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to ..</p>
              <button>Explore Python</button>
              <div className='cItems'>
                <Cor />
              </div>
            </div>
          </div>
      </div>
      <div className="gapSec">
          <h2>why learn on Udemy?</h2>
          <div className='para'>
            <p>Learn in-demand skills with over 183,000 video courses</p>
            <p>Choose courses taught by real-world experts</p>
            <p>Learn at your own pace, with lifetime access on mobile and desktop</p>
          </div>
      </div>
    </section>
  );
};

export default AccordSec;