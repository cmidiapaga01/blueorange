import React from 'react';
import Carousel from '../components/Carousel';
import Testimonials from '../components/Testimonials';
import Accordion from '../components/Accordion';
import ProducSimple from '../components/ProductSimple';
import ProductSimple from '../components/ProductSimple';

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <ProductSimple />
      <Testimonials />
      <Accordion />
    </div>
  );
}
