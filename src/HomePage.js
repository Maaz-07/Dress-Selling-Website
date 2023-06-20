import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css'; // Import the CSS file

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

function Homepage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="homepage-content">
        <div className="slideshow-container">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} className="arrow arrow-left">
                  &#60;
                </button>
              )
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="arrow arrow-right">
                  &#62;
                </button>
              )
            )}
            renderIndicator={() => null} // Remove the indicators
          >
            <div>
              <img src={image1} alt="Slide 1" className="slide-image" />
            </div>
            <div>
              <img src={image2} alt="Slide 2" className="slide-image" />
            </div>
            <div>
              <img src={image3} alt="Slide 3" className="slide-image" />
            </div>
          </Carousel>
        </div>
      </div>
      {/* Add the rest of your homepage content here */}
    </div>
  );
}

export default Homepage;