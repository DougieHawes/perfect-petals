import React from 'react';
import { Link } from 'react-scroll';
import Slide from 'react-reveal/Slide';

import './style.css';

export default function index() {
  return (
    <Slide delay={1400} down>
      <div className='header'>
        <Link to='landing' offset={-70} spy={true} smooth={true} duration={500}>
          <h1 className='header-title'>Perfect Petals</h1>
        </Link>
        <Link
          className='header-link'
          to='work'
          spy={true}
          smooth={true}
          duration={700}
        >
          work
        </Link>
        <Link
          className='header-link'
          to='reviews'
          spy={true}
          smooth={true}
          duration={700}
        >
          reviews
        </Link>
        <Link
          className='header-link'
          to='services'
          spy={true}
          smooth={true}
          duration={700}
        >
          services
        </Link>
        <Link
          className='header-link'
          to='about'
          spy={true}
          smooth={true}
          duration={700}
        >
          about
        </Link>
        <Link
          className='header-link'
          to='contact'
          spy={true}
          smooth={true}
          duration={700}
        >
          contact
        </Link>
      </div>
    </Slide>
  );
}
