import React from 'react';
import { images } from "../../constants"
import { SubHeading } from "../../components"

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='chef-img app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef-image' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='chef-content'>
        <div className='chef-content-quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        </div>
        <p className='p__opensans'>Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et</p>
      </div>

      <div className='chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
