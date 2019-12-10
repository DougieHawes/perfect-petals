import React from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import './style.css';

export default function index() {
  return (
    <div className='reviews'>
      <Element name='reviews'>
        <Fade>
          <h2 className='full-page-title reviews-title'>reviews</h2>
        </Fade>
      </Element>
      <div className='reviews-container'>
        <Slide left>
          <div className='review'>
            <p className='review-quote rq-left'>
              "I get Emily's wreathes every year for my front door at Christmas,
              each year more neighbours ask me to get one for them"
            </p>
            <Fade delay={700} up>
              <p className='review-name rn-left'>Rose</p>
            </Fade>
          </div>
        </Slide>
        <Slide right>
          <div className='review'>
            <p className='review-quote rq-right'>
              "I'm and ex-pat living in the remote Pictcairn Islands 3000 miles
              off the coast of New Zealand, nothing makes me feel more at home
              than to decorate what my sister sends over from Perfect Petals"
            </p>
            <Fade delay={700} up>
              <p className='review-name rn-right'>Francis</p>
            </Fade>
          </div>
        </Slide>
        <Slide left>
          <div className='review'>
            <p className='review-quote rq-left'>
              "Excellent service. Had gifts, flowers, plants and weathes from
              this young lady, 10 out of 10 every time"
            </p>
            <Fade delay={700} up>
              <p className='review-name rn-left'>Mandy</p>
            </Fade>
          </div>
        </Slide>
        <Slide right>
          <div className='review'>
            <p className='review-quote rq-right'>
              "Absolutely beautiful flowers presented perfectly with a very
              reasonable price. Will definitely be ordering again very soon"
            </p>
            <Fade delay={700} up>
              <p className='review-name rn-right'>Angela</p>
            </Fade>
          </div>
        </Slide>
        <Slide left>
          <div className='review'>
            <p className='review-quote rq-left'>
              "The flowers she did for my uncles funeral were outstanding. We
              were very pleased"
            </p>
            <Fade delay={700} up>
              <p className='review-name rn-left'>Beverly</p>
            </Fade>
          </div>
        </Slide>
        <Slide right>
          <div className='review'>
            <p className='review-quote rq-right'>
              "Thank you very much for the lovely plants and delivery. very kind
              of you"
            </p>
            <Fade delay={700} up>
              <p className='review-name rn-right'>Claire</p>
            </Fade>
          </div>
        </Slide>
      </div>
    </div>
  );
}
