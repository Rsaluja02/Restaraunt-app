import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Header.css';

const Header = () => (
  <div className='header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor'/>
      <h1 className='header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className='custom__button'>Explore Our Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header-img'/>
    </div>
  </div>
);

export default Header;
