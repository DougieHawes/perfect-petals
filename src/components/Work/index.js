import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import './style.css';

import image01 from '../../media/work/FB_IMG_1575981543456.jpg';
import image02 from '../../media/work/FB_IMG_1575981551076.jpg';
import image03 from '../../media/work/FB_IMG_1575981563555.jpg';
import image04 from '../../media/work/FB_IMG_1575981578046.jpg';
import image05 from '../../media/work/FB_IMG_1575981592085.jpg';
import image06 from '../../media/work/FB_IMG_1575981604756.jpg';
import image07 from '../../media/work/FB_IMG_1575981644398.jpg';
import image08 from '../../media/work/FB_IMG_1575981666891.jpg';
import image09 from '../../media/work/FB_IMG_1575981677811.jpg';
import image10 from '../../media/work/FB_IMG_1575981707111.jpg';
import image11 from '../../media/work/FB_IMG_1575981723816.jpg';
import image12 from '../../media/work/FB_IMG_1575981803972.jpg';
import image13 from '../../media/work/FB_IMG_1575981854117.jpg';
import image14 from '../../media/work/FB_IMG_1575981862430.jpg';
import image15 from '../../media/work/FB_IMG_1575981877178.jpg';
import image16 from '../../media/work/FB_IMG_1575981894231.jpg';
import image17 from '../../media/work/FB_IMG_1575981905655.jpg';
import image18 from '../../media/work/FB_IMG_1575981919758.jpg';
import image19 from '../../media/work/FB_IMG_1575981984667.jpg';
import image20 from '../../media/work/FB_IMG_1575982006959.jpg';

export default class index extends Component {
  workBoxes = [
    {
      key: 0,
      image: image01,
      title: 'Christmas Wreathes'
    },
    { key: 1, image: image02, title: 'Bottle Lamps' },
    { key: 2, image: image03, title: 'Seasonal Flowers' },
    { key: 3, image: image04, title: 'Wreath at my local cafe' },
    { key: 4, image: image05, title: 'Candy Cane Mice' },
    { key: 5, image: image06, title: 'Natural Owl Plant Pot' },
    { key: 6, image: image07, title: 'In loving memory' },
    { key: 7, image: image08, title: 'Commemorative spreads' },
    { key: 8, image: image09, title: 'Autumn Bunch' },
    { key: 9, image: image10, title: 'Halloween beauty' },
    { key: 10, image: image11, title: 'Halloween bunch' },
    { key: 11, image: image12, title: 'Frequent special offers' },
    { key: 12, image: image13, title: 'Purple and Yellow Door Hanging' },
    { key: 13, image: image14, title: 'Mini Pot' },
    { key: 2, image: image15, title: 'With Love' },
    { key: 3, image: image16, title: 'In Memory of Dad' },
    { key: 4, image: image17, title: 'For shoe lovers' },
    { key: 5, image: image18, title: 'Giving thanks' },
    { key: 6, image: image19, title: 'Spring bunch' },
    { key: 7, image: image20, title: 'Gates of Heaven' }
  ];

  render() {
    return (
      <div className='work'>
        <Element name='work'>
          <Fade>
            <h2 className='full-page-title'>work</h2>
          </Fade>
        </Element>
        <div className='work-grid'>
          {this.workBoxes.map(work => {
            return (
              <Zoom>
                <div key={work.key} className='work-box'>
                  <img src={work.image} alt='' className='work-image' />
                  <p className='work-title'>{work.title}</p>
                  <div className='work-sub'>
                    <a
                      href='https://www.facebook/perfect-petals-by-emily-683345555382458/'
                      target='blank'
                    >
                      <div className='work-sub-text'>
                        like this?
                        <br /> contact me
                      </div>
                    </a>
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
      </div>
    );
  }
}
