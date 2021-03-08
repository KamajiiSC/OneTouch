import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import Model from '../../resources/coach-model.png';

const LandingPage = () => (
  <section id="landing">
    <Header />
    
    <section className="landing-blurb-img">
      <section className="blurb">
        <h1>OneTouch Training</h1>
        <p className="title-desc">
          Rates starting at $14.99 per hour!
          Safe, Professional, and Reliable personal training is only OneTouch away
        </p>  
      </section>

      <img src={Model} alt="Fit man holding clipboard" className="model-img"/>
    </section>
    

    <div className="cta">
      <h3 className="cta-title">Find us at one of our 30 locations!</h3>
      <a href="#" rel="noopener noreferrer" className="cta-btn">Call Now!</a>
    </div>

  </section>
);

export default LandingPage;
