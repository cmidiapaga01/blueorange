import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@chakra-ui/react';

// Importando as imagens da pasta 'images'
import image1 from '../images/lounge.jpg';
import image2 from '../images/lounge2.jpg';
import image3 from '../images/lounge3.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Carousel = () => {
  const cards = [image1, image2, image3];

  return (
    <Box width="full" height="600px">
      <Slider {...settings}>
        {cards.map((src, index) => (
          <Box
            key={index}
            height="600px"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${src})`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
