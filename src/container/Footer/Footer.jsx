import React from 'react';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='footer-links'>
      <div className='footer-links-contact'>
        <h1 className='footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>14B, Main Street, ABC Market, New Delhi-112001</p>
        <p className='p__opensans'>+91 9123441230</p>
        <p className='p__opensans'>011 2125551230</p>
      </div>
      <div className='footer-links-logo'>
        <img src={images.reserve} />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
        <div className='footer-links-icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='footer-links-work'>
        <h1 className='footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00am - 12:00am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00am - 11:00pm</p>
      </div>
    </div>

    <div className='footer-copyright'>
      <p className='p__opensans'>2024 The Reserve. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
