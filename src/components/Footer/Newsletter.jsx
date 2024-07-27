import React from 'react';
import { SubHeading } from "../../components"
import './Newsletter.css';

const Newsletter = () => (
  <div className='newsLetter'>
    <div className='newLetter-heading'>
      <SubHeading title='Newsletter'/>
      <h1 className='headtext__cormorant'>Subscribe to our Newsletter!</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='newsLetter-input flex__center'>
      <input type='email' placeholder='Enter your email address!'/>
      <button className='custom__button'>Subscribe!</button>
    </div>
  </div>
);

export default Newsletter;
