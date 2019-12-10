import React from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import './style.css';

export default function index() {
  return (
    <div className='contact'>
      <Element name='contact'>
        <Fade>
          <h2 className='full-page-title'>contact</h2>
        </Fade>
      </Element>
      <div className='contact-box'>
        <Zoom>
          <p className='contact-title'>PHONE</p>
        </Zoom>
        <Fade right>
          <a href='tel:07581749867'>
            <i className='fas fa-phone-square'></i>
          </a>
        </Fade>
        <Zoom>
          <p className='contact-title'>EMAIL</p>
        </Zoom>
        <Fade left>
          <a href='mailto:perfectpetalsbyemil@outlook.com'>
            <i className='fas fa-envelope-square'></i>
          </a>
        </Fade>
        <Zoom>
          <p className='contact-title'>FACEBOOK</p>
        </Zoom>
        <Fade right>
          <a
            href='https://www.facebook/perfect-petals-by-emily-683345555382458/'
            target='blank'
          >
            <i className='fab fa-facebook-square'></i>
          </a>
        </Fade>
        <Zoom>
          <p className='contact-title'>INSTAGRAM</p>
        </Zoom>
        <Fade left>
          <a
            href='https://www.instagram.com/perfectpetalsbyemily/'
            target='blank'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </Fade>
      </div>
    </div>
  );
}
