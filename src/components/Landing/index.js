import React from 'react';
import { Link, Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import './style.css';

export default function index() {
  return (
    <div className='full-page landing'>
      <Element name='landing'>
        <div className='landing-title'>
          <Fade duration={1400} down>
            <h1>Perfect Petals</h1>
          </Fade>
          <Fade duration={1400} delay={700} down>
            <p>By Emily Clarke</p>
          </Fade>
          <Fade duration={1400} delay={1400} up>
            <Link to='work' spy={true} smooth={true} duration={1400}>
              <i className='fas fa-chevron-circle-down'></i>
            </Link>
          </Fade>
        </div>
      </Element>
    </div>
  );
}
