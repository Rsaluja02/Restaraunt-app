import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from "../../constants";
import { SubHeading } from "../../components";
import './Gallery.css';


const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04] 


const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  return (
    <div className='gallery flex__center'>
      <div className='gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='gallery-images'>
        <div className='gallery-images-container' ref={scrollRef}>
          {galleryImages.map((image,index) => (
            <div className='gallery-images-card  flex__center' key={`gallery-image-${index + 1}`}> 
              <img src={image} alt='gallery'/>
              <BsInstagram className='gallery-image-icon'/>
            </div>
          ))}

        </div>

        <div className='gallery-images-arrows'>
          <BsArrowLeftShort className='gallery-arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery-arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
