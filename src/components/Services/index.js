import React from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import './style.css';

import birthday from '../../media/work/FB_IMG_1575981905655.jpg';
import valentines from '../../media/work/FB_IMG_1575981877178.jpg';
import funeral from '../../media/work/FB_IMG_1575982006959.jpg';
import wedding from '../../media//work/FB_IMG_1575981677811.jpg';
import seasonal from '../../media/work/FB_IMG_1575981578046.jpg';

export default function index() {
  return (
    <div className='services'>
      <Element name='services'>
        <Fade>
          <h2 className='full-page-title'>services</h2>
        </Fade>
      </Element>
      <div className='services-grid'>
        <Fade up>
          <div className='services-box'>
            <img src={birthday} alt='' className='services-image' />
            <p>BIRTHDAYS</p>
          </div>
        </Fade>
        <Fade up>
          <div className='services-box'>
            <img src={valentines} alt='' className='services-image' />
            <p>VALENTINES</p>
          </div>
        </Fade>
        <Fade up>
          <div className='services-box'>
            <img src={funeral} alt='' className='services-image' />
            <p>FUNERALS</p>
          </div>
        </Fade>
        <Fade up>
          <div className='services-box'>
            <img src={wedding} alt='' className='services-image' />
            <p>WEDDINGS</p>
          </div>
        </Fade>
        <Fade up>
          <div className='services-box'>
            <img src={seasonal} alt='' className='services-image' />
            <p>SEASONAL</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
