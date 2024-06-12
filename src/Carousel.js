import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Carousel = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div>
        <div className="max-w-[1300px] mx-auto  py-6 overflow-hidden px-6">
          <Slider {...settings}>
            {images.map((el, i) => (
              <div key={i} className=" w-[227px]">
                <img className="w-full px-3 " src={el} alt={`slide-${i}`} />
              </div>
            ))}
          </Slider>
        </div>
    </div>
  )
}

export default Carousel