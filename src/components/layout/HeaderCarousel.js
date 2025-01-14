import React, { useState, useEffect } from 'react';
import BmwImg from '../../assets/images/bmw.png';
import DealerLogo from '../../assets/images/dealer-logo-preta.png';
import RightArrow from '../../assets/svg/icon_right_arrow.svg';
import LeftArrow from '../../assets/svg/icon_left_arrow.svg';

const HeaderCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [BmwImg, DealerLogo];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="header-carousel">
            <div onClick={prevSlide}>
                <img src={LeftArrow} style={{ width: '30px', height: 'auto', cursor: 'pointer' }} />
            </div>
            <div className="carousel-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`carousel-image ${currentIndex === index ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="next" onClick={nextSlide}>
                <img src={RightArrow} style={{ width: '30px', height: 'auto', cursor: 'pointer' }} />
            </div>
        </div>
    );
};

export default HeaderCarousel;
