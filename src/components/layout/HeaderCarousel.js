import React, { useState, useEffect } from 'react';
import PorsheImg from '../../assets/images/porshe.png';
import MercedesImg from '../../assets/images/mercedes.png';
import MiniCooperImg from '../../assets/images/mini-cooper.png';
import RightArrow from '../../assets/svg/icon_right_arrow.svg';
import LeftArrow from '../../assets/svg/icon_left_arrow.svg';

const HeaderCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [PorsheImg, MercedesImg, MiniCooperImg];

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
                        style={{borderRadius: "50px"}}
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
