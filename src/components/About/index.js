import React from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import './style.css';

import Emily from '../../media/layout/emily.jpg';

export default function index() {
  return (
    <div className='full-page about'>
      <Element name='about'>
        <Fade>
          <h2 className='full-page-title'>about</h2>
        </Fade>
      </Element>
      <div className='about-box'>
        <Fade delay={700} down>
          <img src={Emily} alt='' className='about-image' />
        </Fade>
        <Fade delay={1400} up>
          <p className='about-paragraph'>
            My name is Emily Clarke and nothing makes me happier than creating
            beautiful flower displays and presents from my very own
            workshop/shed in my back garden. Well, tell a lie, I feel even
            happier to hear how much my work brightens up each home, valentines,
            birthdays, wedding, and Christmas of my customers. I am always
            looking for new ideas and challenges, so contact me with any request
            and I will do everything I can to make it come true.
          </p>
        </Fade>
      </div>
    </div>
  );
}
